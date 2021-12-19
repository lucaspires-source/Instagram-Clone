import React from 'react';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'o_lucaspires',
    userImg: 'https://avatars.githubusercontent.com/u/60105171?v=4',
    img: 'https://avatars.githubusercontent.com/u/60105171?v=4',
    caption: 'Pai ta on',
  },

  {
    id: '1234',
    username: 'o_lucaspires',
    userImg: 'https://avatars.githubusercontent.com/u/60105171?v=4',
    img: 'https://avatars.githubusercontent.com/u/60105171?v=4',
    caption: 'Pai ta on',
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        // eslint-disable-next-line max-len
        <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))}
    </div>
  );
}

export default Posts;
