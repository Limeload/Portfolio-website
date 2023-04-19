import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MediumFeed({ username }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.items);
      document.querySelector('.carousel-item').classList.add('active');
    }
    fetchData();
  }, [username]);

  return (
    <Carousel interval={2000}>
    <h2 className='projects-section'>Medium Feed</h2>
    <p className=' category'>Keep your finger on the pulse of my Medium blog</p>
    <br />
      {articles.map((article) => (
        <Carousel.Item key={article}>
           <a href={article.link} target="_blank" rel="noopener noreferrer">
          <div className="row">
            <div className="col-md-6">
              <h3 className='medium-title'>"{article.title}"</h3>
            </div>
            <div className="col-md-6">
              <img src={article.thumbnail} alt={article.title} className="d-block w-100" />
            </div>
          </div>
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MediumFeed;
