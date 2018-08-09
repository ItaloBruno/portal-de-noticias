var http = require('http');

var server = http.createServer( (req, res) => 
{

    var categoria = req.url;

    if(categoria == '/tecnologia')
    {
        res.end(`<html lang="pt-br">
                <body>
                    <h1>Tecnologia</h1>
                </body>
            </html>`);
    }
    else
    {
        res.end(`<html lang="pt-br">
                <body>
                    <h1>Portal de notícias usando NodeJS</h1>
                </body>
            </html>`);
    }
    
});

server.listen(3000);
