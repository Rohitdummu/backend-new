const express=require("express") 
const router=express.Router()
const Controllers=require("../controllers/protectcontroller")
const Protect = require("../controllers/authmiddleware")
  
router.post("/updatepwd",Protect.authorize,
Controllers.uppwd
)

module.exports=router