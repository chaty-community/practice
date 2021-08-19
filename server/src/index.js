const express = require("express");
 const app = express();
 const apiServer = app.listen(3000, () => { console.log("PORT:" + apiServer.address().port) });
 const bodyParser = require("body-parser");
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());

 app.get("/", (req, res) => {
    res.json({
      room_id: 1,
      messages: [
        { message: "ヤッホー" },
        { message: "元気？" },
        { message: "僕元気！" },
      ],
    });
  });

  app.post("/api/users/session", (req, res) => {
    // ユーザーのログイン処理 【07で実装】
  });
  
  app.post("/api/users/:id/edit", (req, res) => {
    // ユーザーのプロフィール設定処理 【08で実装】
  });
  
  app.post("/api/users/:id/friends", (req, res) => {
    // ユーザーの全友だち取得処理 【09で実装】
  });
  
  app.post("/api/users/:id/find_room_id", (req, res) => {
    // ユーザーの全ルームID取得処理 【10で実装】
  });
  
  app.get("/api/rooms/:id/messages", (req, res) => {
    // ルーム内の全メッセージ取得処理 【11で実装】
  });
  
  app.post("/api/rooms/:id/message", (req, res) => {
    // ルーム内のメッセージ送信処理 【12で実装】
  });