var express = require('express');
var request = require('request');
var moment = require('moment');
var ig = require('instagram-node').instagram();
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 8000));

app.get('/feed', function(req, res) {
  //have the base instagram URL 
  var instagramURL = "https://api.instagram.com/v1";
  // get your own client id http://instagram.com/developer/
  var instaClientId = '6a4536f6c1334d1cb0e37519930b084c';
  ig.use({ client_id: 'b22f1558148641a5a06eaeb8e2d06f16',
         client_secret: '26ddac68deb14c1a91c0fc3547471ae7' });

  var allResults = [];
  var count = 0;
  var hdl = function(err, result, pagination, remaining, limit) {
    // Your implementation here
    allResults[count] = JSON.stringify(result);
    count = count + 1;
    if(pagination.next) {
      pagination.next(hdl); // Will get second page results
    } else {
      var finalResult = "";
      for (i = 0; i < allResults.length; i++) {
        finalResult += ('"' + i.toString() + '":' + allResults[i]);
        if (i + 1 < allResults.length) {
          finalResult += ",";
        }
      }
      finalResult = "{" + finalResult + "}";
      finalResult = JSON.parse(finalResult);
      x = instaToTimeline(finalResult, req.query.hashtag, count);
      res.json(x);
    }
  };
  ig.tag_media_recent(req.query.hashtag, hdl);
});

//   var instaReq = '/tags/' + req.query.hashtag + '/media/recent?';
//   var fullUrl = instagramURL + instaReq;

//   var config = {
//     client_id: clientId,
//   };

//   console.log(fullUrl + "?client_id=" + config.client_id);

//   var data = "";

//   request({url:fullUrl, qs: config})
//     .on('data', function(d) {
//       data += d;
//     })
//     .on('end', function() {
//       tempdata = JSON.parse(data);
//       if (tempdata.pagination.next_url) {
//         paginationData = moreData(tempdata.pagination.next_url);
//         // data = JSON.parse(data);
//         // data.concat(paginationData);
//         // res.json(instaToTimeline(data, req.query.hashtag));
//       }
//     });
// });

// function moreData(fullUrl) {
//   var data = "";
//   console.log("called with: " + fullUrl);
//   request({url:fullUrl})
//     .on('data', function(d) {
//       data += d;
//     })
//     .on('end', function() {
//       var tempdata = JSON.parse(data);
//       if (tempdata.pagination.next_url) {
//         return tempdata.concat(moreData(tempdata.pagination.next_url));
//       } else {
//         return JSON.parse(data)
//       }
//     });
// }

function instaToTimeline(d, htag, count) {
  var instaObj = {
    "title": {
      "media": {
        "url": "",
        "caption": "",
        "credit": ""
      },
      "text": {
        "headline": "#" + htag + " wedding",
        "text": "Some body text here"
      }
    },
    "events": []
  }

  items = 0;
  for (j = 0; j < count; j++) {
    data = d[j];
    for (i = 0; i < data.length; i++) {
      row = data[i];

      tempDate = moment(new Date(row.created_time * 1000));

      instaObj.events[items] = {
        "media": {
          "url": row.images.standard_resolution.url,
          "caption": "Test caption",
          "credit": "@" + row.user.username
        },
        "start_date": {
          "month": tempDate.format("MM"),
          "day": tempDate.format("DD"),
          "year": tempDate.format("YYYY"),
          "hour": tempDate.format("HH"),
          "minute": tempDate.format("mm"),
          "second": tempDate.format("ss")
        },
        "text": {
          "headline": "#" + htag + " wedding",
          "text": "<p>" + row.caption.text + "</p>"
        }
      }

      items = items + 1;
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