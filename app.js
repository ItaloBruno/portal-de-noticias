var application = require('./config/server');
//================================================
application.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000');    
});