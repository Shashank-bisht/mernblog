const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// register
router.post('/register',async(req,res)=>{
    try{
        // extracting data from body
   const {username,email,password} = req.body
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hashSync(password,salt)
//    creating new user
   const newUser = new User({username, email, password:hashedPassword})
//    saving new user
   const saveUser = await newUser.save()
   res.status(200).json(saveUser)
    }catch(err){
        res.status(404).json(err)
    }
})

// login

router.post("/login",async (req,res)=>{
    try{
        // finding user using email
        const user=await User.findOne({email:req.body.email})
        console.log(user)
    //    if user is not found then show error
        if(!user){
            return res.status(404).json("User not found!")
        }
        // if found user then compare password 
        const match=await bcrypt.compare(req.body.password,user.password)
        // if password does not match then show error
        if(!match){
            return res.status(401).json("Wrong credentials!")
        }
        // after make token using jwt.sign method 
        const token=jwt.sign({_id:user._id,username:user.username,email:user.email},process.env.SECRET,{expiresIn:"3d"})
        // extract password and assign to password variable and other information to info variable here 
        const {password,...info}=user._doc
        console.log(user._doc)
        // store token in cookie and show user info except password
        res.cookie("token",token).status(200).json(info)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//logout
//The code clears the JWT token cookie from the client's browser using the res.clearCookie() method. In this case, the cookie is named "token." This effectively logs the user out by removing the token from the client's browser, which prevents further authenticated access without a valid token.
router.get('/logout',async(req,res)=>{
    try{
     res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send('user logged out')
    }catch(err){
      res.status(500).json(err)
    }
})
// secure: true means use only https and sameSite:"none" should be used if we are using cors
module.exports = router