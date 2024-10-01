// import React from 'react'
import { IoSend } from "react-icons/io5";

const Type = () => {
  return (
    <>
        <div className="flex space-x-4 h-[8vh] text-center bg-slate-800">
            <div className="w-[70%]">
                <input type="text" placeholder="Type here" className="border border-gray-700 rounded-xl flex items-center gap-2 w-full grow outline-none px-3 py-2 bg-slate-900 mx-4 my-2" />
            </div>
            <button>
                <IoSend className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
        </div>
    </>
  )
}

export default Type