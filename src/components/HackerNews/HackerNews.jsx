import { useEffect, useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function HackerNews() {
  const articles = useSelector((state) => state.hackerNews.articles)
  const loading = useSelector((state) => state.hackerNews.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestArticles)
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
