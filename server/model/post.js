const mongoose = require('mongoose');


const postModel =new mongoose.Schema({
    title:
    {
        type:String,
        maxlength: 200,
        minlength: 3,
        required: true
        
    },
    content:
    {
        
        type:{},
        maxlength: 20000,
        minlength: 3,
        required: true

    },
    slug:
    {

        type:String,
        unique: true,
        index: true,
        required: true,
        lowercase: true

    },
    user:
    {

        type:String,
        maxlength: 200,
        minlength: 3,
        required: true
    }

},{timestamps:true})

module.exports=mongoose.model('Post', postModel)