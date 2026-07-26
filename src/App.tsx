import React from "react";
import "./App.css";
import Main from "./components/main";
import Learning from "./components/learning";
import Cheatsheets from "./components/cheatsheets";
import Tech from "./components/tech";
import NotFound from "./components/notfound";
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
          <a
            href="https://tuts.alexmercedcoder.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog Tutorials (external)
          </a>
          <Link to="/tech">Technology List</Link>
          {/* NOTE: this Slack shared_invite link may be expired - request a fresh invite from Alex if it no longer works */}
          <a
            href="https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack Community
          </a>
          <a
            href="https://discord.gg/hkdrPwX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Community
          </a>
        </nav>

        <nav id="mobile">
          <Link to="/learning">
            <FaVideo />
          </Link>
          <Link to="/cheatsheets">
            <FaFilePdf />
          </Link>
          <a
            href="https://tuts.alexmercedcoder.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog />
          </a>
          {/* NOTE: this Slack shared_invite link may be expired - request a fresh invite from Alex if it no longer works */}
          <a
            href="https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSlackHash />
          </a>
          <a
            href="https://discord.gg/hkdrPwX"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <footer>
          <div id="footerlinks">
            <a href="https://docs.devnursery.com">Developer Docs</a>
            <a
              href="https://tuts.alexmercedcoder.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog Tutorials
            </a>
            <a
              href="https://github.com/AlexMercedCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://teechip.com/stores/amcoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Merch Store
            </a>
          </div>
          <div id="friends">
            <a href="http://www.butterCMS.com">
              <img
                className="friend"
                src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
                alt="butter CMS"
              />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Alex Merced of
            alexmercedcoder.dev - Created with ReactJS/Typescript
            <br />
            Contact Alex Merced to be part of your new project at
            Alex@AlexMerced.dev
          </p>
        </footer>
      </Router>
    </div>
  );
};

export default App;
