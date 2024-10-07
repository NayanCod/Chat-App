// import React from 'react'

import axios from "axios";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import Cookies from "js-cookie"
import toast from "react-hot-toast";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messanger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("logout successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='w-[4%] bg-slate-950 text-gray-300 flex flex-col justify-end'>
        <div className='p-3'>      
        <form>
            <div className='flex space-x-3'>
                <button onClick={handleLogout}>
                    <TbLogout2 className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300'/>
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Logout