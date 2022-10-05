import React from "react";
import "./App.css";
import Main from "./components/main";
import Learning from "./components/learning";
import Cheatsheets from "./components/cheatsheets";
import Tech from "./components/tech";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  FaVideo,
  FaBlog,
  FaFilePdf,
  FaSlackHash,
  FaDiscord,
} from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <div className="logo">
            {" "}
            <span>dev</span>Nursery{" "}
          </div>{" "}
        </Link>
        <hr id="mobileline" />

        <nav id="desktop">
          <Link to="/">Home</Link>
          <Link to="/learning">Video Tutorials</Link>
          <Link to="/cheatsheets">Cheatsheets</Link>
          <a href="https://tuts.alexmercedcoder.dev/">Blog Tutorials</a>
          <Link to="/tech">Technology List</Link>
          <a href="https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA">
            Slack Community
          </a>
          <a href="https://discord.gg/hkdrPwX">Discord Community</a>
          <a href="https://teechip.com/stores/amcoder">Merch</a>
        </nav>

        <nav id="mobile">
          <Link to="/learning">
            <FaVideo />
          </Link>
          <Link to="/cheatsheets">
            <FaFilePdf />
          </Link>
          <a href="https://tuts.alexmercedcoder.dev/">
            <FaBlog />
          </a>
          <a href="https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA">
            <FaSlackHash />
          </a>
          <a href="https://discord.gg/hkdrPwX">
            <FaDiscord />
          </a>
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/learning">
              <Learning />
            </Route>
            <Route path="/cheatsheets">
              <Cheatsheets />
            </Route>
            <Route path="/tech">
              <Tech />
            </Route>
          </Switch>
        </div>
        <footer>
          Application created by Alex Merced of alexmercedcoder.dev, Created
          with ReactJS/Typescript
          <br />
          <br />
          Contact Alex Merced to be part of your new project at
          Alex@AlexMerced.dev
        </footer>
        <hr />
        <div id="friends">
          <h1>Friends of devNursery</h1>
          <div>
            <a href="http://www.butterCMS.com">
              <img
                className="friend"
                src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
                alt="butter CMS"
              />
            </a>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
