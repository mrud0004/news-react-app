import HeaderComponent from "./Components/HeaderComponent";
import React, { useState, useEffect } from 'react';
import NewsComponent from './Components/NewsComponent';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=24&apiKey=${API_KEY}`;

const Home = () => {

    const feedTitle = "Top Stories"
    const [newsItems, setNewsItems] = useState([]);
    const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {

    const fetchNews = async () => { 
        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            const articles = data.articles.map(article =>({
                image: article.urlToImage || '/news-default.jpeg',
                title: article.title,
                text: article.description,
                link: article.url,
                author:{
                    name: article.author || 'Unknown',
                    role:  'Reporter',
                    image: article.urlToImage || '/news-default.jpeg'
                }
            }));
            setNewsItems(articles);
        }catch(error){
            console.error(error);
        }
    };
    fetchNews();
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  const chunkedNewsItems = [];
  for (let i = 0; i < newsItems.length; i += 2) {
    chunkedNewsItems.push(newsItems.slice(i, i + 2));
  }


    return(
        <div className="bg-neutral-800 min-h-screen flex flex-col items-center">
        <h1 className="text-6xl text-center font-bold text-white mt-5 mb-3 ">
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
          <h2 className="text-white text-3xl text-left ml-12">
            Top Stories
          </h2>
          {chunkedNewsItems.map((items, index) => (
          <NewsComponent key={index} items={items} topic={feedTitle} />
        ))}
        </div>
      </div>
    );

};

export default Home