var express = require('express');
var router = express.Router();
const app = express()
var request = require('request');
var FuelRest = require('fuel-rest');
var bodyParser = require('body-parser')
var tokenData = "";
//var routes = require('./routes');
var PythonShell = require('python-shell')

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
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
