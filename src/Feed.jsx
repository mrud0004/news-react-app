import React, { useState, useEffect } from 'react';
import HeaderComponent from "./Components/HeaderComponent";
import NewsComponentFeed from './Components/NewsComponentFeed';


function Feed() {

    const feedTitle = "Top Stories"


    const newsItems = [
        {
          image: 'https://static.ffx.io/images/$zoom_0.73828125%2C$multiply_1.2116%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_62%2Cf_auto/976dc34c0d62045aec2571887d29835924d7cade',
          title: 'What makes for a good husband? It’s the small things',
          text: 'At a time when almost half of Australian marriages end in divorce, TV presenter Richard Hammond has some smart advice for men. And it’s got nothing to do with a sexy hotel stay or a Zamel’s catalogue.',
          author: {
            name: 'Kate Halfpenny',
            role: 'Regular columnist',
            image: 'https://static.ffx.io/images/$zoom_0.73828125%2C$multiply_1.2116%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_62%2Cf_auto/976dc34c0d62045aec2571887d29835924d7cade',
          },
        },
        {
          image: 'https://static.ffx.io/images/$zoom_0.73828125%2C$multiply_1.2116%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_62%2Cf_auto/976dc34c0d62045aec2571887d29835924d7cade',
          title: 'What makes for a good husband? It’s the small things',
          text: 'At a time when almost half of Australian marriages end in divorce, TV presenter Richard Hammond has some smart advice for men. And it’s got nothing to do with a sexy hotel stay or a Zamel’s catalogue.',
          author: {
            name: 'Kate Halfpenny',
            role: 'Regular columnist',
            image: 'https://static.ffx.io/images/$zoom_0.73828125%2C$multiply_1.2116%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_62%2Cf_auto/976dc34c0d62045aec2571887d29835924d7cade',
          },
        },
      ];

    const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);


    return(
        <div className="bg-neutral-800 min-h-screen flex flex-col ">
            <h1 className="text-6xl text-center font-bold text-white mt-5 ">
          Personal Feed
        </h1>
        <div
          className={` ml-7 transition-opacity duration-500 ${
            showHeader ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeaderComponent />
        </div>
        <div className="mt-10 w-full px-6">
        </div>
        <NewsComponentFeed items={newsItems} topic = {feedTitle} />
        <NewsComponentFeed items={newsItems}topic = {feedTitle}/>
        <NewsComponentFeed items={newsItems} topic = {feedTitle}/>
      </div>       
    );


}

export default Feed;