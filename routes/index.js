var express = require('express');
var router = express.Router();
var docsHandler = require('../handlers').docsHandlers;
var app = express();
var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//require('handlers');
var path = require('path');

// configure tv sso app
/*app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, '../public'), {maxAge : 86400000}));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use('/', router);

*/
var saveDocHandler = function (req, res){
    var params = req.body;//console.log('XXX---',req.body.ipAddresses);

    //Save the document
    docsHandler.save(params, function(err, res){
        if(err)
            console.log(err);
        else
            res.sendStatus(200);
    });
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodepad' });
});


router.post('/savedoc', saveDocHandler);

module.exports = router;
