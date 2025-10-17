// Sample project data for Md Eyamin Sheikh's portfolio
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: 'frontend' | 'fullstack';
}

export const projects: Project[] = [
  // A12
  { 
    id: 1,
    title: "StudyHub - Collaborative Study Platform",
    description: "🎓 Modern Educational Platform for Collaborative Learning",
    longDescription: "A comprehensive React-based web application that connects students and tutors for collaborative study sessions, featuring real-time session management, secure payments, and interactive learning materials.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    liveUrl: "https://resilient-vacherin-ecfaf3.netlify.app/",
    githubUrl: "https://github.com/01775012014/Study-Platform-Clinde-A12",
    category: "fullstack"
  },
  {
    // A11
    id: 2,
    title: "🎯 SportZone - Athletic Events Platform",
    description: "A modern React web app for discovering and managing athletic events.",
    longDescription: "A comprehensive web application for discovering, booking, and managing athletic events. Built with modern React technologies and featuring a beautiful, responsive design.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "CSS3"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    liveUrl: "https://mellifluous-caramel-bd2364.netlify.app/",
    githubUrl: "https://github.com/Md-Eyamin-Sheikh/SportZone-A11?tab=readme-ov-file",
    category: "fullstack"
  },
  { // {A8
    id: 3,
    title: "FlagshipFaceOff - Premium Phone Marketplace",
    description: "A modern React-based web application for browsing, comparing, and exploring flagship smartphones.",
    longDescription: "Created an interactive weather dashboard that displays current weather, hourly forecasts, and 7-day predictions. Features include location-based weather, weather maps, and customizable units.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Weather API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
    liveUrl: "https://admirable-fox-fa58e5.netlify.app/",
    githubUrl: "https://github.com/programming-hero-web-course1/b11a9-react-authentication-01775012014?tab=readme-ov-file",
    category: "frontend"
  },
  {
    // boro vai
    id: 4,
    title: "Awesome UI Dark Template for Webflow Agency",
    description: "A customizable portfolio template for developers and designers with multiple themes.",
    longDescription: "Designed and developed a modern portfolio template featuring dark/light modes, smooth animations, responsive design, and easy customization options. Perfect for showcasing projects and skills.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    liveUrl: "https://sensational-beijinho-28a101.netlify.app/services",
    githubUrl: "https://github.com",
    category: "frontend"
  },
  {
    id: 5,
    title: "Dependable Care, Backed by Trusted Professionals.",
    description: "A full-stack blogging platform with markdown support and comment system.",
    longDescription: "Built a comprehensive blogging platform with markdown editor, syntax highlighting for code blocks, comment system, user profiles, and SEO optimization. Includes admin panel for content management.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    liveUrl: "https://tourmaline-pie-b410b8.netlify.app/",
    githubUrl: "https://github.com",
    category: "frontend"
  },
  {
    id: 6,
    title: "HobbyHub is your gateway to discovering ",
    description: "HobbyHub is your gateway to discovering meaningful connections through shared passions.",
    longDescription: "HobbyHub is your gateway to discovering meaningful connections through shared passions. We believe that hobbies are more than just activities — they're the threads that weave communities together and create lasting friendships.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    liveUrl: "https://visionary-pixie-6ba9dc.netlify.app/",
    githubUrl: "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-01775012014",
    category: "fullstack"
  }
];
