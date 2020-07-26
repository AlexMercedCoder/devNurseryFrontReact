import React from "react";
import "./App.css";
import Main from "./components/main";
import Learning from "./components/learning";
import Tech from "./components/tech";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div className="logo">
          {" "}
          <span>dev</span>Nursery{" "}
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/learning">Free Learning</Link>
          <Link to="/tech">Technology List</Link>
          <a href="https://member.devnursery.com/">Members</a>
          <a href="https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA">
            Slack Community
          </a>
          <a href="https://discord.gg/hkdrPwX">Discord Community</a>
          <a href="https://spectrum.chat/devnursery">Spectrum Community</a>
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/learning">
              <Learning />
            </Route>
            <Route path="/tech">
              <Tech />
            </Route>
          </Switch>
        </div>
        <footer>
          Application created by Alex Merced of AlexMercedCoder.com, Created
          with ReactJS/Typescript
          <br />
          <br />
          Contact Alex Merced to be part of your new project at
          Alex@AlexMerced.dev
        </footer>
      </Router>
    </div>
  );
};

export default App;
