import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1722554051745 implements MigrationInterface {
    name = 'Init1722554051745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users_projects\` DROP FOREIGN KEY \`FK_0f280c70a3a6ab7f4cf3c658c4c\``);
        await queryRunner.query(`ALTER TABLE \`users_projects\` DROP FOREIGN KEY \`FK_741210c246defe00ed877a98f2a\``);
        await queryRunner.query(`ALTER TABLE \`users_projects\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` CHANGE \`project_id\` \`project_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` ADD CONSTRAINT \`FK_0f280c70a3a6ab7f4cf3c658c4c\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` ADD CONSTRAINT \`FK_741210c246defe00ed877a98f2a\` FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users_projects\` DROP FOREIGN KEY \`FK_741210c246defe00ed877a98f2a\``);
        await queryRunner.query(`ALTER TABLE \`users_projects\` DROP FOREIGN KEY \`FK_0f280c70a3a6ab7f4cf3c658c4c\``);
        await queryRunner.query(`ALTER TABLE \`users_projects\` CHANGE \`project_id\` \`project_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` ADD CONSTRAINT \`FK_741210c246defe00ed877a98f2a\` FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_projects\` ADD CONSTRAINT \`FK_0f280c70a3a6ab7f4cf3c658c4c\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
