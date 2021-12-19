import React from 'react';
import Posts from './Posts';
import Stories from './Stories';

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ">
      {/*  Left Section */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {/*  Left Section */}

      {/*   Right Section */}
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
      {/*   Right Section */}
    </main>
  );
}

export default Feed;
