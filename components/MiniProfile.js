import React from 'react';

function MiniProfile() {
  return (
    <div className="flex items-center  justify-between mt-14 ml-10">
      <img className=" w-16 h-16 rounded-full border p-[2px]" src="https://avatars.githubusercontent.com/u/60105171?v=4" alt="user avatar" />
      <div>
        <h2>@o_lucaspire</h2>
        <h2>Welcome to Instagram</h2>
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
