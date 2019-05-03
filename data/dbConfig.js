// Responsibility of this file is to bring knex in.
// Then configure it to connect to our database, so it can be used anywhere.

const knex = require('knex');
const knexConfig = require('../knexfile.js');
// returns the development object's configuration
const db = knex(knexConfig.development)

// make it usable for any file that needs the configured version of knex.(models)
module.exports = db;