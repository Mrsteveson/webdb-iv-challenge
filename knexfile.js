// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.db3'
    },
    useNullAsDefault: true,
  },

  migrations: {
    directory: './data/migrations'
  },

  seeds: {
    directory: './data/seeds'
  },

  // SQLLite does not enforce Foreign Keys by default!*****
  // Below enforces Foreign Key constraints
  pool: {
    afterCreate: (connection, done) => {
      connection.run('PRAGMA foreign_keys = ON', done)
    }
  },
};
