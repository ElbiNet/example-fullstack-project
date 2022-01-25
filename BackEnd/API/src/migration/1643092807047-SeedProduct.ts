import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import {ProductSeed} from "../seeds/product.seed";

export class SeedProduct1643092807047 implements MigrationInterface {

    // @ts-ignore
    public async up(queryRunner: QueryRunner): Promise<any> {

        const products = await getRepository("products").save(ProductSeed);
        const productSeed: any = ProductSeed;
        productSeed.products = products;

    }

    // @ts-ignore
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
