const  express  = require("express");
const app = express();
const {randomBytes} =  require('crypto')
// const bodyParser = require('body-parser')
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const comments = {}
app.get('/getCommnetByPostId/:id',(req,res)=>{
    res.send(posts);
})


app.post('/storePost',(req,res)=>{
   
    const id  = randomBytes(4).toString('hex');
    const {title}=req.body;
    posts[id]={
        id,
        title
    }
    res.status(201).send(posts[id])
})

app.listen(4000,()=>{
    console.log("listening at port 4000");
})