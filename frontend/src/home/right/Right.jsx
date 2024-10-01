// import React from 'react'

import Chatuser from "./Chatuser"
import Messages from "./Messages"
import Type from "./Type"

const Right = () => {
  return (
    <div className="w-[70%] bg-slate-950 text-white hide-scrollbar overflow-y-auto">
        <Chatuser/>
        <div className="py-2 hide-scrollbar overflow-y-auto" style={{maxHeight: "calc(88vh - 8vh)"}}>
            <Messages/>
        </div>
        <Type/>
    </div>
  )
}

export default Right
