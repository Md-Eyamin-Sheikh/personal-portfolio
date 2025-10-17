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
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    longDescription: "Built a complete e-commerce solution with user authentication, product catalog, shopping cart functionality, order management, and payment integration. Features include real-time inventory updates, order tracking, and comprehensive admin panel.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "Developed a productivity tool that allows teams to create, assign, and track tasks in real-time. Includes drag-and-drop functionality, priority levels, deadline reminders, and team chat integration.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "CSS3"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "fullstack"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A modern weather application showing real-time weather data with beautiful visualizations.",
    longDescription: "Created an interactive weather dashboard that displays current weather, hourly forecasts, and 7-day predictions. Features include location-based weather, weather maps, and customizable units.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Weather API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "frontend"
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers with multiple themes.",
    longDescription: "Designed and developed a modern portfolio template featuring dark/light modes, smooth animations, responsive design, and easy customization options. Perfect for showcasing projects and skills.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "frontend"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A full-stack blogging platform with markdown support and comment system.",
    longDescription: "Built a comprehensive blogging platform with markdown editor, syntax highlighting for code blocks, comment system, user profiles, and SEO optimization. Includes admin panel for content management.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Markdown"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "fullstack"
  },
  {
    id: 6,
    title: "Restaurant Landing Page",
    description: "An elegant landing page for restaurants with menu showcase and reservation system.",
    longDescription: "Designed a stunning restaurant website with menu display, online reservation system, image gallery, and contact form. Features smooth scrolling animations and mobile-responsive design.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "frontend"
  }
];
