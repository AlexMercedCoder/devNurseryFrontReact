import React, { useEffect } from "react";
import "./main.css";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | devNursery";
  }, []);

  return (
    <div className="main">
      <h1>404 - Page Not Found</h1>
      <p>
        The page you're looking for doesn't exist. Check out the{" "}
        <a href="https://docs.devnursery.com">developer docs</a> or use the
        navigation above to find what you need.
      </p>
    </div>
  );
};

export default NotFound;
