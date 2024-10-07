// import React from 'react'
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import userGetAllUser from "../../context/userGetAllUser.jsx";
import useConversation from "../../stateManage/useConversation.js";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUser] = userGetAllUser();
  const { setSelectedConversation } = useConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUser.find((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("user not found");
    }
  };
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex space-x-3">
            <label className="border border-gray-700 bg-slate-900 rounded-lg flex items-center gap-2 w-[80%] p-3">
              <input
                type="text"
                className="grow outline-none bg-slate-900"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
