
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/miniproj');


const userSchema =  mongoose.Schema({
    username:String,
    name: String, 
    age: Number,
    email: String,
    profilepic: {
        type: String,
        default:  "placeholder.png"
    },
    password: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})


module.exports = mongoose.model('user', userSchema);


