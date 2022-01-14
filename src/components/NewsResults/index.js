import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem";

function NewsResult() {
  //const [title, setTitle] = useState([]);
  //const [description, setDescription] = useState([]);
  //const [image, setImage] = useState([]);
  //const [url, setURL] = useState([]);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=6b20cd8935294cb0aeb8124edeb352aa"
      );
      const data = await response.json();

      console.log(data);

      setArticles(data.articles);
    }
    fetchArticle();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <NewsItem
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
}

export default NewsResult;
