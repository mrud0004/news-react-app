import HeaderComponent from "./Components/HeaderComponent";
import React, { useState, useEffect } from 'react';
import NewsComponent from './Components/NewsComponent';

const Home = () => {

    const newsItem = {
        image: 'https://static.ffx.io/images/$zoom_0.1875%2C$multiply_1.2328%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_20/t_crop_custom/q_62%2Cf_auto/4a8b1ef5a33ab714c1149799aec0e3a568322b05',
        title: 'What makes for a good husband? It’s the small things',
        text: 'At a time when almost half of Australian marriages end in divorce, TV presenter Richard Hammond has some smart advice for men. And it’s got nothing to do with a sexy hotel stay or a Zamel’s catalogue.',
        author: {
          name: 'Kate Halfpenny',
          role: 'Regular columnist',
          image: 'https://static.ffx.io/images/$zoom_0.1875%2C$multiply_1.2328%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_20/t_crop_custom/q_62%2Cf_auto/4a8b1ef5a33ab714c1149799aec0e3a568322b05',
        },
      };

    const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

    return(
        <div className="bg-neutral-800 min-h-screen flex flex-col items-center">
        <h1 className="text-6xl text-center font-bold text-white mt-5">
          Echo News
        </h1>
        <div
          className={` ml-7 transition-opacity duration-500 ${
            showHeader ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeaderComponent />
        </div>
        <div className="mt-10 w-full px-6">
          <h2 className="text-white text-3xl text-left">
            Top Stories
          </h2>
          <NewsComponent
        image={newsItem.image}
        title={newsItem.title}
        text={newsItem.text}
        author={newsItem.author}
      />
          
        </div>
      </div>
    );

};

export default Home