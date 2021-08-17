const Message=require("../../models").message;
const Room=require("../../models").room;
const Roomuser=require("../../models").roomuser;

const findRoomId=async(req,res)=>{
 const currentUserId=req.param("id");
 const{friendId}=req.body;
 try{
  const rooms=await Room.findAll({
   include:[{model:Roomuser}],
  });
  let currentRoomId=0;
  rooms.map((room)=>{
   if(
    Number(currentUserId)==room.dataValues.roomsusers[0].user_id&&
    friendId==room.dataValues.roomsusers[1].user_id
   ){
    currentRoomId=room.id;
    return;
   }
   if(
    Number(currentUserId)==room.dataValues.roomsusers[1].user_id&&
    friendId==room.dataValues.roomsusers[0].user_id
   ){
    currentRoomId=room.id;
   }
   return;
  });
  res.status(200).json({currentRoomId});
 }catch(error){
  res.status(500).json({error:"サーバーエラー"});
 }
};

module.exports={
 findRoomId,
};