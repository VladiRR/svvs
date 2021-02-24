export const environment = {
  production: false,
  connection: {
    type: process.env.DB_TYPE as 'aurora-data-api',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    dropSchema: false,
    synchronize: true,
    logging: true,
    entities: [
      'dist/apps/backend/api/src/**/*.entity{.ts, .js}'
    ],
    migrations: [
      'dist/apps/backend/api/migrations/*{.ts, .js}'
    ],
    cli: {
      'migrationsDir': 'db/migrations'
    }
  }
};
