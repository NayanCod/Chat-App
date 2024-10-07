// import React from 'react'

import { useEffect } from "react";
import useConversation from "../stateManage/useConversation.js";
import { useSocketContext } from "./socketContext.jsx";
import sound from "../../public/assets/notify.mp3"

const useGetSocketMessage = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(()=>{
        socket.on("newMessage", (newMessage) => {
            const notification = new Audio(sound);
            notification.play();
            setMessages([...messages, newMessage]);
        })
        return () => {
            socket.off("newMessage");
        }
    }, [socket, messages, setMessages]);

}

export default useGetSocketMessage;