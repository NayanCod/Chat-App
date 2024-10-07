// import React from 'react'

import { useSocketContext } from "../../context/socketContext.jsx";
import useConversation from "../../stateManage/useConversation.js";

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  const {socket, onlineUsers} = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? 'online' : 'offline';
  }
  // const isOnline = onlineUsers.includes(user._id);
  return (
    <>
      <div className="px-5 pt-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 cursor-pointer duration-200">
        <div>
          <div className={`avatar online`}>
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">{selectedConversation?.name}</h1>
          <p className="text-sm">{ getOnlineUserStatus(selectedConversation?._id)}</p>
        </div>
      </div>
    </>
  );
};

export default Chatuser;
