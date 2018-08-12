module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        var connection    = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, (error, result) => {
            res.render('noticias/noticias', {noticias: result});
        });
    });
};