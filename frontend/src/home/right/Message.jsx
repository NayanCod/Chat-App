// import React from 'react'

const Message = ({message}) => {
  const authUser = JSON.parse(localStorage.getItem("messanger"));
  const itsMe = message.senderId === authUser.user._id;
  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-400" : "";
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })
  return (
    <div className="p-4">
        <div className={`chat ${chatName} flex flex-col gap-1`}>
            <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
            <div className="text-xs">{formattedTime}</div>
        </div>
    </div>
  )
}

export default Message