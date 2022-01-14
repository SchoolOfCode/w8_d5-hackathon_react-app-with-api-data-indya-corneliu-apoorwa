import React from "react";

function NewsItem(props) {
  return (
    <div className="news-item ">
      <h2>{props.title}</h2>
      <a href={props.url}> Click here for full article</a>
      <p>{props.description}</p>
      <img src={props.image} alt="newsimage"></img>
    </div>
  );
}

export default NewsItem;
