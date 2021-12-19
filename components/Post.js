import React from 'react';
import {
  BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon, EmojiHappyIcon,
} from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({
  id, username, userImg, caption, img,
}) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img src={userImg} alt={username} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} alt="post" className="object-cover w-full" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-bold mr-1">
          {username}
          {' '}
        </span>
        {caption}
      </p>
    </div>
  );
}

export default Post;

Post.propTypes = {
  username: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,

};
