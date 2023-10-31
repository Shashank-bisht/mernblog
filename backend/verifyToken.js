const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
      return res.status(401).json("you are not authenticated")
    }
    jwt.verify(token,process.env.SECRET,(err,data)=>{
        // data is a variable that holds the decoded data from the JSON Web Token (JWT) during the verification process
        if(err){
            return res.status(401).json("Token is not valid")
        }
        req.userId = data._id
        next()
    })
}
module.exports = verifyToken