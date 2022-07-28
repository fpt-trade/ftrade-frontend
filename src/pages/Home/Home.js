import React from 'react';
import { Button } from 'primereact/button';
import mentorship from '../../assets/images/mentorship.png';
import personalBrand from '../../assets/images/personal-brand.png';
import itemsTrade from '../../assets/images/items-trade.png';
import events from '../../assets/images/events.png';
import './Home.css';

const Home = () => {
  const items = [
    {
      title: 'Mentorship',
      img: mentorship,
      url: ''
    },
    {
      title: 'Personal Brand',
      img: personalBrand,
      url: ''
    },
    {
      title: 'Items Trade',
      img: itemsTrade,
      url: ''
    },
    {
      title: 'Events',
      img: events,
      url: ''
    }
  ];

  return (
    <div className="flex flex-column w-full">
      <div className="flex justify-content-center my-4">
        <Button label="Get Started Now!" className="p-button-warning" />
      </div>
      <div className="flex flex-grow-1 justify-content-center">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-column home-item-wrapper border-2 border-solid border-200 p-4 border-round-lg m-3 bg-white cursor-pointer"
          >
            <img className="w-full" src={item.img} alt={item.title} />
            <div className="text-center text-md font-medium mt-auto">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto text-center">
        <p className="w-6 mx-auto">
          F-Trade's about providing a shared community experience. We're
          passionate about giving everyone the opportunity to learn and share in
          the most personalized and authentic way possible.
        </p>
      </div>
    </div>
  );
};

export default Home;
