import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem";
import "./newsresults.css";

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

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    setSearch(input);
  }

  return (
    <div>
      <header>
        <h1> Get your daily dose of news!</h1>
      </header>
      <input onChange={handleChange} placeholder="search..."></input>
      <button onClick={handleClick}>Search</button>
      <h5>You searched for: {search}</h5>
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
