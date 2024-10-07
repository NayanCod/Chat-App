// import React from 'react'

import { useSocketContext } from "../../context/socketContext.jsx";
import useConversation from "../../stateManage/useConversation.js"

const User = ({user}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {socket, onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(user._id);
  return (
    <div className={`hover:bg-slate-600 duration-200 ${isSelected?"bg-slate-700" : ""}`} onClick={() => setSelectedConversation(user)}>
        <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 cursor-pointer duration-200">
            <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
                <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1 className="font-bold">{user?.name}</h1>
                <p>{user?.email}</p>
            </div>
        </div>
    </div>
  )
}

export default User