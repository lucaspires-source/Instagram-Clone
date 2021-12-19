import React, { useEffect, useState } from 'react';
import faker from 'faker';

function Suggestions() {
  const [suggestion, setSuggestions] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="text-gray=600 font-semibold">See All</button>
      </div>

      {suggestion.map((profile) => (
        <div key={profile.id} className="flex justify-between mt-3">
          <img className="w-10 h-10 rounded-full p-[2px] text-xs" src={profile.avatar} alt="avatar" />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at
              {' '}
              {profile.company.name}
            </h3>
          </div>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
