import React from 'react';

const TeamMemberAvatar = ({ name, imageUrl }) => {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden rounded-full border-4 border-gray-300 dark:border-gray-700">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 top-24 bg-black bg-opacity-50 text-white text-center py-2 text-sm">
        {name}
      </div>
    </div>
  );
};

export default TeamMemberAvatar;
