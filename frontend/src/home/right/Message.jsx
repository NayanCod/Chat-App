// import React from 'react'

const Message = ({message}) => {
  const authUser = JSON.parse(localStorage.getItem("messanger"));
  const itsMe = message.senderId === authUser.user._id;
  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-400" : "";
  return (
    <div className="p-4">
        <div className={`chat ${chatName}`}>
            <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
        </div>
    </div>
  )
}

export default Message