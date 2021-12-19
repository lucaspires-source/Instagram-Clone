import React from 'react';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'o_lucaspires',
    userImg: 'https://avatars.githubusercontent.com/u/60105171?v=4',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tiger_shark.jpg/1200px-Tiger_shark.jpg',
    caption: 'Pai ta on',
  },

  {
    id: '1234',
    username: 'o_lucaspires',
    userImg: 'https://avatars.githubusercontent.com/u/60105171?v=4',
    img: 'https://universodospeixes.com.br/wp-content/uploads/2019/05/blacktip-reef-shark.jpg',
    caption: 'E-Sharko',
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
