{
  development: {
    username: process.env.DBUSER || "postgres";
    password: process.env.PASSWORD || "123";
    database: process.env.DATABASE || "trabajo";
    host: process.env.HOSTNAME || "localhost";
    dialect: process.env.DIALECT || "postgres";
    port: process.env.DBPORT || 5433;
    seederStorage: "json";
    seederStoragePath: "sequelizeSeeds.json"
  },
  test: {
    username: process.env.DBUSER || "postgres";
    password: process.env.PASSWORD || "123";
    database: process.env.DATABASE || "trabajo";
    host: process.env.HOSTNAME || "localhost";
    dialect: process.env.DIALECT || "postgres";
    port: process.env.DBPORT || 5433;
    seederStorage: "json";
    seederStoragePath: "sequelizeSeeds.json"
  },
  production: {
    username: process.env.DBUSER || "postgres";
    password: process.env.PASSWORD || "123";
    database: process.env.DATABASE || "trabajo";
    host: process.env.HOSTNAME || "localhost";
    dialect: process.env.DIALECT || "postgres";
    port: process.env.DBPORT || 5433;
    seederStorage: "json";
    seederStoragePath: sequelizeSeeds.json
  }
}
