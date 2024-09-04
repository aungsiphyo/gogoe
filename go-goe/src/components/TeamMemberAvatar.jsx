import React from 'react';

const TeamMemberAvatar = ({ name, imageUrl, position }) => {
  return (
    <div className='m-auto'>
      <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden rounded-full border-4 border-gray-300 dark:border-gray-700">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 top-24 bg-black bg-opacity-50 text-white text-center py-2 text-sm">
        {name}
        </div>
      </div>
      <div className="lg:hidden bg-opacity-50 text-gray-900 dark:text-white py-4 text-sm m-auto flex flex-col items-center text-center">
        {name}
        <br />
        {position}
      </div>
    </div>
  );
};

export default TeamMemberAvatar;
