const  express  = require("express");
const app = express();
const {randomBytes} =  require('crypto')
// const bodyParser = require('body-parser')
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const comments = {}
app.get('/getCommnetByPostId/:postId',(req,res)=>{
    res.send(comments[req.params.postId] || []);
})


app.post('/storeComment',(req,res)=>{
   
    const commentId  = randomBytes(4).toString('hex');
    const postId =  req.body.postId;
    const comment =  req.body.comment;
const commentData = comments[postId] || [];
    commentData.push({
       id :  commentId,
       content :   comment
    })
    comments[postId] = commentData;
    res.status(201).send( comments)
})

app.listen(4200,()=>{
    console.log("listening at port 4200");
})