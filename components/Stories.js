import React, { useEffect, useState } from 'react';
import faker from 'faker';
import Story from './Story';

function Stories() {
  const [story, setStories] = useState([]);
  useEffect(() => {
    const stories = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setStories(stories);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray=200 border roundend-sm overflow-x-scroll scrollbar-thin  scrollbar-thumb-black ">
      {story.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
}

export default Stories;
