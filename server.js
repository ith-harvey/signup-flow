const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'https://mysterious-beyond-57369.herokuapp.com/'); //<-- you can change this with a specific url like http://localhost:4200
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);
