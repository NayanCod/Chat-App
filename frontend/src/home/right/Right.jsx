// import React from 'react'

import { useEffect } from "react";
import useConversation from "../../stateManage/useConversation.js";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
import { useAuth } from "../../context/AuthProvider.jsx";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  console.log(selectedConversation);
  
  useEffect(() => {
    // return setSelectedConversation(null);
    console.log(selectedConversation);
    
  }, [selectedConversation]);
  return (
    <div className="w-full bg-slate-800 text-gray-300 hide-scrollbar overflow-y-auto">
      <div>
        {!selectedConversation ? (
          <Nochat />
        ) : (
          <>
            <Chatuser />
            <div
              className="py-2 hide-scrollbar overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  );
};

export default Right;

const Nochat = () => {
  const {authUser} = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          {/* <CiMenuFries className="text-white text-xl" /> */}
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            {/* Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser?.user?.name}
            </span>
            <br /> */}
            No chat selected <br></br> please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
