// import React from 'react'

import useGetMessage from "../../context/useGetMessage.js";
import Message from "./Message";
import Loading from "../../components/Loading.jsx";
import { useEffect, useRef } from "react";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useGetSocketMessage();
  console.log(messages);
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 100)
  }, [messages]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      )}
      <div className="" style={{ minHeight: "calc(88vh - 8vh)" }}>
        {!loading && messages.length === 0 && (
          <div>
            <p className="text-center mt-[20%] text-white font-bold">Say! Hi</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
