import React from 'react';
import './tech.css';

const Tech: React.FC = (props: object) => {

const techData = [
    {
        type: "Languages",
        includes: ['Javascript','Typescript','Python', 'Ruby', 'C', 'C#', 'C++','GO', 'Java', 'Objective-C', 'Swift', 'Kotlin', 'Dart', 'Elixir', 'Scala', 'Lisp', 'Clojure', 'ELM', 'Haskell', 'OCAML', 'Web Assembly', 'Prolog', 'Crystal', 'Ballerina', 'Rust', 'Haxe', 'Groovy', 'F#', 'VB.NET']
    },
    {
        type: "Frontend Frameworks",
        includes: ['React', 'Angular', 'Vue', 'Svelte', 'Stencil', 'Ember']
    },
    {
        type: "Backend Frameworks",
        includes: ['Express(JS)', 'Koa(JS)', 'FoalTS(JS/TS)', 'Adonis(JS)', 'Next(JS)', 'Nuxt(JS)', 'Nest(JS)', 'Django(Python)', 'Flask(Python)', 'Bottle(Python)', 'Buffalo(GO)', 'Spring(Java)', 'Laravel(PHP)', 'Symphony(PHP)', 'CodeIgniter(PHP)', '.Net(C#,F#,VB.net)', 'Ktor(Kotlin)', 'Vapor(Swift)', 'Rocket(Rust)', 'Rails(Ruby)', 'Sinatra(Ruby)']
    },
    {
        type: "Databases",
        includes: ['MySQL', 'PostgreSQL', 'MongoDB','DynamoDB','MariaDB','Scylla', 'SQLite']
    },
    {
        type: "Cloud Providers",
        includes: ['AWS', 'Azure', 'gCloud']
    }
]

return (
    <div className="tech">
        {techData.map(tech => (
            <div className="type">
            <h1>{tech.type}</h1>
            <ul>
            {tech.includes.map(item => <li>{item}</li>)}
            </ul>
            </div>
        ))}


    </div>
)

}

export default Tech;
