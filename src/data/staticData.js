// Static data for portfolio - no API calls needed
export const projects = [
  {
    id: 1,
    name: "Open Source Projects",
    img_url: "./images/icon3.png",
    description: "Open source contributions and projects showcasing automation, CLI tools, and developer productivity solutions."
  },
  {
    id: 2,
    name: "Full Stack Applications",
    img_url: "./images/icon4.png",
    description: "Full-stack web applications built with modern technologies including React, Spring Boot, and AWS services."
  }
];

export const openSourceProjects = [
  {
    id: 1,
    name: "Terminal CLI Agent",
    description: "An intelligent command-line tool to automate repetitive tasks, integrate with APIs, and boost developer productivity with cross-platform functionality.",
    images: "./projects/demo.png",
    github: "https://github.com/Limeload/terminal-cli-agent",
    demo: "",
    technologies: ["Python", "TypeScript", "CLI development", "API integration"]
  },
  {
    id: 2,
    name: "MCP (Model Context Protocol) for Database",
    description: "An AI-driven workflow system that integrates multiple databases, automates query handling, and streamlines data orchestration.",
    images: "./projects/demo.png",
    github: "https://github.com/Limeload/mcp-database",
    demo: "",
    technologies: ["Python", "TypeScript", "Database management", "AI integration"]
  }
];

export const fullStackProjects = [
  {
    id: 1,
    name: "Identity Access Manager for Distributed Services",
    description: "A secure authentication and authorization service for microservices with token rotation, permission groups, and audit logs. Features Lambda-powered token verifier with DynamoDB for session persistence and revocation lists.",
    images: "./projects/demo.png",
    github: "https://github.com/Limeload/iam-distributed-services",
    demo: "",
    technologies: ["Java", "Spring Boot", "JWT", "OAuth2", "AWS Lambda", "DynamoDB", "GitLab CI/CD"]
  },
  {
    id: 2,
    name: "Patient Studio - UI Components",
    description: "Designed and implemented UI components to execute front-end queries and mutations within the React framework. Developed dynamic patient form pages with seamless API integrations and reusable components. Built and launched an improved chat widget for real-time communication between patients and doctors.",
    images: "./projects/demo.png",
    github: "",
    demo: "",
    technologies: ["React Native", "Tailwind CSS", "Apollo GraphQL"]
  }
];

