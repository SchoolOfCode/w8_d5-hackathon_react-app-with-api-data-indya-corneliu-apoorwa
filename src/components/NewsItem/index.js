import React from "react";

function NewsItem({ title, description, url, urlToImage }) {
  return (
    <div>
      <h2>title</h2>
      <p>{description}</p>
      <h5>{url}</h5>
      <img src={urlToImage} alt="newsitem" />
    </div>
  );
}

export default NewsItem;
