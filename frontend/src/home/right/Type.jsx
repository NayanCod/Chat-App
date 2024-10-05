// import React from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
import { useState } from "react";

const Type = () => {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-6 h-[8vh] text-center bg-slate-800">
          <div className="w-[70%]">
            <input
              type="text"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-700 rounded-xl flex items-center gap-2 w-full grow outline-none px-5 py-2 bg-slate-900 mx-4 my-2"
            />
          </div>
          <button>
            <IoSend className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Type;
