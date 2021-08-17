const User=require("../../models").user;
const Room=require("../../models").room;
const Roomuser=require("../../models").roomsuser;
const Op=Sequelize.Op;
const bCrypt=require("bcryptjs");

const login=async(req,res)=>{
 const {name,password}=req.body;
 try{
  const currentUser=await User.findOne({
   where:{name},
  });
  if(currentUser===null){
   const images=[
        "https://icooon-mono.com/i/icon_10010/icon_100101_64.png",
        "https://icooon-mono.com/i/icon_11215/icon_112151_64.png",
        "https://icooon-mono.com/i/icon_10069/icon_100691_64.png",
        "https://icooon-mono.com/i/icon_10606/icon_106061_64.png",
        "https://icooon-mono.com/i/icon_11067/icon_110671_64.png",
   ];
   const img=images[Math.floor(Math.random()*images.length)];
   const password_hash=bCrypt.hashSync(
    password,
    bCrypt.genSaltSync(8),
    null
   );
   const newUser=await User.create({
    name,
    img,
    password_hash,
    status_message:"",
   });
   let users=await User.findAll({
    where:{
     id{
      [Op.not]:newUser.id,
     },
    },
   });
   for(let user of users){
    const newRoom=await Room.create();
    await Roomuser.create({user_id:newUser.id,room_id:newRoom.id});
    await Roomuser.create({user_id:user_id,room_id:newRoom.id});
   }
   res.status(200).json({currentUser:newUser});
   return;
  }
  if(!bCrypt.compareSync(password,currentUser.password_hash)){
   res.status(404).json({error:"パスワードが間違っています。"});
   return;
  }
  res.status(200).json({currentUser});
 }catch(error){
  res.status(500).json({error:"サーバーエラーです。"});
 }
};

const setProfile=async(req,res)=>{
 const id=req.param("id");
 const {name,statusMessage}=req.body;
 try{
  const user=await User.findOne({
   where:{id},
  });
  user.name=name;
  user.status_message=statusMessage;
  const updateUser=await user.save();
 }catch(error){
  res.status(500).json({error:"サーバーエラー"});
 }
};

const getFriends=async(req,res)=>{
     const user_id=req.param("id");
     try{
      const ussers=await User.findAll({
       where:{
        id:{
         [Op.not]:user_id,
        },
       },
      });
      res.status(200).json({friends:users});
     }catch(error){
      res.status(500).json({error:"サーバーエラー"});
     }
    };    

module.exports={
 login,
 setProfile,
 getFriends,
};