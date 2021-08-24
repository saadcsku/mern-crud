const mongoose = require('mongoose')
const slugs = require('slug')
const postModel = require('../model/post');


const getAllPost = (req,res)=>{

    postModel.find()
    .then((post)=>{res.status(200).json({post: post})})
    .catch((err)=>{console.log(err); res.status(400).json({msg: "Error retrieving post"})})

}

const read = (req,res)=>{

    const {slug} = req.params;
    postModel.findOne({slug})
    .then((post)=>{res.status(200).json({post: post})})
    .catch((err)=>{console.log(err); res.status(400).json({msg: "Error retrieving post"})})

}

const update = (req,res)=>{

    const {slug} = req.params;
    const {title, content, user} = req.body;
    postModel.findOneAndUpdate({slug}, {title, content, user}, {new: true})
    .then((post)=>{res.status(200).json({post})})
    .catch((err)=>{console.log(err); res.status(400).json({msg: "Error Updating post"})})

}

const remove = (req,res)=>{

    const {slug} = req.params;
    postModel.findOneAndRemove(slug)
    .then((post)=>{res.status(200).json({message: "Post Deleted Successfully"})})
    .catch((err)=>{console.log(err); res.status(400).json({msg: "Error Deleting post"})})

}

const createPost = (req, res) =>{
    const {title, content, user} = req.body;

   const slug =slugs(title);

   if(!title)
   {
    res.status(400).json({error: "Please insert title"})
    console.log('Please insert title')
   }
   else if(!content)
   {
    res.status(400).json({error: "Please insert content"})
    console.log('Please insert content')
   }
   else if (!user)
   {
    res.status(400).json({error: "Please insert user"})
    console.log('Please insert user')
   }
   else
   {
        postModel.create({title, slug, content, user}, (error, result)=>{
            if(error)
            {
                console.log(error)
                res.status(400).json({err: "Duplicate titles"})
            }
            else
            {
                res.json(result);
            }
        })
   }
}

module.exports={getAllPost, createPost, read, remove, update}