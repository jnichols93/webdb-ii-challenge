// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // driver to use
    connection: {
      filename: './data/car-dealer.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
};