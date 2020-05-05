var express = require('express');
const bodyparser = require('body-parser');
var app = express();
var port = 9000;
const getdb = require('./router/getdb');
const readdb = require('./router/readdb');
const postdb = require('./router/postdb');
const putdb = require('./router/putdb');
const deletedb = require('./router/deletedb');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyparser.json()) // for parsing application/json
app.use(bodyparser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
 
app.get('/', function(req,res,next){
  res.render('home/home');
});

app.use('/getdb/', getdb);
app.use('/readdb/', readdb);
app.use('/postdb/', postdb);
app.use('/putdb/', putdb);
app.use('/deletedb/', deletedb);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
