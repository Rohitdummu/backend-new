const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const mongoose=require("mongoose")
const cors = require("cors")
server.use(cors())
const httpser = require('http')
const socket  = require("socket.io")
const http = httpser.Server(server)
const io = socket(http)

mongoose.connect("mongodb://localhost:27017/Sinon").then((res)=>console.log("connected to db")).catch((err)=>console.log("failure"))

server.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
io.on('connection',(socket)=>{
     console.log("client in ")
     socket.send("ahha pattu pattu")
    //  setTimeout(()=>{socket.send("check out our offers ! ending soon ... ")},5000)
    let tm = new Date()
    setInterval(()=>{
        socket.emit("test",{msg:"test",param:tm.getSeconds()})
    },1000)
   
    socket.on("eventnsme",(data)=>{
        console.log(data)
    })
})


http.listen(3007,()=>console.log("socket connected"))
