import React from "react";
import "./learning.css";
import Topic from "./topic";

const Learning: React.FC = (props: object) => {
  const playlists = [
    {
      topic: "Javascript 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZDZ9cRrRby4Wnr4GIJj5O3",
      img: "https://cdn.worldvectorlogo.com/logos/javascript.svg",
    },
    {
      topic: "HTML/CSS/JS",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbeAFC_F_f6jBKU4Xfu24sX",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      topic: "Debugging/Testing Javascript",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbRBom0Txvg28C6EySkR6Vq",
      img: "https://keluro.com/images/Blog/Debug.jpg",
    },
    {
      topic: "Python 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaTvgXqNCRXcKnqbO5j2oQn",
      img:
        "https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_400x400.png",
    },
    {
      topic: "C# 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaQfi5KyW7IexlIsIKD1Oqb",
      img:
        "https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png",
    },
    {
      topic: "GO 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZbFOW6r6YulR1_9SCrdyOZ",
      img:
        "https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png",
    },
    {
      topic: "Clojure 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbarM5X9VpYCVtPH85rsunv0",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/1024px-Clojure_logo.svg.png",
    },
    {
      topic: "CS Concepts",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbfwjU1ToZlUWCinxmFqlIp",
      img:
        "https://www.mpsd.org/cms/lib/MA02212716/Centricity/Domain/99/Computer%20Science%20Banner%20Small.png",
    },
    {
      topic: "Dart 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZaOObALdHSgGTZhne6Q-yJ",
      img:
        "https://pbs.twimg.com/profile_images/993555605078994945/Yr-pWI4G_400x400.jpg",
    },
    {
      topic: "Elixir 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYZhj8LsQ3yq1vn-HwlpkkS",
      img: "https://www.columbuselixir.com/images/elixir-logo.png",
    },
    {
      topic: "Swift 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYn60pD3UYfYw7BzxGY2Do0",
      img:
        "http://static1.squarespace.com/static/558def25e4b0fc259f066636/5a49786bf9619ae3bb6a2564/59307f9b15cf7dadce1c0bfa/1564669693374/Swift_logo.png",
    },
    {
      topic: "Kotlin 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKba9Xg06DR67IxdppdKsQZ_s",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1024px-Kotlin-logo.svg.png",
    },
    {
      topic: "Ruby 101",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZp8Kh6jS5A6j-6H2kGY12e",
      img:
        "https://blog.mwpreston.net/wp-content/uploads/2018/09/ruby-logo.png",
    },
    {
      topic: "Full Stack with KoaJS",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbF4t0Y9DcUVYi7f4kix7Qj",
      img: "https://seeklogo.com/images/K/koa-logo-D494764315-seeklogo.com.png",
    },
    {
      topic: "StencilJS",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbazpUTMcGmvMtgU5sr0Ip-V",
      img: "https://www.javascripttuts.com/images/technologies/Stencil.png",
    },
    {
      topic: "SvelteJS",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZpyj6WhUsjri1Tw_BO-obP",
      img:
        "https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png",
    },
    {
      topic: "VueJS",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbsEAIDfFAlhAVbSCIt2Bxx",
      img: "https://vuejs.org/images/logo.png",
    },
    {
      topic: "Angular",
      url:
        "https://www.youtube.com/watch?v=_EwtLQ7BZkc&list=PLY6oTPmKnKbahNK_YUsjTzP5U-FkGA544",
      img: "https://angular.io/assets/images/logos/angular/angular.png",
    },
    {
      topic: "Full Stack with ExpressJS",
      url:
        "https://www.youtube.com/watch?v=SZxyYKhAvQQ&list=PLY6oTPmKnKbZeKlNGxOrL2Crl-tm1bxbJ",
      img:
        "https://bs-uploads.toptal.io/blackfish-uploads/skill_page/content/logo_file/logo/5982/express_js-161052138fa79136c0474521906b55e2.png",
    },
    {
      topic: "PHP 101",
      url:
        "https://www.youtube.com/watch?v=scsmssXd47U&list=PLY6oTPmKnKbbLnwRkrCDhOl94iaibHwBJ",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png",
    },
    {
      topic: "Full Stack with FoalTS",
      url:
        "https://www.youtube.com/watch?v=mvoBeTdMFUE&list=PLY6oTPmKnKbY6v7zR9h1INfywh-qFLSQ_",
      img: "https://foalts.org/assets/img/logo_400.png",
    },
    {
      topic: "React",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbba6LlpF7kcnsyWdlwePt_V",
      img:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      topic: "Full Stack with PHP/Laravel",
      url:
        "https://www.youtube.com/watch?v=3eWGqdyMJ5Y&list=PLY6oTPmKnKbZ5TgZKeh0uKT6d1DenRmx1",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    },
    {
      topic: "CSS/SCSS",
      url:
        "https://www.youtube.com/watch?v=urFkrlRGnDI&list=PLY6oTPmKnKbZXeMjA3ngkpE_4puPstrLT",
      img: "https://www.ajaypalcheema.com/content/images/2020/02/CSS.3-1.svg",
    },
    {
      topic: "CircleCI/Jest",
      url:
        "https://www.youtube.com/watch?v=vurr1dKKALg&list=PLY6oTPmKnKbbLMbKlhk2Za5P-Q6k9uKhz",
      img:
        "https://d3r49iyjzglexf.cloudfront.net/circleci-logo-stacked-fb-657e221fda1646a7e652c09c9fbfb2b0feb5d710089bb4d8e8c759d37a832694.png",
    },
    {
      topic: "NextJS - Server Side React",
      url:
        "https://www.youtube.com/watch?v=ES0luPNdbRs&list=PLY6oTPmKnKbZBfml7eZ-ubwCEMC4EjdTN",
      img:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--sItCGY2B--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.auth0.com/blog/next.jslogo.png",
    },
    {
      topic: "Knex Query Builder",
      url:
        "https://www.youtube.com/watch?v=9LHk0oBfqoY&list=PLY6oTPmKnKbbCV74RBY108b61O2-tdszz",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROMEKzarfkzWYaPQVueKnC4BtI0e8JUl4P5ZfUKZ3FLzsCQruf",
    },
    {
      topic: "Typescript 101",
      url:
        "https://www.youtube.com/watch?v=Z6ePfTDXonk&list=PLY6oTPmKnKbboGAL_-MineM-zcOblOm6V",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
    {
      topic: "GraphQL/Apollo Server",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZ7XA4XFhxiVsg_Lu3dDKsK",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
    },
    {
      topic: "Typescript React",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaL32w5whB8Dxvy_DgOT8Nd",
      img: "https://miro.medium.com/max/1024/1*Ukhx76VQ8E6JXEW7xfIzSA.png",
    },
    {
      topic: "Lodash",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbB6o91AcCploetRyg5zgQs",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/1200px-Lodash.svg.png",
    },
    {
      topic: "MongoDB",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaSCVF-Imd1hkQJvl8iLrV3",
      img: "https://miro.medium.com/max/3200/1*DiNIG4Bfpm65_wwXf_JwMA.png",
    },
    {
      topic: "Web Components",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaNVkXHOHWxgdKEZLGKuFP9",
      img: "https://miro.medium.com/max/512/1*7oMzHMOkwWwxBbmDkXKtLg.png",
    },
    {
      topic: "MercedUI",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYrP3DfCUTYYADu0IT9DRZZ",
      img: "https://i.imgur.com/Jp894lv.png",
    },
    {
      topic: "MercedUtils/Bettertypes",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbge3XP8ne041HAQwGle8_Z",
      img: "https://i.imgur.com/Jp894lv.png",
    },
    {
      topic: "Nim",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaU9h_STLxU-hYXBTvFYqZF",
      img:
        "https://pbs.twimg.com/profile_images/956929658175541249/Pdi35gut.jpg",
    },
    {
      topic: "ReasonML/OCAML",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbwwLH1c7n-2prVeWzE2b8V",
      img:
        "https://pbs.twimg.com/profile_images/1004185780313395200/ImZxrDWf.jpg",
    },
    {
      topic: "Crystal",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZZBx6Z4uQ2vTUic2mBT5rw",
      img: "https://crystal-lang.org/images/icon.png",
    },
    {
      topic: "Express & Express-React-Views",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYSccuOraBKdmf-hnayh_-7",
      img: "https://daveceddia.com/images/react-and-express-square.png",
    },
    {
      topic: "Deno",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZTEpugx5VjFbn104JlSFfB",
      img: "https://miro.medium.com/max/2560/1*c9qLloy5Ts-lzAVkd3vgeA.png",
    },
    {
      topic: "Python/Django",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbwiftMy2RfwC8MpFbhngXT",
      img:
        "https://developerhowto.com/wp-content/uploads/2018/12/phyton-django.jpg",
    },
    {
      topic: "Ruby on Rails",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYlAqVHgzZl5lou54bizdbV",
      img:
        "https://swiftlet.co.th/wp-content/uploads/2019/05/What-is-Ruby-on-Rails-1-1.png",
    },
    {
      topic: "Go/Buffalo",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbosLf7mDBjqxr2qBXUUBYk",
      img: "https://avatars2.githubusercontent.com/u/24794651?s=400&v=4",
    },
    {
      topic: "Postgres/SQL",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYC24jbJwOmekvsraIV8Gv7",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    },
    {
      topic: "Tools (Bash, GIT, etc.)",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYjGEm9nLowExbgkI-epIgg",
      img:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/tools.png",
    },
    {
      topic: "Headless Development",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYonuqTHD-RyTAHmWvM1-kU",
      img:
        "https://www.eficode.com/hs-fs/hubfs/headless-cms%20%282%29.jpg?width=1024&name=headless-cms%20%282%29.jpg",
    },
    {
      topic: "jQuery",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaK2r_zkLKf_6iHBW09_Ucc",
      img: "https://miro.medium.com/max/800/0*g3ns8QALNBBH7CBA.",
    },
    {
      topic: "Java",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZtl3gTxPisijUGR3AnKw6D",
      img:
        "https://library.kissclipart.com/20181207/bjw/kissclipart-java-powered-logo-clipart-java-development-kit-jav-39510e6f5fd15757.jpg",
    },
    {
      topic: "Java Spring",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKba48blxX8u8Xb7JOEwClGV6",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJ5bi0SRdjIEoZmoHCOLq1FYYUWiWdXTMIaA&usqp=CAU",
    },
    {
      topic: "Ballerina",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbWQOA-j-uyf6swRqwP4Ehr",
      img:
        "https://pbs.twimg.com/profile_images/979486143723917312/9LDf87n9_400x400.jpg",
    },
    {
      topic: "Ruby Sinatra",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZn4pi2Wma0MmqRtD9SImJj",
      img:
        "https://cdn.glitch.com/project-avatar/7ea2383a-d0c2-4937-9f53-71c01f93d18b.png?2018-02-25T20:16:32.799Z",
    },
    {
      topic: "C",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaFlr8YPGokRA1CjJ20BE_b",
      img:
        "https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png",
    },
    {
      topic: "C++",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbaOEN-4vA_cZ5bqwysKCOGC",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    },
    {
      topic: "Rust",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbYPkf2AhsPbq_YGh3q7p4Aj",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",
    },
    {
      topic: "GatsbyJS",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbZgxwVjSuk-SkgoFNuMBWL_",
      img:
        "https://javascriptforwp.com/wp-content/uploads/2019/03/badge-gatsby.png",
    },
    {
      topic: "Raku/Perl 6",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbMOdyKsY9U2KS4BCOMmAzR",
      img: "https://www.raku.org/camelia-logo.png",
    },
    {
      topic: "Other Languages",
      url:
        "https://www.youtube.com/playlist?list=PLY6oTPmKnKbbGEJLfi6qkHkMp6wGaTkJh",
      img: "https://cdn-images-1.medium.com/max/1000/0*-1GbACzhUWimo-IR",
    },
  ];

  return (
    <>
      <div className="learning">
        {playlists.map((topic) => (
          <Topic topic={topic} label="Watch Video" />
        ))}
      </div>
      <a href="https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ/playlists">
        <h3>Find More Coding Video Playlists Here</h3>
      </a>
    </>
  );
};

export default Learning;
