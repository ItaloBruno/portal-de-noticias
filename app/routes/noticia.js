module.exports = (app) => {
    app.get('/noticia', (req, res) => {
        var connection    = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (error, result) => {
            res.render('noticias/noticia', {noticia: result});
        }); 
    });
};