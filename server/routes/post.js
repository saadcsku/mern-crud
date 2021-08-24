const express = require('express');
const router=express.Router();
const {getAllPost, createPost, read, remove, update} = require('../controllers/post')


router.get('/', getAllPost)
router.get('/:slug', read)
router.delete('/:slug', remove)
router.put('/:slug', update)
router.post('/create', createPost)


module.exports=router;