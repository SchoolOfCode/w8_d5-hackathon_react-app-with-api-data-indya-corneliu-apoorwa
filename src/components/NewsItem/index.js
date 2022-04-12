import React from "react";
import "tachyons";

function NewsItem(props) {
  return (
    // <div className="news-item ">
    <div className="bg-light-green dib br3 pa3 ma5 grow bw2 shadow-5 mv4 w-100 w-50-m w-25-l mw5">
      <h2>{props.title}</h2>
      <a href={props.url}> Click here for full article</a>
      <p class="f6 lh-copy measure mt2 mid-gray">{props.description} </p>
      <img src={props.image} alt="newsimage" class="db w-100 br2 br--top"></img>
    </div>
  );
}

export default NewsItem;
