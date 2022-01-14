import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem";

function NewsResult() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=6b20cd8935294cb0aeb8124edeb352aa"
      );
      const data = await response.json();
      setArticles(data.articles);
      console.log(data);
    }
    fetchArticle();
  }, []);

  return (
    <div>
      <NewsItem description={articles[0].description} />
      {/* {articles.map(({ title, description, url, urlToImage})
              => (<NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />)
          )} */}
    </div>
  );
}

export default NewsResult;
