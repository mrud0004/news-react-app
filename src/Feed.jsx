import React, { useState, useEffect, useContext } from 'react';
import HeaderComponent from "./Components/HeaderComponent";
import NewsComponentFeed from './Components/NewsComponentFeed';
import { PreferencesContext } from './PreferencesContext';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

function Feed() {
  const { preferences } = useContext(PreferencesContext);
  const [newsItemsByCategory, setNewsItemsByCategory] = useState({});
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const fetchNews = async (category) => {
      const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=4&apiKey=${API_KEY}`;
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const articles = data.articles.map(article => ({
          image: article.urlToImage || '/news-default.jpeg',
          title: article.title,
          text: article.description,
          link: article.url,
          author: {
            name: article.author || 'Unknown',
            role: 'Reporter',
            image: article.urlToImage || '/news-default.jpeg'
          }
        }));
        return articles;
      } catch (error) {
        console.error("Error fetching the news:", error);
        return [];
      }
    };

    const fetchAllNews = async () => {
      const categories = preferences.length > 0 ? preferences : ['general'];
      const newsByCategory = {};
      for (const category of categories) {
        const articles = await fetchNews(category);
        newsByCategory[category] = articles;
      }
      setNewsItemsByCategory(newsByCategory);
    };

    fetchAllNews();

    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [preferences]);

  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col">
      <h1 className="text-6xl text-center font-bold text-white mt-5">
        Personal Feed
      </h1>
      <div
        className={`ml-7 transition-opacity duration-500 ${
          showHeader ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HeaderComponent />
      </div>
      <div className="mt-10 w-full px-6">
        {Object.entries(newsItemsByCategory).map(([category, articles], index) => (
          <div key={index}>
            <NewsComponentFeed
              key={index}
              items={articles}
              topic={category.charAt(0).toUpperCase() + category.slice(1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;