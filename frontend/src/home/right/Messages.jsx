// import React from 'react'

import useGetMessage from "../../context/useGetMessage.js";
import Message from "./Message";
import Loading from "../../components/Loading.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  console.log(messages);

  return (
    <>
    {
      loading ? (<Loading />) : (messages.length>0 && messages.map((message) => {
        return <Message key={message._id} message={message}/>
      }))
    }
      <div className="" style={{ minHeight: "calc(88vh - 8vh)" }}>
        {!loading && messages.length === 0 && <div><p className="text-center mt-[20%] text-white font-bold">Say! Hi</p></div>}
      </div>
    </>
  );
};

export default Messages;
