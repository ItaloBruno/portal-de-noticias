var app = require('./config/server');
//================================================
var rotaHome        = require('./app/routes/home');
var rotaNoticias    = require('./app/routes/noticias');
var rotaFormulario  = require('./app/routes/formulario_inclusao_noticias');
//================================================
rotaHome(app);
rotaNoticias(app);
rotaFormulario(app);
//================================================
app.listen(3000, () => {
    console.log('Servidor rodando com Express na porta 3000');    
});