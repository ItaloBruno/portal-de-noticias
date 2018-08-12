var mysql = require('mysql');

var connMySql = () => {
    console.log('Conexão com o BD estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'portal_noticias'
    });
};

module.exports = () => {
    console.log('O autoload carregou o módulo de conexão com o BD');
    return connMySql;
};