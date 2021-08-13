import React from 'react';
import './main.css';

const Main: React.FC = (props: object) => {


    return (
        <div className="main">
            <h1>Welcome to DN!</h1>
            <p>Here at DN we hope to provide resources to help developers continue their growth. We do this by curating learning resources, fostering a community and creating a platform for developers to share that growth with the world. Welcome to devNursery, where we help grow developer careers, networks, and skills.</p>
            <img src="https://vscode.readthedocs.io/en/latest/languages/images/typescript/typescript_hero.png"/>
        </div>
    )

}

export default Main;
