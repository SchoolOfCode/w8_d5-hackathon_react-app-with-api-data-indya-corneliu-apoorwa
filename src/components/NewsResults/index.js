import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem";

function NewsResult() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState([]);
  const [url, setURL] = useState([]);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=6b20cd8935294cb0aeb8124edeb352aa"
      );
      const data = await response.json();
      const title = data.articles[0].title;
      setTitle(title);
      const description = data.articles[0].description;
      setDescription(description);
      const image = data.articles[0].urlToImage;
      setImage(image);
      const url = data.articles[0].url;
      setURL(url);
      console.log(data);
      console.log(title);
      setArticles(data.articles);
    }
    fetchArticle();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <NewsItem
          title={title}
          description={description}
          image={image}
          url={url}
        />
      ))}
    </div>
  );
}

export default NewsResult;
