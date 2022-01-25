import { Company } from '../entity/Company';
import { sign } from 'jsonwebtoken';

export const createAccessToken = (company: Company) => {
	return sign(
		{ companyId: company.id, companytitle: company.title, email: company.email },
		process.env.ACCESS_TOKEN_SECRET!,
		{
			expiresIn: '60m',
		}
	);
};

export const createRefreshToken = (company: Company) => {
	return sign(
		{ companyId: company.id, companytitle: company.title, email: company.email },
		process.env.REFRESH_TOKEN_SECRET!,
		{
			expiresIn: '1d',
		}
	);
};
