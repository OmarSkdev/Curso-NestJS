import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

/**
DB_HOST=localhost
DB_PORT=5433
DB_USER=ucodrr
DB_PASSWORD=secret1234
DB_NAME=codrrdb
**/

/* ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV.trim()}`,
  }); */
  
// const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs',
    entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);

