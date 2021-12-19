import React from 'react';

function MiniProfile() {
  return (
    <div className="flex items-center  justify-between mt-14 ml-10">
      <img className=" w-16 h-16 rounded-full border p-[2px]" src="https://avatars.githubusercontent.com/u/60105171?v=4" alt="user avatar" />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">@o_lucaspire</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="text-blue-400 text-sm font-semibold ml-1">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
