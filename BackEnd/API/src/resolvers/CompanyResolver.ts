import { Resolver, Query, Mutation, Arg, ObjectType, Field, Ctx, UseMiddleware } from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { Company } from '../entity/Company';
import { AuthContext } from '../context/authContext';
import { createRefreshToken, createAccessToken } from '../util/auth';
import { isAuth } from '../middleware/isAuth';
import { setRefreshtoken } from '../util/setRefreshToken';

@ObjectType()
class LoginResponse {
	@Field()
	accessToken: string;
	@Field(() => Company)
	company: Company;
}

@ObjectType()
class RegisterResponse {
	@Field()
	accessToken: string;
	@Field(() => Company)
	company: Company;
}

@Resolver()
export class CompanyResolver {

	// Get Companies
	@Query(() => [Company])
	@UseMiddleware(isAuth)
	getCompanies() {
		return Company.find();
	}

	// Get Current Company Details
	@Query(() => Company)
	@UseMiddleware(isAuth)
	getCurrentCompanyDetail(@Ctx() { payload }: AuthContext) {
		return Company.findOne({ where: { id: payload?.companyId } });
	}

	// Register System as Company
	@Mutation(() => RegisterResponse)
	async registerCompany(
		@Arg('title') title: string,
		@Arg('address') address: string,
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Ctx() { res }: AuthContext
	) {
		const company = await Company.findOne({ where: { email } });
		if (company) {
			throw new Error('Company already registered');
		}
		const cryptoPassword = await hash(password, 12);
		try {
			const company = new Company();
			company.title = title;
			company.address = address;
			company.email = email;
			company.password = cryptoPassword;
			await company.save();

			setRefreshtoken(res, createRefreshToken(company));

			return {
				accessToken: createAccessToken(company)
			};
		} catch (err) {
			throw new Error(err);
		}
	}

	// Login to System
	@Mutation(() => LoginResponse)
	async loginCompany(
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Ctx() { res }: AuthContext
	): Promise<LoginResponse> {
		const company = await Company.findOne({ where: { email } });
		if (!company) {
			throw new Error('Could not find company');
		}

		const valid = await compare(password, company.password);
		if (!valid) {
			throw new Error('Incorrect password');
		}

		setRefreshtoken(res, createRefreshToken(company));

		return {
			accessToken: createAccessToken(company),
			company,
		};
	}

	// Logout from System
	@Mutation(() => Boolean)
	async logoutCompany(@Ctx() { res }: AuthContext) {
		setRefreshtoken(res, '');
		return true;
	}
}
