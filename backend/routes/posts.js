const express = require('express');
const router = express.Router();
const Post=require('../models/Post')
const verifyToken = require('../verifyToken');
// update post
router.put("/:id",verifyToken,async (req, res)=> {
    try{
    //   updating user data
      const updatedUser = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    //   $set operator to update the fields defined in the updateFields object 
      res.status(200).json(updatedUser)
    }catch(error){
        res.status(500).json(error)
    }
})

// delete user
router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
})


// get post
router.get("/:id",async(req,res)=>{
        try{
            const post=await Post.findById(req.params.id)
            res.status(200).json(post)
        }
        catch(err){
            res.status(500).json(err)
        }
})

// get all post

router.get("/",async(req,res)=>{
    const query=req.query
        try{
            const searchFilter={
            title:{$regex:query.search, $options:"i"}
            }
            const posts=await Post.find(query.search?searchFilter:null)
            res.status(200).json(posts)
        }
        catch(err){
            res.status(500).json(err)
        }
})


// create new post
router.post("/create",verifyToken,async(req, res)=>{
  try{
   const newPost = new Post(req.body)
   const savePost = await newPost.save()
   res.status(200).json(savePost)
  }catch(err){

  }
})

//get post of particular user using userid of the user
router.get("/user/:userId",async (req,res)=>{
    try{
        const posts=await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router