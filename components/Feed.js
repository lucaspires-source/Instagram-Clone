import React from 'react';
import Stories from './Stories';

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto ">
      {/*  Left Section */}
      <section className="col-span-2">
        <Stories />
        {/* posts */}
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
