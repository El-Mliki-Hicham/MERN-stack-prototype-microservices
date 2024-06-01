var mongoose = require('mongoose');

var postShema = mongoose.Schema({
    postId:String,
    title:String
})
var postModel = mongoose.model("posts",postShema);
module.exports = postModel;