import React from "react";
import "tachyons";
//import "./newsitem.css";

function NewsItem(props) {
  return (
    <div className="flex flex-wrap dt dt--fixed w-30">
      <div className=" dtc bg-light-green dib br8 pa3 ma4 grow bw10 shadow-5 mv4 w-100 w-50-m w-25 mw7">
        <h2 className="f5 lh-copy measure mt2 black">{props.title}</h2>
        <a href={props.url}> Click here for full article</a>
        <p class="f6 lh-copy measure mt2 mid-gray">{props.description} </p>
        <img
          src={props.image}
          alt="newsimage"
          class="db w-100 br2 br--top"
        ></img>
      </div>
    </div>
  );
}

export default NewsItem;
