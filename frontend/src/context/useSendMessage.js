// import React from 'react'

import { useState } from "react";
import useConversation from "../stateManage/useConversation.js";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);
    if (selectedConversation && selectedConversation._id) {
      try {
        const res = await axios.post(
          `/api/message/send/${selectedConversation._id}`, {message}
        );
        setMessages([...messages, res.data]);
        setLoading(false);
      } catch (error) {
        console.log("Error in useSendMessage", error);
        setLoading(false);
      }
    }
  };
  return {loading, sendMessages};
}

export default useSendMessage