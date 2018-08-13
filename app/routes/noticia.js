module.exports = (app) => {
    app.get('/noticia', (req, res) => {
        var connection    = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia((error, result) => {
            res.render('noticias/noticia', {noticia: result});
        }); 
    });
};