import React from 'react';
import Home from '../components/Home';
import Feature from '../components/Feature';
import '../index.css'; // Ensure Tailwind CSS is imported
import PriceList from '../components/PriceList';
import TeamAvatarsGrid from '../components/TeamAvatarsGrid';
import ContactUs from '../components/ContactUs';
import BotControl from '../components/BotControl';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Feature />
        <PriceList />
        <TeamAvatarsGrid />
        <ContactUs />
        <BotControl />
    </div>
  )
}

export default HomePage