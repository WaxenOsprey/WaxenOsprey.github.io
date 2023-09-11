import { 
    solarSystemOverview,
    solarSystemFeatures,
    solarSystemTechnologies,
    phoenixTraderOverview,
    phoenixTraderFeatures,
    phoenixTraderTechnologies,
    gwentishOverview,
    gwentishFeatures,
    gwentishTechnologies

} from "../sectionStrings";

const htmlLogo = "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";
const cssLogo = "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";
const pythonLogo = "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg";
const flaskLogo = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg";
const postgresqlLogo = "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg";

const javaScriptLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
const reactLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
const nodeLogo = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
const mongoDBLogo = "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"

const springBootLogo = "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
const javaLogo = "https://upload.wikimedia.org/wikipedia/de/thumb/e/e1/Java-Logo.svg/486px-Java-Logo.svg.png?20061221200047"

const solarSystemLogos = [
    {title: "HTML", src: htmlLogo},
    {title: "CSS", src: cssLogo},
    {title: "Python", src: pythonLogo},
    {title: "Flask", src: flaskLogo},
    {title: "PostgreSQL", src: postgresqlLogo}
]

const phoenixTraderLogos = [

    {title: "JavaScript", src: javaScriptLogo},
    {title: "CSS", src: cssLogo},
    {title: "React", src: reactLogo},
    {title: "Node", src: nodeLogo},
    {title: "MongoDB", src: mongoDBLogo}

]

const gwentishLogos = [

    {title: "Java", src: javaLogo},
    {title: "Spring Boot", src: springBootLogo},
    {title: "JavaScript", src: javaScriptLogo},
    {title: "CSS", src: cssLogo},
    {title: "React", src: reactLogo},

]






const projectsData = [
    {
        id: 1,
        name: "SolarSystem.DB",
        sections: [
            {
              title: 'Overview',
              content: solarSystemOverview,
            },
            {
              title: 'Features',
              content: solarSystemFeatures,
            },
            {
              title: 'Technologies Used',
              content: solarSystemTechnologies,
            },
          ],
          logos: solarSystemLogos,
          video: "MIOJlNl5Mtw"
    },
    {
        id: 2,
        name: "PhoenixTrader",
        sections: [
            {
              title: 'Overview',
              content: phoenixTraderOverview,
            },
            {
              title: 'Features',
              content: phoenixTraderFeatures,
            },
            {
              title: 'Technologies Used',
              content: phoenixTraderTechnologies,
            },
          ],
          logos: phoenixTraderLogos,
          video: "wmIUW2Ory1Q"
    },
    {
        id: 3,
        name: "Gwentish!",
        sections: [
            {
              title: 'Overview',
              content: gwentishOverview,
            },
            {
              title: 'Features',
              content: gwentishFeatures,
            },
            {
              title: 'Technologies Used',
              content: gwentishTechnologies,
            },
          ],
          logos: gwentishLogos,
          video: "Zx98fQdlp_0"
    }
]

export default projectsData;