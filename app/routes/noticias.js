module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        var connection    = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticias((error, result) => {
            res.render('noticias/noticias', {noticias: result});
        });
    });
};