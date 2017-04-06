// dependancies
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const PORT = process.env.PORT || 3000;


// normal setup for express & mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(require('./router'));

// listen
app.listen(PORT, () => console.log('Server is listening on port', PORT));
