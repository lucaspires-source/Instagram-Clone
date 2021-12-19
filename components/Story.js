/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

function Story({ avatar, username }) {
  return (
    <div>
      <img className=" text-xs text-center h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" src={avatar} alt="avatar" />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;

Story.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};
