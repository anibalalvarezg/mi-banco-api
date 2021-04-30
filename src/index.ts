import app from './app';

function initServer() {
    app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
}

initServer();