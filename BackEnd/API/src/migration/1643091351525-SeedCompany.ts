import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { CompanySeed } from "../seeds/company.seed";

export class SeedCompany1643091351525 implements MigrationInterface {

    // @ts-ignore
    public async up(queryRunner: QueryRunner): Promise<any> {

        const companies = await getRepository("companies").save(CompanySeed);
        const companySeed: any = CompanySeed;
        companySeed.companies = companies;

    }

    // @ts-ignore
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
