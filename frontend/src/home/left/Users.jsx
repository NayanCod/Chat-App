// import React from 'react'

import userGetAllUser from "../../context/userGetAllUser"
import User from "./User"

const Users = () => {
  const [allUser, loading] = userGetAllUser();
  console.log(allUser);
  
  return (
    <div style={{maxHeight: "calc(84vh - 1vh"}} className="py-2 hide-scrollbar overflow-y-auto">
       {
        allUser.map((user, index) => {
            return <User key={user._id} user={user}/>
        })
       }
    </div>

  )
}

export default Users