import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4001",
        methods: ["GET, POST"]
    }
});

export const getRecieverSocketId = (recieverId) => {
    return users[recieverId];
}

const users = {}

io.on("connection", (socket) => {
    console.log("new client connected", socket.id);
    const userId = socket.handshake.query.userId;
    if(userId){
        users[userId] = socket.id;
        console.log("Hello",users);
    }
    io.emit("getOnline", Object.keys(users));
    socket.on("disconnect", () => {
        console.log("Client disconncted", socket.id);
        delete users[userId];
        io.emit("getOnline", Object.keys(userId));
        
    })
})

export {app, io, server};