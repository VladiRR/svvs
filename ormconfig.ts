export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    'dist/apps/backend/api/src/**/*.entity.js', // where to find files entities when the script backend:api:entities is run
  ],
  migrations: [
    'dist/apps/backend/api/src/migrations/*.js', // where to find files migrations when the script backend:api:migrations:run is run
  ],
  cli: {
    'migrationsDir': 'apps/backend/api/src/migrations', // where to put files when the script backend:api:migration:create is run
  },
}
