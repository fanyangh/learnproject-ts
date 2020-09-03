const mysql = {
  dev: {
    username: "root",
    password: "mustsql",
    host: "10.172.246.200",
    port: 6703,
    dialect: "mysql",
    database: "project_template",
    timezone: "+08:00",
    pool: {
      max: 200,
      idle: 10000
    }
  },
  test: {
    username: "root",
    password: "mustsql",
    host: "10.172.246.200",
    port: 6703,
    dialect: "mysql",
    database: "project_template",
    timezone: "+08:00",
    pool: {
      max: 200,
      idle: 10000
    }
  },
  production: {
    username: "root",
    password: "mustsql",
    host: "10.172.246.200",
    port: 6703,
    dialect: "mysql",
    database: "project_template",
    timezone: "+08:00",
    pool: {
      max: 200,
      idle: 10000
    }
  }
};
export { mysql };
