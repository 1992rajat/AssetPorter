//Install express server
const express = require('express');
var fallback = require('express-history-api-fallback');
const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
var root = __dirname + '/dist/my-new-app'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }));
app.listen(process.env.PORT ||3010); 

//var express = require('express');
var router = express.Router();
//const app = express()
var request = require('request');
var FuelRest = require('fuel-rest');
var bodyParser = require('body-parser')
var tokenData = "";
app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json());
//var routes = require('./routes');
var PythonShell = require('python-shell')
var multer  = require('multer')
var filename='';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './')
    },
    filename: function (req, file, cb) {
     // console.log("request originalname",file.originalname);
      cb(null, "originalname")
    }
  })
  
  
  var upload = multer({ storage: storage })
  var tokenData = "";


app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
  })
  app.post('/uploadFile', upload.single('file'), function(req,res,next){
    console.log(req.file);
    res.send(req.file);
  })
  app.get('/eloquaEmail',function(res,req){
    //alert('email');
    console.log('email');
   
    console.log("calling python script")
    var pyshell = new PythonShell('./Image.py');
    pyshell.send(JSON.stringify(["client ID","Client Secret"]));
    //pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
      //  console.log(message);
        
    //});
    
    // end the input stream and allow the process to exit
    /* pyshell.end(function (err) {
        if (err){
            throw err;
        };
    
        console.log('finished');
    }); */
    PythonShell.run('./Email.py', function (err, message) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        res.send(message);
        console.log('results: %j', message);
    });
    //console.log(req.params.msg);
  /... code to do your work .../
});
app.get('/eloquaLandingPage',function(res,req){
//   var pyshell = new PythonShell('./Image.py');
//   pyshell.send(JSON.stringify(["client ID","Client Secret"]));
  PythonShell.run('./LandingPage.py', function (err, message) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      res.send(message);
      console.log('results: %j', message);
  });
});
app.get('/sfmcEmail',function(req,res){
  //alert('SFMC email');
  console.log('sfmcemail');
 
  console.log("calling python script")
  var pyshell = new PythonShell('./Image.py');
  pyshell.send(JSON.stringify(["client ID","Client Secret"]));
  //pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
    //  console.log(message);
      
  //});
  
  // end the input stream and allow the process to exit
  /* pyshell.end(function (err) {
      if (err){
          throw err;
      };
  
      console.log('finished');
  }); */
  PythonShell.run('./EloquaToMc.py', function (err, message) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', message);
      res.send(message);
      
  });
  //console.log(req.params.msg);
/... code to do your work .../
});


module.exports = app;


