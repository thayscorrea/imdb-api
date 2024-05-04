var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        port: 8889,
        database : 'imdb'
     }
});

module.exports = knex