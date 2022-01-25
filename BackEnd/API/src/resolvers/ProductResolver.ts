import {Resolver, Query, Mutation, Arg, UseMiddleware, Ctx} from 'type-graphql';
import { Product } from '../entity/Product';
import { isAuth } from '../middleware/isAuth';
import {AuthContext} from "../context/authContext";

@Resolver()
export class ProductResolver {

	// Get Front End All Product
	@Query(() => [Product])
	getFrontEndProducts() {
		return Product.find();
	}

	// Get Only Own Products
	@Query(() => [Product])
	@UseMiddleware(isAuth)
	getProducts(@Ctx() { payload }: AuthContext) {
		return Product.find({ where: { companyId: payload?.companyId } });
	}

	// Get Given id Product Details
	@Query(() => Product)
	@UseMiddleware(isAuth)
	async getProductDetail(
		@Ctx() { payload }: AuthContext,
		@Arg('id') id: number
	) {
		const product = await Product.findOne({ id: id, companyId: payload?.companyId });
		if (!product) {
			throw new Error('Product not found');
		}
		return product;
	}

	// Add New Product
	@Mutation(() => Product, { nullable: true })
	async addProduct(
		@Arg('companyId') companyId: number,
		@Arg('name') name: string,
		@Arg('description') description: string,
		@Arg('color') color: string,
		@Arg('size') size: string,
		@Arg('price') price: number,
	) {
		const product = await Product.findOne({name: name, companyId: companyId, color: color, size: size});
		if (product) {
			throw new Error('Product already registered');
		}

		try {
			const product = new Product();
			product.companyId = companyId;
			product.name = name;
			product.description = description;
			product.color = color;
			product.size = size;
			product.price = price;
			await product.save();

			return await product;

		} catch (err) {
			throw new Error(err);
		}
	}

	// Add New Product
	@Mutation(() => Product, { nullable: true })
	async editProduct(
		@Arg('id') id: number,
		@Arg('name') name: string,
		@Arg('description') description: string,
		@Arg('price') price: number,
	) {
		const product = await Product.findOne(id);
		if (!product) {
			throw new Error('Product not found');
		}

		try {
			product.name = name;
			product.description = description;
			product.price = price;
			await product.save();

			return await product;

		} catch (err) {
			throw new Error(err);
		}
	}

	// Remove Product
	@Mutation(() => Product, { nullable: true })
	async removeProduct(
		@Arg('companyId') companyId: number,
		@Arg('id') id: number,
	) {

		const product = await Product.findOne({id: id, companyId: companyId});

		if (product) {
			try {
				await product.remove();
			} catch (err) {
				throw new Error(err);
			}
		}
		else {
			throw new Error('Product not found');
		}
	}

}
