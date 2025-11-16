// Personal Information
export const personalInfo = {
  name: "Manikonda Shraddha Rao",
  title: "Software Engineer & AWS Cloud Practitioner",
  description: "Passionate about building scalable applications, automating workflows, and leveraging cloud technologies to solve real-world problems.",
  location: "Chicago, Illinois",
  email: "raoshraddham@gmail.com",
  phone: "+1(815) 333 6718",
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shraddharaom" },
    { name: "GitHub", url: "https://github.com/Limeload" },
  ],
  stats: [
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Years Experience" },
    { value: "4", label: "Certifications" },
  ]
};

// Education
export const education = [
  {
    institution: "Per Scholas, Chicago",
    degree: "AWS re/Start",
    period: "March 2025",
    description: "Cloud computing and AWS services training"
  },
  {
    institution: "Flatiron School Bootcamp, Chicago",
    degree: "Software Engineering Certification",
    period: "March 2023",
    description: "Full-stack web development bootcamp"
  },
  {
    institution: "Raffles College of Higher Education, Singapore",
    degree: "B.A. (Hons)",
    period: "June 2018",
    description: "Bachelor's degree"
  }
];

// Skills
export const skills = {
  languages: ["Java", "Python", "JavaScript", "TypeScript"],
  frameworks: ["React", "React Native", "Spring Boot", "Flask"],
  cloud: ["AWS", "Lambda", "S3", "DynamoDB", "EC2", "RDS"],
  tools: ["Docker", "GitLab CI/CD", "Git", "Postman", "Swagger"],
  databases: ["PostgreSQL", "DynamoDB", "MySQL"]
};

// Certifications
export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    period: "2025-2028",
    credential: "https://www.credly.com/badges/aws-certified-cloud-practitioner"
  },
  {
    name: "Generative AI Fundamentals – Databricks Academy",
    period: "2025-2027",
    credential: "https://www.credly.com/badges/generative-ai-fundamentals"
  },
  {
    name: "Georgia Tech–CS1331xI: Intro to Object-Oriented Programming with Java I",
    period: "2025",
    credential: "https://www.credly.com/badges/georgia-tech-java"
  },
  {
    name: "Cisco–Python Essentials",
    period: "2025",
    credential: "https://www.credly.com/badges/cisco-python"
  }
];

// Experience
export const experience = [
  {
    title: "Open Source Developer",
    company: "Hacktoberfest",
    period: "October 2025",
    duration: "~160 hours",
    technologies: ["Python", "TypeScript", "CLI development", "API integration", "Database management"],
    achievements: [
      "Developed Terminal CLI Agent, an intelligent command-line tool to automate repetitive tasks",
      "Built MCP (Model Context Protocol) for Database, an AI-driven workflow system",
      "Delivered two functional open-source projects, enhancing workflow automation",
      "Contributed to the Hacktoberfest community with maintainable, well-documented tools"
    ]
  },
  {
    title: "Identity Access Manager for Distributed Services",
    company: "Open Source Project",
    period: "September 2025 - October 2025",
    duration: "~120 hours",
    technologies: ["Java", "Spring Boot", "JWT", "OAuth2", "AWS Lambda", "DynamoDB"],
    achievements: [
      "Developed a secure authentication and authorization service for microservices",
      "Designed a Lambda-powered token verifier with DynamoDB for session persistence",
      "Integrated multi-environment CI/CD using GitLab, enabling automated deployments"
    ]
  },
  {
    title: "UI Engineer Intern",
    company: "Patient Studio",
    period: "September 2021 - March 2022",
    duration: "~720 hours",
    technologies: ["React Native", "Tailwind CSS", "Apollo GraphQL"],
    achievements: [
      "Designed and implemented UI components to execute front-end queries and mutations",
      "Facilitated daily sprint stand-ups for a cross-functional team",
      "Developed dynamic patient form pages with seamless API integrations",
      "Built and launched an improved chat widget for real-time communication"
    ]
  }
];

// Projects
export const allProjects = [
  {
    id: 1,
    name: "Terminal CLI Agent",
    category: "Open Source",
    description: "An intelligent command-line tool to automate repetitive tasks, integrate with APIs, and boost developer productivity with cross-platform functionality.",
    image: "./projects/demo.png",
    github: "https://github.com/Limeload/terminal-cli-agent",
    demo: "",
    technologies: ["Python", "TypeScript", "CLI development", "API integration"],
    featured: true
  },
  {
    id: 2,
    name: "MCP (Model Context Protocol) for Database",
    category: "Open Source",
    description: "An AI-driven workflow system that integrates multiple databases, automates query handling, and streamlines data orchestration.",
    image: "./projects/demo.png",
    github: "https://github.com/Limeload/mcp-database",
    demo: "",
    technologies: ["Python", "TypeScript", "Database management", "AI integration"],
    featured: true
  },
  {
    id: 3,
    name: "Identity Access Manager for Distributed Services",
    category: "Full Stack",
    description: "A secure authentication and authorization service for microservices with token rotation, permission groups, and audit logs.",
    image: "./projects/demo.png",
    github: "https://github.com/Limeload/iam-distributed-services",
    demo: "",
    technologies: ["Java", "Spring Boot", "JWT", "OAuth2", "AWS Lambda", "DynamoDB", "GitLab CI/CD"],
    featured: true
  },
  {
    id: 4,
    name: "Patient Studio - UI Components",
    category: "Full Stack",
    description: "Designed and implemented UI components with dynamic patient form pages and real-time chat widget for healthcare communication.",
    image: "./projects/demo.png",
    github: "",
    demo: "",
    technologies: ["React Native", "Tailwind CSS", "Apollo GraphQL"],
    featured: false
  }
];

// Activities
export const activities = [
  {
    title: "Technical Blog Writer",
    description: "Published 10+ articles covering cloud engineering, Python patterns, and AI tooling; shared practical breakdowns of architectures, performance tips, and debugging approaches."
  },
  {
    title: "Hackathon Participant",
    description: "Competed in 3+ cloud & AI hackathons, focusing on automation and developer tools."
  },
  {
    title: "AWS Free Tier Experiments",
    description: "Explored EC2, Lambda, S3, RDS, and serverless workflows to gain hands-on cloud experience."
  },
  {
    title: "Freelance Developer",
    description: "Completed client projects building web apps, APIs, and automation tools; delivered end-to-end solutions using React, Python, AWS, and database technologies."
  }
];
