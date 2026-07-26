import React, { useEffect } from 'react';
import './main.css';

const Main: React.FC = (props: object) => {

    useEffect(() => {
        document.title = 'Home | devNursery';
    }, []);

    return (
        <div className="main">
            <h1>Welcome to DN!</h1>
            <p>Here at DN we hope to provide resources to help developers continue their growth. We do this by curating learning resources, fostering a community and creating a platform for developers to share that growth with the world. Welcome to devNursery, where we help grow developer careers, networks, and skills.</p>
            <h2>
                <a href="https://docs.devnursery.com">Start here &rarr; Developer Docs</a>
            </h2>
            <p>
                Join the community:{" "}
                <a href="https://discord.gg/hkdrPwX" target="_blank" rel="noopener noreferrer">Discord</a>
                {" | "}
                {/* NOTE: this Slack shared_invite link may be expired - request a fresh invite from Alex if it no longer works */}
                <a href="https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA" target="_blank" rel="noopener noreferrer">Slack</a>
            </p>
            <img src="/freeresources.png" alt="Free developer resources"/>
        </div>
    )

}

export default Main;
