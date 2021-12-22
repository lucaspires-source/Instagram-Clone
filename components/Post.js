import React, { useEffect, useState } from 'react';
import {
  BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon, EmojiHappyIcon,
} from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import {
  addDoc, collection, onSnapshot, orderBy, query, serverTimestamp,
} from '@firebase/firestore';
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

  useEffect(() => onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot) => setComments(snapshot.docs)), [db]);

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
        comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin ">
          {
                comments.map((com) => (
                  <div key={com.id} className=" flex items-center space-x-2 mb-3">
                    <img src={com.data().userImage} alt="avatar" className="h-7 rounded-full" />
                    <p className="text-sm flex-1">
                      <span className="font-bold">{com.data().username}</span>
                      {' '}
                      {com.data().comment}
                    </p>
                  </div>
                ))
              }
        </div>
        )
      }
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
