import React from "react";
import NewsCard from "./Card";
import "./Display.css";
const Display = ({ news }) => {
  return (
    <div className="news">
      {news.map((Item) => (
        <NewsCard Item={Item} key={Item.title} />
      ))}
    </div>
  );
};

export default Display;
