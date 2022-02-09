import React from 'react';
import NewsCard from './NewsCard';
import { useNewsApi } from '../useHooks/useNewsApi';


const News = () => {

    const {news, error, loading, setTopic} = useNewsApi()

  return <>
  <div className='newsContainer'>
  {news?.articles?.map((article) => <NewsCard image={article.media} title={article.title} date={article.published_date} desc={article.summary} topic={article.topic} key={article._id} author={article.author == null ? "Anonoymus" : article.author}/> )}
  </div>
  </>;
};

export default News;
