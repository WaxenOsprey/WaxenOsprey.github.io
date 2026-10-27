export type TechnologyId =
  | 'csharp' | 'dotnet' | 'angular' | 'react' | 'typescript' | 'postgresql'
  | 'sql' | 'cosmos' | 'azure' | 'git' | 'github' | 'nunit' | 'api'
  | 'javascript' | 'python' | 'spring' | 'mongodb' | 'node' | 'garmin' | 'java';

export interface Technology {
  id: TechnologyId;
  name: string;
}

export const technologyNames: Record<TechnologyId, string> = {
  csharp: 'C#', dotnet: '.NET', angular: 'Angular', react: 'React',
  typescript: 'TypeScript', postgresql: 'PostgreSQL', sql: 'SQL Server',
  cosmos: 'Cosmos DB', azure: 'Azure', git: 'Git', github: 'GitHub',
  nunit: 'NUnit', api: 'REST APIs', javascript: 'JavaScript',
  python: 'Python', spring: 'Spring Boot', mongodb: 'MongoDB',
  node: 'Node.js', garmin: 'Garmin', java: 'Java',
};

export interface SkillGroup {
  title: string;
  technologies: readonly TechnologyId[];
}

export const skillGroups: readonly SkillGroup[] = [
  { title: 'Backend', technologies: ['csharp', 'dotnet', 'api'] },
  { title: 'Frontend', technologies: ['angular', 'react', 'typescript'] },
  { title: 'Data', technologies: ['postgresql', 'sql', 'cosmos'] },
  { title: 'Testing & delivery', technologies: ['nunit', 'git', 'azure'] },
];

export interface Role {
  id: string;
  title: string;
  position: string;
  company: string;
  period: string;
  summary: string;
  achievements: readonly string[];
  technologies: readonly TechnologyId[];
}

export const roles: readonly Role[] = [
  {
    id: 'development',
    title: 'Software Development & QA',
    position: 'QA Automation Engineer · Development responsibilities',
    company: 'The Craneware Group',
    period: 'March 2025 – Present',
    summary: 'Developing and modernising healthcare applications, combining C#/.NET development with a strong foundation in testing and software quality.',
    achievements: [
      'Contribute to application development and maintenance across established healthcare products, including InSight Medical Necessity and InSight Audit.',
      'Work with C#, Visual Basic, ASP.NET Web Forms and SQL stored procedures while maintaining existing business logic and managing regression risk.',
      'Support the ongoing integration of established applications into the wider Trisus platform, including shared authentication and API development.',
      'Previously developed C# automated testing tools and regression coverage for Trisus Claims Informatics, working alongside engineering and product teams.',
    ],
    technologies: ['csharp', 'dotnet', 'sql', 'azure', 'nunit'],
  },
  {
    id: 'implementation',
    title: 'Scripting & Integration',
    position: 'Software Support Implementation Representative',
    company: 'The Craneware Group',
    period: 'November 2024 – March 2025',
    summary: 'Built and supported scripting solutions to automate healthcare charge-management workflows and integrate customer systems.',
    achievements: [
      'Worked directly with healthcare clients to understand Patient Accounting System workflows and capture requirements.',
      'Developed and tested VBA scripts using Boston Workstation to automate charge-management processes.',
      'Investigated integration issues and maintained scripts in customer environments.',
    ],
    technologies: ['sql', 'git'],
  },
  {
    id: 'support',
    title: 'Technical Support',
    position: 'Software Support Representative',
    company: 'The Craneware Group',
    period: 'October 2023 – November 2024',
    summary: 'Investigated technical issues across healthcare applications, collaborating with customers and development teams.',
    achievements: [
      'Troubleshot complex software issues, working with customers and internal teams to identify root causes.',
      'Collaborated with developers to reproduce defects and understand application behaviour.',
      'Built a foundation in product functionality, customer workflows and professional software development practices.',
    ],
    technologies: ['sql', 'dotnet'],
  },
];

