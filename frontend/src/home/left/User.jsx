// import React from 'react'

const User = () => {
  return (
    <div>
        <div className="flex space-x-4 px-6 py-7 hover:bg-slate-600 cursor-pointer duration-200">
            <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1>Ankit kumar</h1>
                <p>ankit@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default User