import React from 'react';
import TeamMemberAvatar from './TeamMemberAvatar';
import ASP from '../assets/teamMembers/asp.jpg';
import AZP from '../assets/teamMembers/azp.jpg';
import KHP from '../assets/teamMembers/khp.jpg';
import KTRA from '../assets/teamMembers/ktra.jpg';
import MKT from '../assets/teamMembers/mkt.jpg';
import MMFY from '../assets/teamMembers/mmfy.jpg';
import MMT from '../assets/teamMembers/mmt.jpg';
import NTZ from '../assets/teamMembers/ntz.jpg';
import MBM from '../assets/teamMembers/mbm.jpg';
import HLH from '../assets/teamMembers/hlh.jpg';
import DV from '../assets/teamMembers/dv.jpg';

const TeamAvatarsGrid = () => {
  const teamMembers = [
    { name: 'Aung Si Phyo', imageUrl: ASP, position: "(Leader & Coder)"},
    { name: 'Min Ba Maw', imageUrl: MBM, position: "(Coder)"},
    { name: 'Min Khaing Thant', imageUrl: MKT, position: "(Technician)"},
    { name: 'Khant Htet Paing', imageUrl: KHP, position: "(Electronic Leader)"},
    { name: 'Min Myat Thu', imageUrl: MMT, position: "(Electronic)"},
    { name: 'Aung Zay Phyo', imageUrl: AZP, position: "(Electronic)"},
    { name: 'Htet Lin Htoo', imageUrl: HLH, position: "(Graphic Designer)"},
    { name: 'Kyaw Thura Aung', imageUrl: KTRA, position: "(Quality Control)"},
    { name: 'Mamad Foyas', imageUrl: MMFY, position: "(Quality Control)"},
    { name: 'Naing Tayza', imageUrl: NTZ, position: "(Accountant)"},
    { name: 'David Vanjero', imageUrl: DV, position: "(Documentation)"},
  ];

  return (
    <div className="container mx-auto p-6 lg:px-24 pt-16" id='contact'>
        <div className='flex flex-col items-center justify-center text-5xl dark:text-white text-center mb-16 relative'>Our Team Members</div>
      <div className="grid grid-cols-2 gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {teamMembers.map((member, index) => (
          <TeamMemberAvatar
            key={index}
            name={member.name}
            imageUrl={member.imageUrl}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamAvatarsGrid;
