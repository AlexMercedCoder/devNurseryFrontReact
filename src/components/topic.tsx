import React from "react";
import "./topic.css";

interface TopicProps {
  topic: {
    topic: string;
    url: string;
    img: string;
  };
  label: string;
}

const Topic: React.FC<TopicProps> = (props) => {
  // const playlists = [
  //   {
  //     topic: "Javascript 101",
  //     url:
  //       "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3",
  //     img: "https://cdn.worldvectorlogo.com/logos/javascript.svg"
  //   }
  // ];

  return (
    <div className="topic">
      <h1>{props.topic.topic}</h1>
      <img src={props.topic.img} alt={props.topic.topic} />
      <h2>
        <a href={props.topic.url}> {props.label}</a>
      </h2>
    </div>
  );
};

export default Topic;
