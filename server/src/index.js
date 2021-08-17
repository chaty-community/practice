const express=require("express");
const app=express();
const apiServer=app.listen(3000,()=>{console.log("PORT:"+apiServer.address().port)});

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
 res.json({
  room_id:1,
  messages:[
  {message:"ヤッホー"},
  {message:"元気？"},
  {message:"僕元気！"},
  ],
 });
});

app.post("/api/users/session",(req,res)=>{

});

app.post("/api/users/:id/edit",(req,res)=>{

});

app.post("/api/users/:id/friends",(req,res)=>{

});

app.post("/api/users/:id/find_room_id",(req,res)=>{

});

app.get("/api/rooms/:id/messages",(req,res)=>{

});

app.post("/api/rooms/:id/message",(req,res)=>{

});