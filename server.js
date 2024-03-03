const { Server } = require("socket.io");

const io = new Server(3555);

io.on("connection",(socket) => {
    socket.emit("connect","Server: User connected")
    socket.on("joinStaff",() => {
        socket.join("staff");
    });
   io.to("staff").emit("work","System:you have work!");
    socket.on("disconnect",() => {
         console.log("User disconndcted");
    });
});