export type ProjectVisualId = 'posterity' | 'overloader' | 'solar' | 'phoenix' | 'gwentish';
export type ProjectStatus = 'In development' | 'Portfolio project' | 'CodeClan project';

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  overview: string;
  technologies: readonly TechnologyId[];
  highlights: readonly string[];
  visual: ProjectVisualId;
  sourceUrl?: string;
  featured: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: 'posterity', name: 'Posterity', category: 'Full-stack application',
    status: 'In development', visual: 'posterity', featured: true,
    summary: 'A place for gamers to organise and share screenshots and clips in collaborative vaults.',
    overview: 'Posterity is an ongoing personal project focused on gaming media. It combines a C#/.NET backend organised around Clean Architecture with an Angular frontend. Users can create vaults, manage membership and invitations, upload media and interact through features such as comments, reactions and friendships.',
    technologies: ['csharp', 'dotnet', 'angular', 'postgresql', 'azure'],
    highlights: [
      'Layered Domain, Application, Infrastructure and Web API projects with explicit business rules and services.',
      'Authentication using ASP.NET Identity and JWTs, with access checks around vaults and memberships.',
      'Image and video uploads backed by Azure Blob Storage with thumbnail generation.',
      'Angular components, stores and facades for media, vaults, profiles and activity feeds.',
    ],
  },
  {
    slug: 'overloader', name: 'OverLoader', category: 'Fitness & integration',
    status: 'In development', visual: 'overloader', featured: true,
    summary: 'Progressive-overload strength tracking that connects to Garmin workout data.',
    overview: 'OverLoader is an in-progress strength-training application designed to turn recorded Garmin workout sets into useful progression recommendations. It explores importing workouts and activity data, comparing actual reps and weights, and updating existing Garmin workout definitions.',
    technologies: ['csharp', 'dotnet', 'angular', 'postgresql', 'garmin'],
    highlights: [
      'ASP.NET Core backend with a domain model for workouts, performed sets and progression decisions.',
      'Integration work investigating Garmin authentication, custom workouts and recorded exercise sets.',
      'Double-progression rules that account for consecutive successful sessions.',
      'Designed to keep the workout definition and progression recommendations in one workflow.',
    ],
    sourceUrl: 'https://github.com/WaxenOsprey/OverLoader',
  },
  {
    slug: 'solar-system-db', name: 'SolarSystem.DB', category: 'Full-stack application',
    status: 'CodeClan project', visual: 'solar', featured: false,
    summary: 'A Flask and PostgreSQL application for exploring and managing solar system entities.',
    overview: 'A solo project from CodeClan exploring relational data, backend routes, CRUD functionality and the construction of a full-stack web application.',
    technologies: ['python', 'postgresql'],
    highlights: ['Flask server and data persistence.', 'Relational data modelling with PostgreSQL.', 'CRUD workflows and user-facing pages.'],
    sourceUrl: 'https://github.com/WaxenOsprey/SolarSystem.DB',
  },
  {
    slug: 'phoenix-trader', name: 'PhoenixTrader', category: 'Group application',
    status: 'CodeClan project', visual: 'phoenix', featured: false,
    summary: 'A group-built portfolio and watchlist application for tracking investments.',
    overview: 'A collaborative CodeClan project bringing together a React client, Node/Express API and MongoDB data store, with stock information sourced from the Finnhub API.',
    technologies: ['react', 'javascript', 'node', 'mongodb'],
    highlights: ['Portfolio and watchlist workflows.', 'Integration with external market data.', 'Team collaboration across frontend and backend components.'],
    sourceUrl: 'https://github.com/WaxenOsprey/PhoenixTrader',
  },
  {
    slug: 'gwentish', name: 'Gwentish!', category: 'Group capstone',
    status: 'CodeClan project', visual: 'gwentish', featured: false,
    summary: 'A multiplayer-inspired digital card game built with a Spring Boot backend and React.',
    overview: 'A CodeClan capstone project recreating the mechanics of a strategic card game, with player accounts, deck selection and scoring.',
    technologies: ['java', 'spring', 'react', 'javascript'],
    highlights: ['Backend game rules and state management.', 'Player accounts and deck features.', 'React frontend and collaborative delivery.'],
    sourceUrl: 'https://github.com/WaxenOsprey/Gwentish',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
