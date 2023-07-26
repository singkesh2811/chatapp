const jwt=require("jsonwebtoken");

const generateToken=(id)=>{
    return jwt.sign({ id },"kesh",{
      expiresIn:"30d",
    });
};
module.exports=generateToken;