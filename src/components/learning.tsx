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
            topic: 'GO 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbZbFOW6r6YulR1_9SCrdyOZ',
            img: 'https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png'
        },
        {
            topic: 'Clojure 101',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbarM5X9VpYCVtPH85rsunv0',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/1024px-Clojure_logo.svg.png'
        },
        {
            topic: 'CS Concepts',
            url: 'https://www.youtube.com/playlist?list=PLY6oTPmKnKbbfwjU1ToZlUWCinxmFqlIp',
            img: 'https://www.mpsd.org/cms/lib/MA02212716/Centricity/Domain/99/Computer%20Science%20Banner%20Small.png'
        },
        {
            topic: 'Dart 101',
            url: 'https://www.youtube.com/watch?v=BTn36FhprnM&list=PLY6oTPmKnKbZaOObALdHSgGTZhne6Q-yJ',
            img: 'https://www.stickpng.com/assets/images/5847f289cef1014c0b5e486b.png'
        },
        {
            topic: 'Elixir 101',
            url: 'https://www.youtube.com/watch?v=MQYHu2GuRfU&list=PLY6oTPmKnKbYZhj8LsQ3yq1vn-HwlpkkS',
            img: 'https://www.columbuselixir.com/images/elixir-logo.png'
        },
        {
            topic: 'Swift 101',
            url: 'https://www.youtube.com/watch?v=ctughz7bbnQ&list=PLY6oTPmKnKbYn60pD3UYfYw7BzxGY2Do0',
            img: 'http://static1.squarespace.com/static/558def25e4b0fc259f066636/5a49786bf9619ae3bb6a2564/59307f9b15cf7dadce1c0bfa/1564669693374/Swift_logo.png'
        },
        {
            topic: 'Kotlin 101',
            url: 'https://www.youtube.com/watch?v=N5z2RDR9sk0&list=PLY6oTPmKnKba9Xg06DR67IxdppdKsQZ_s',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1024px-Kotlin-logo.svg.png'
        },
        {
            topic: 'Ruby 101',
            url: 'https://www.youtube.com/watch?v=4yMGIgXcJJM&list=PLY6oTPmKnKbZp8Kh6jS5A6j-6H2kGY12e',
            img: 'https://blog.mwpreston.net/wp-content/uploads/2018/09/ruby-logo.png'
        },
        {
            topic: 'Full Stack with KoaJS',
            url: 'https://www.youtube.com/watch?v=8_aWw7lfKKI&list=PLY6oTPmKnKbbF4t0Y9DcUVYi7f4kix7Qj',
            img: 'https://seeklogo.com/images/K/koa-logo-D494764315-seeklogo.com.png'
        },
        {
            topic: 'StencilJS',
            url: 'https://www.youtube.com/watch?v=btQ7Whq8xcU&list=PLY6oTPmKnKbazpUTMcGmvMtgU5sr0Ip-V',
            img: 'https://www.javascripttuts.com/images/technologies/Stencil.png'
        },
        {
            topic: 'SvelteJS',
            url: 'https://www.youtube.com/watch?v=Cu-JVd8MKaU&list=PLY6oTPmKnKbZpyj6WhUsjri1Tw_BO-obP',
            img: 'https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png'
        },
        {
            topic: 'VueJS',
            url: 'https://www.youtube.com/watch?v=_EwtLQ7BZkc&list=PLY6oTPmKnKbbsEAIDfFAlhAVbSCIt2Bxx',
            img: 'https://vuejs.org/images/logo.png'
        },
        {
            topic: 'Angular',
            url: 'https://www.youtube.com/watch?v=_EwtLQ7BZkc&list=PLY6oTPmKnKbahNK_YUsjTzP5U-FkGA544',
            img: 'https://angular.io/assets/images/logos/angular/angular.png'
        },
        {
            topic: 'Full Stack with ExpressJS',
            url: 'https://www.youtube.com/watch?v=SZxyYKhAvQQ&list=PLY6oTPmKnKbZeKlNGxOrL2Crl-tm1bxbJ',
            img: 'https://bs-uploads.toptal.io/blackfish-uploads/skill_page/content/logo_file/logo/5982/express_js-161052138fa79136c0474521906b55e2.png'
        },
        {
            topic: 'PHP 101',
            url: 'https://www.youtube.com/watch?v=scsmssXd47U&list=PLY6oTPmKnKbbLnwRkrCDhOl94iaibHwBJ',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png'
        },
        {
            topic: 'Full Stack with FoalTS',
            url: 'https://www.youtube.com/watch?v=mvoBeTdMFUE&list=PLY6oTPmKnKbY6v7zR9h1INfywh-qFLSQ_',
            img: 'https://foalts.org/assets/img/logo_400.png'
        },
        {
            topic: 'React',
            url: 'https://www.youtube.com/watch?v=SZxyYKhAvQQ&list=PLY6oTPmKnKbZeKlNGxOrL2Crl-tm1bxbJ',
            img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
        }
    ]

    return (
        <>
        <div className="learning">
        {playlists.map(topic => <Topic topic={topic}/>)}


        </div>
        <a href="https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ/playlists"><h3>Find More Coding Video Playlists Here</h3></a>
        </>)
}

export default Learning;
