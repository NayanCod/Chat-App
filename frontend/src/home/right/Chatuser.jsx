// import React from 'react'

const Chatuser = () => {
  return (
    <>
      <div className="px-5 pt-5 pb-3  flex space-x-4 bg-gray-900 hover:bg-gray-600 cursor-pointer duration-200">
        <div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">Ankit kumar</h1>
          <p className="text-sm">Online</p>
        </div>
      </div>
    </>
  );
};

export default Chatuser;
