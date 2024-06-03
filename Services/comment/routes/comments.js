var express = require('express');
var router = express.Router();
const {randomBytes} =  require('crypto');
var commentModel = require('../models/comment.model')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getCommnetByPostId/:postId',(req,res)=>{
  // res.send(res.params)
  var query = { postId: req.params.postId };
  commentModel.find(query)
  .then((comments)=>{
    res.send({status:200 , data:comments})
  })
})


router.post('/storeComment',(req,res)=>{
 
  const commentId  = randomBytes(4).toString('hex');
  const postId =  req.body.postId;
  const content =  req.body.content;
const newComment = new commentModel({
  commentId : commentId,
  postId : postId,
  content : content
})
  newComment.save()
  .then((newComment)=>{
    res.send({status:200,msg:"comment has been adeed",data:newComment})
  })
})
module.exports = router;
