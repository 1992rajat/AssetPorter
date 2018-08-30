//Install express server
const express = require('express');
var fallback = require('express-history-api-fallback');
const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
var root = __dirname + '/dist'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }));
app.listen(process.env.PORT || 8080); 