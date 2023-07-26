const express=require("express");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const connectDB=require("./config/db.js");
const {chats}=require("./data/data")
const userRoutes =require("./routes/userRoutes");
const chatRoutes=require("./routes/chatRoutes.js")
const messageRoutes=require("./routes/messageRoutes.js")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require('cors');
connectDB();
const app=express();
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("API Server Is Running");
});
app.use('/api/user', cors(), userRoutes);
app.use('/api/chat', cors(), chatRoutes);
app.use('/api/message', cors(),messageRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT || 5000;
const server=app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`);
  });
  const io=require('socket.io')(server,{
    pingTimeout:60000,
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection",(socket)=>{
   console.log("Connected to socket.io");

   socket.on("setup",(userData)=>{
        socket.join(userData._id);
        socket.emit("connected");
   });

   socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));


  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });
  socket.off("setup",()=>{
    console.log("User Disconnected");
    socket.leave(userData._id);
  })
  });
  