import React from 'react';
import {
  BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon, EmojiHappyIcon,
} from '@heroicons/react/outline';

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

    </div>
  );
}

export default Post;
