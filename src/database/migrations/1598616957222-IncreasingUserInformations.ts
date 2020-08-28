import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class IncreasingUserInformations1598616957222
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'username',
                type: 'varchar',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'birthday',
                type: 'timestamp with time zone',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'cpf',
                type: 'varchar',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'address',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'username');
        await queryRunner.dropColumn('users', 'birthday');
        await queryRunner.dropColumn('users', 'cpf');
        await queryRunner.dropColumn('users', 'address');
    }
}
