import React from 'react';
import './learning.css';
import Topic from './topic'

const Learning:React.FC = (props: object) => {

    const playlists = [
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'HTML/CSS/JS',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbbeAFC_F_f6jBKU4Xfu24sX',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            topic: 'Python 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbaTvgXqNCRXcKnqbO5j2oQn',
            img: 'https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_400x400.png'
        },
        {
            topic: 'C# 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbaQfi5KyW7IexlIsIKD1Oqb',
            img: 'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        },
        {
            topic: 'Javascript 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
        }
    ]

    return (
        <div className="learning">
        {playlists.map(topic => <Topic topic={topic}/>)}

        </div>
    )

}

export default Learning;
