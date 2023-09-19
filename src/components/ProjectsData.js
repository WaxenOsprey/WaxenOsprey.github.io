import { 
    solarSystemIntro,
    solarSystemOverview,
    solarSystemFeatures,
    solarSystemTechnologies,
    phoenixTraderIntro,
    phoenixTraderOverview,
    phoenixTraderFeatures,
    phoenixTraderTechnologies,
    gwentishIntro,
    gwentishOverview,
    gwentishFeatures,
    gwentishTechnologies

} from "../sectionStrings";

const postgresqlLogo = "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg";
const pythonLogo = "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/python/python-original.svg";
const flaskLogo = "https://cms-assets.tutsplus.com/uploads/users/769/posts/15965/preview_image/flask.png";
const htmlLogo = "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/html5/html5-original.svg";
const cssLogo = "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/css3/css3-original.svg";

const javaScriptLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
const reactLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
const nodeLogo = "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nodejs/nodejs-original.svg"
const mongoDBLogo = "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/mongodb/mongodb-original.svg"

const springBootLogo = "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/spring/spring-original.svg"
const javaLogo = "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/java/java-original.svg"

const solarSystemLogos = [
    {title: "PostgreSQL", src: postgresqlLogo},
    {title: "Python", src: pythonLogo},
    {title: "Flask", src: flaskLogo},
    {title: "HTML", src: htmlLogo},
    {title: "CSS", src: cssLogo},
]

const phoenixTraderLogos = [

    {title: "MongoDB", src: mongoDBLogo},
    {title: "Node", src: nodeLogo},
    {title: "JavaScript", src: javaScriptLogo},
    {title: "React", src: reactLogo},
    {title: "CSS", src: cssLogo},

]

const gwentishLogos = [

  {title: "Spring Boot", src: springBootLogo},
    {title: "Java", src: javaLogo},
    {title: "JavaScript", src: javaScriptLogo},
    {title: "React", src: reactLogo},
    {title: "CSS", src: cssLogo},

]






const projectsData = [
    {
        id: 1,
        name: "SolarSystem.DB",
        sections: [
            {
              title: 'Introduction',
              content: solarSystemIntro,
            },
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
              title: 'Introduction',
              content: phoenixTraderIntro,
            },
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
              title: 'Introduction',
              content: gwentishIntro,
            },
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