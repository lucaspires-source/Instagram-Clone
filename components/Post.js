import React, { useState } from 'react';
import {
  BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon, EmojiHappyIcon,
} from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { db } from '../firebase';

function Post({
  id, username, userImg, caption, img,
}) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img src={userImg} alt={username} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} alt="post" className="object-cover w-full" />
      {
        session

        && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="postBtn" />
            <ChatIcon className="postBtn" />
            <PaperAirplaneIcon className="postBtn" />
          </div>
          <BookmarkIcon className="postBtn" />
        </div>
        )
      }

      <p className="p-5 truncate">
        <span className="font-bold mr-1">
          {username}
          {' '}
        </span>
        {caption}
      </p>
      {
        session

        && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input type="text" className="border-none flex-1 focus:ring-0" placeholder="Add a comment ..." value={comment} onChange={(e) => setComment(e.target.value)} />
          <button className="font-semibold text-blue-400" type="submit" disabled={!comment.trim()} onClick={sendComment}> Post </button>
        </form>
        )
      }

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
