// import React from 'react'

import Search from "./Search";
import Users from "./Users";

const Left = () => {
  return (
    <div className="w-[30%] bg-black text-gray-300">
        <h1 className="font-bold text-3xl p-2 px-11">Chat</h1>
        <Search/>
        <hr/>
        <Users/>
    </div>
  )
}

export default Left;