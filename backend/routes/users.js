const express = require('express');
const router = express.Router();
const Post=require('../models/Post')
const Comment=require('../models/Comment')
const User = require('../models/User');
const bcrypt = require('bcrypt');
const verifyToken = require('../verifyToken');

// update user
router.put("/:id",verifyToken,async (req, res)=> {
    try{
        //if the req.body (the request body) contains a password field. If a new password is being provided in the request, the code proceeds to hash and update it.
      if(req.body.password){
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hashSync(req.body.password, salt)
      }

  //   updating user data
  // {new: true} in Mongoose returns the modified document (the one that was updated) as the result of the operation
      const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    //   $set operator to update the fields defined in the updateFields object
      res.status(200).json(updatedUser)
    }catch(error){
        res.status(500).json(error)
    }
})

// delete user
router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        await Post.deleteMany({userId:req.params.id})
        await Comment.deleteMany({userId:req.params.id})
        res.status(200).json("User has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


// get user

router.get("/:id",async(req,res)=>{
        try{
            //The user variable will contain the retrieved document from the collection. 
            const user=await User.findById(req.params.id)
            const {password,...info}=user._doc
            res.status(200).json(info)
        }
        catch(err){
            res.status(500).json(err)
        }
})
module.exports = router