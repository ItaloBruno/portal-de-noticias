function NoticiasDAO(connection){
    this._connection = connection;
};

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    var query = 'select * from noticias where id_noticia = ' + id_noticia.id_noticia;
    this._connection.query(query, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(dadosNoticia, callback){
    this._connection.query('insert into noticias set ? ', dadosNoticia, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

module.exports = function(){
    return NoticiasDAO;
};