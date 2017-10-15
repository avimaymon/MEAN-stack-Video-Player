const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const db = "mongodb://avimaymon:am2601111@ds163494.mlab.com:63494/videoplayer";

const Video = require('../models/video');

mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
  if (err)
    console.log('Error! ' + err);
  else
    console.log('--------\nConnecting to ' + db + ' was succesfull!');
});
router.get('/', function (req, res) {
  res.send('my bitch ass api works!');
});

router.get('/videos', function (req, res) {
  //res.send('get request for all videos');
  console.log('get request for all videos');
  Video.find({}).exec(function (err, videos) {
    if (err)
      console.log('Error! ' + err);
    else {
      res.json(videos);
    }
  })
});

router.get('/videos/:id', function (req, res) {
  //res.send('get request for all videos');
  console.log('get request for single video');
  Video.findById(req.params.id).exec(function (err, video) {
    if (err)
      console.log('Error! ' + err);
    else {
      res.json(video);
    }
  })
});

router.post('/videos', function (req, res) {
  console.log('Post a video');
  var newVideo = Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  newVideo.save(function (err, insertedVideo) {
    if (err)
      console.log('Error posting a new video');
    else
      res.json(insertedVideo);
  })
});

router.put('/videos/:id',function(req,res)
{
  console.log('Update video');
  Video.findByIdAndUpdate(req.params.id,
  {
  $set :{ title : req.body.title, url : req.body.url, description : req.body.description}
  },
  {
    new : true //gets the updated video, to get the original change to false
  },
  function(err,updatedVideo)
{
  if(err)
    res.send('Error updating video');
  else
    res.json(updatedVideo);
});
});

router.delete('/videos/:id',function(req,res)
{
console.log('Delete video');
Video.findByIdAndRemove(req.params.id,function(err,deletedVideo)
{
  if(err)
    res.send('Error deleting video')
  else
    res.json(deletedVideo);
})
});

/* get by title */
router.get('/videos/title/:title', function (req, res) {
  //res.send('get request for all videos');
  console.log('get request for single video');
  Video.find({
    "title": req.params.title
  }).exec(function (err, video) {
    if (err)
      console.log('Error! ' + err);
    else {
      res.json(video);
    }
  })
});


module.exports = router;
