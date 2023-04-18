const AuthModel=require("../models/newmodel")
let Controllers={}
const bcrypt = require("bcrypt") 
const jtoken = require("jsonwebtoken")


Controllers.uppwd = async(req,res)=>{
    const data=req.body
    try{
        const hashedpassword=await bcrypt.hash(data.upassword,5)
        console.log(hashedpassword)
        const updated=await AuthModel.findOneAndUpdate({email:req.token.email},{password:hashedpassword})
        console.log(updated)
    if(updated){
        res.send({msg:"updated successfully",status:true}).status(301)
    }
    else{
        res.send({msg:"update failed",status:false}).status(404)
    }
    
}
    catch(err){
        console.log(err)
        res.send("updated err")
    }
}

// function authorize(req,res,next){
// try{
    
//     next()
//     return 
// }
// catch(err){
//     console.log(err)
//     res.send("you are not authorized")
// }
// }

module.exports = Controllers