export const social: ISocial[] = [
  {
    name: "GitHub",
    icon: "github-142-svgrepo-com",
    url: "https://github.com/CarlosPProjects",
  },
  {
    name: "Youtube",
    icon: "youtube-168-svgrepo-com",
    url: "https://www.youtube.com/@Stoodiow",
  },
  {
    name: "Linkedin",
    icon: "linkedin-161-svgrepo-com",
    url: "https://www.linkedin.com/in/cgaravitodev/",
  },
];

export const nav: INav[] = [
  {
    name: "Home",
    url: "/",
    featured: false,
  },
  {
    name: "About me",
    url: "/about",
    featured: false,
  },
  {
    name: "Contact me",
    url: "#contact",
    featured: true,
  },
];

export const projects: IProject[] = [
  {
    title: "Prototype with Astro and Tailwind",
    subtitle: "Simplicity and performance in web development",
    description:
      "A minimalist prototype using Astro and TailwindCSS to create a lightweight, efficient web page. Astro's architecture enables optimized rendering, while Tailwind provides a clean, responsive design with minimal resource load.",
    image: "/assets/projects/first-astro-project.webp",
    url: "https://astro-fp.vercel.app/",
  },
  {
    title: "Bento Grid Prototype",
    subtitle: "Minimalist design for modern web portfolio",
    description:
      "A prototype featuring a minimalist bento grid layout, built with Next.js, TailwindCSS, Shadcn, and TypeScript for a responsive and visually appealing user experience.",
    image: "/assets/projects/bento-portfolio.webp",
    url: "https://portfolio-v3-dusky.vercel.app/",
  },
  {
    title: "Image Search Application",
    subtitle: "Dynamic image retrieval and download functionality",
    description:
      "An application built with Next.js, TailwindCSS, and TypeScript that utilizes the Unsplash API to fetch images based on user input. Users can search for images and download their favorites directly from the interface.",
    image: "/assets/projects/unsplash-gallery.webp",
    url: "https://unsplash-v2.vercel.app/",
  },
];

export const skills: ISkill[] = [
  {
    title: "🎨 Front-end Development",
    description:
      "Experience in creating interactive and modern interfaces using technologies such as Next.js, TypeScript, and TailwindCSS. Skilled in developing optimized websites with frameworks such as Angular, and CMS platforms such as WordPress and Drupal.",
  },
  {
    title: "🖥️ Back-end Development",
    description:
      "Development of robust server-side applications using Node.js, Express and PHP. Extensive handling of RESTful APIs for efficient integration and communication between systems, ensuring security and scalability in each project.",
  },
  {
    title: "💾 Databases",
    description:
      "Strong experience in managing relational databases such as MySQL and NoSQL databases such as MongoDB. Ability to design, optimize and maintain data structures that support high performance and availability.",
  },
  {
    title: "☁️ DevOps & Infrastructure",
    description:
      "Proficient in server configuration and maintenance, ensuring availability and performance. Use of Docker for creating consistent development environments, along with AWS for deploying cloud services. Version control and collaboration with GitHub.",
  },
  {
    title: "🤖 Emerging Technologies",
    description:
      "Experience using Python to develop artificial intelligence (AI) applications, exploring innovative solutions and applying machine learning to specific projects.",
  },
  {
    title: "🔒 Security and Optimization",
    description:
      "Experience in implementing web security measures to protect applications and data, as well as in optimizing the performance of websites and applications to improve their speed and efficiency.",
  },
];
