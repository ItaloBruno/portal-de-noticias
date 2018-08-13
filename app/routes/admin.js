module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', (req, res) => {
        var dadosNoticia = req.body;
        var connection    = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.salvarNoticia(dadosNoticia, (error, result) => {
            res.redirect('/noticias');
        });
    });
};
