import React from "react";
import "./learning.css";
import Topic from "./topic";

const Cheatsheets: React.FC = (props: object) => {
  const cheatsheets = [
    {
      topic: "Javascript",
      url:
        "https://www.scribd.com/document/483070482/DevNursery-Cheatsheet-Javascript",
      img: "https://cdn.worldvectorlogo.com/logos/javascript.svg",
    },
    {
      topic: "Python",
      url:
        "https://www.scribd.com/document/483038702/DevNursery-Cheatsheet-Python",
      img:
        "https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_400x400.png",
    },
    {
      topic: "C#",
      url: "https://www.scribd.com/document/483342973/DevNursery-Cheatsheet-C",
      img:
        "https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png",
    },
    {
      topic: "GO",
      url: "https://www.scribd.com/document/483104737/DevNursery-Cheatsheet-GO",
      img:
        "https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png",
    },
    {
      topic: "Dart",
      url:
        "https://www.scribd.com/document/483168290/DevNursery-Cheatsheet-Dart",
      img:
        "https://pbs.twimg.com/profile_images/993555605078994945/Yr-pWI4G_400x400.jpg",
    },
    {
      topic: "Swift",
      url:
        "https://www.scribd.com/document/483300169/DevNursery-Cheatsheet-Swift",
      img:
        "http://static1.squarespace.com/static/558def25e4b0fc259f066636/5a49786bf9619ae3bb6a2564/59307f9b15cf7dadce1c0bfa/1564669693374/Swift_logo.png",
    },
    {
      topic: "Kotlin",
      url:
        "https://www.scribd.com/document/483305342/devNursery-Cheatsheet-Kotlin",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1024px-Kotlin-logo.svg.png",
    },
    {
      topic: "Ruby",
      url:
        "https://www.scribd.com/document/483030439/DevNursery-Cheatsheet-Ruby",
      img:
        "https://blog.mwpreston.net/wp-content/uploads/2018/09/ruby-logo.png",
    },
    {
      topic: "PHP",
      url:
        "https://www.scribd.com/document/483063595/DevNursery-Cheatsheet-PHP",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png",
    },
    {
      topic: "Java",
      url:
        "https://www.scribd.com/document/483319907/DevNursery-Cheatsheet-Java",
      img:
        "https://library.kissclipart.com/20181207/bjw/kissclipart-java-powered-logo-clipart-java-development-kit-jav-39510e6f5fd15757.jpg",
    },
    {
      topic: "Ballerina",
      url:
        "https://www.scribd.com/document/483253448/DevNursery-Cheatsheet-Ballerina",
      img:
        "https://pbs.twimg.com/profile_images/979486143723917312/9LDf87n9_400x400.jpg",
    },
    {
      topic: "C",
      url: "https://www.scribd.com/document/483343589/DevNursery-Cheatsheet-C",
      img:
        "https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png",
    },
    {
      topic: "C++",
      url: "https://www.scribd.com/document/483348166/devNursery-Cheatsheet-C",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    },
    {
      topic: "Rust",
      url:
        "https://www.scribd.com/document/483216933/DevNursery-Cheatsheet-Rust",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",
    },
  ];

  return (
    <>
      <div className="learning">
        {cheatsheets.map((topic) => (
          <Topic topic={topic} />
        ))}
      </div>
      <a href="https://www.twitter.com/alexmercedcoder">
        <h3>Follow Alex on Twitter</h3>
      </a>
    </>
  );
};

export default Cheatsheets;
