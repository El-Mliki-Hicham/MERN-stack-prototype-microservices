var express = require('express');
var router = express.Router();
var postModel = require('../models/posts.model')
// const cors = require('cors');
const {randomBytes} =  require('crypto');
const { post } = require('.');
/* GET users listing. */
router.get('/getAllPosts', function(req, res, next) {
  postModel.find()
  .then((posts)=>{
    res.send({status:200 , data:posts})
  })
});
router.post('/store', function(req, res, next) {
  const GenerateId  = randomBytes(4).toString('hex');
  const {title}=req.body;
  var newPost = new postModel({
    postId : GenerateId,
    title : title 
  })
  newPost.save()
  .then((newPost)=>{
    res.send({status : 200 , message : "post has been created",data: newPost})
  }).
  catch((err)=>{
    res.send(err)
  })
});



module.exports = router;
