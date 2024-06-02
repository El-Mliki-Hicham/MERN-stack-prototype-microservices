var mongoose = require('mongoose');

var commentShema = mongoose.Schema({
    commentId:String,
    postId:String,
    content:String
})
var commentModel = mongoose.model("comments",commentShema);
module.exports = commentModel;