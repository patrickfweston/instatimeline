var express = require('express');
var request = require('request');
var moment = require('moment');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 8000));

app.get('/feed', function(req, res) {
  //have the base instagram URL 
  var instagramURL = "https://api.instagram.com/v1";
  // get your own client id http://instagram.com/developer/
  var clientId = '6a4536f6c1334d1cb0e37519930b084c';

  var instaReq = '/tags/' + req.query.hashtag + '/media/recent?';
  var fullUrl = instagramURL + instaReq;

  var config = {
    client_id: clientId,
    count: req.query.count,
  };

  var data = "";
  request({url:fullUrl, qs: config})
    .on('data', function(d) {
      data += d;
    })
    .on('end', function() {
      data = JSON.parse(data);
      res.json(instaToTimeline(data, req.query.hashtag));
    });
});

function instaToTimeline(data, htag) {
  var instaObj = {
    "timeline": {
      "headline": "#" + htag + " wedding",
      "type":"default",
      "text": "Some body text here",
      "date": [],
    }
  }

  for (i = 0; i < (data.data).length; i++) {
    row = data.data[i];

    tempDate = moment(new Date(row.created_time * 1000));
    dateString = tempDate.format("YYYY,MM,DD,HH,mm,ss")


    instaObj.timeline.date[i] = {
      "startDate": dateString,
      "headline": "#" + htag + " wedding",
      "text": row.caption.text,
      "asset": {
       "media": row.images.standard_resolution.url,
        "credit": "@" + row.user.username
      },
    }
  }

  return JSON.parse(JSON.stringify(instaObj));
}

app.get('*', function (req, res) {
    res.sendFile('index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});