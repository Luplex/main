import React from 'react';

const TeamAvatars = ({ avatars }) => {
  return (
    <div className="flex -space-x-4">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          className="w-10 h-10 border-2 border-white rounded-full"
          src={avatar}
          alt={`Avatar ${index}`}
          style={{ zIndex: avatars.length - index }}
        />
      ))}
    </div>
  );
};

export default TeamAvatars;
