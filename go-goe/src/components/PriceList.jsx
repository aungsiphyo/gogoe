import React from 'react';
import PricingCard from './Pricing';

const PricingTable = () => {
  const packages = [
    {
      title: 'Normal',
      price: '2000 Ks/hr',
      features: ["Smallest Size", "30 Minutes", 'Easy to Use', 'Bluetooth App Control'],
      isHighlighted: false,
    },
    {
      title: 'Gold',
      price: '4000 Ks/hr',
      features: ['Normal Feactures', 'Normal Size', 'Free Shipping', 'Charging with USB-3.0'],
      isHighlighted: true,
    },
    {
      title: 'Diamond Package',
      price: '5000 Ks/hr',
      features: ['(Normal + Gold) Feactures', 'Large Size', 'Grass Cutting Service', 'Long-term Battery Size'],
      isHighlighted: false,
    },
  ];

  return (
    <div className="container mx-auto p-6">
        <div className='flex flex-col items-center justify-center text-5xl dark:text-white text-center mb-16 relative'>Pricing</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PricingCard
            key={index}
            title={pkg.title}
            price={pkg.price}
            features={pkg.features}
            isHighlighted={pkg.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
