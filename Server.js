var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var uuid = require('uuid');


app.use(express.static("webapp"));

app.get('/', function (req, res) {
    res.redirect('/');
});

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/save-response', function(req, res, next){

  //generates a random id for the participant's response
  var respId = uuid.v1()

  //data to be saved (participant's response)
  var row = [respId, req.body.startTime, req.body.endTime, req.body.testType, req.body.pretestPoints, req.body.posttestPoints,req.body.activityPoints, req.body.posttest2Points, req.body.pre, req.body.post, req.body.post2, req.body.flowPoints,req.body.flow, req.body.gender ,req.body.name, req.body.age, req.body.economicState, req.body.schoolGrade, req.body.email, req.body.whatsapp].join(";")+"\n"

  fs.stat('responses.csv', function (err, stat) {
      if (err == null) {
          //write the actual data and end with newline
          fs.appendFile('responses.csv', row, function (err) {
              if (err) throw err;
              console.log('The response was saved!');
          });
      }
      else {
          //write the headers and newline
          console.log('First answer, adding headers');
          var headers= ["responseId", "startTime","endTime","testType","stereotype-BoostPre", "stereotype-BoostPost","activityPoints","stereotype-BoostPost2","stereotype-BoostRawPre","stereotype-BoostRawPost", "stereotype-BoostRawPost2", "flowRawPoints", "flow", "gender", "name", "age", "economicState", "ethnicity", "schoolGrade", "email","whatsapp"].join(";") + "\n" + row

          fs.writeFile('responses.csv', headers, function (err) {
              if (err) throw err;
              console.log('Response saved!');
          });
      }
  });

  res.end()

});

app.listen(8086, 'localhost'); //8086
console.log("This project is listening on port 8080");
