export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'SCSDB Movie Database',
    desc: "SCSDB is a sleek movie browsing platform where you can explore the latest trending movies and TV shows. Powered by dynamic APIs, it delivers real-time details like ratings, release dates, and cast info. Designed with a clean UI for a smooth and engaging user experience, it's perfect for film buffs who want quick, stylish updates",
    subdesc:
      "Built with React, Redux, Tailwind CSS, and Infinite Scroll, SCSDB is engineered for seamless navigation, dynamic content loading, and a fluid user experience.",
    href: 'https://scsdb-eight.vercel.app/',
    texture: '/textures/project/my1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Redux',
        path: '/assets/redux.png',
      },
    ],
  },
  {
    title: ' Fitness Exercises App',
    desc: 
 " Built with React, Tailwind CSS, and RapidAPI integration, Your Gym Guide delivers real-time exercise data with a smooth, responsive design for fitness enthusiasts",
    subdesc:
      'Built with React, Tailwind CSS, and RapidAPI, Your Gym Guide is optimized for performance, real-time data fetching, and responsive design, offering a seamless workout discovery experience.',
    href: 'https://your-gym-guide.netlify.app/',
    texture: '/textures/project/my2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/javascript.png',
      },
     
    ],
  },
  {
    title: 'Apple Iphone 15 Clone',
    desc: 'New-15 is a modern, high-performance portfolio website featuring elegant animations, smooth scrolling, and a dynamic user experience. Designed to showcase projects and creativity with maximum visual impact.',
    subdesc:
      'Built with React, Tailwind CSS, and GSAP, New-15 is crafted for seamless animations, optimal responsiveness, and a premium browsing experience.',
    href: 'https://new-15.netlify.app/',
    texture: '/textures/project/my3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Three Js',
        path: '/assets/three.png',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.12,
    deskPosition: isSmall?[0.5,-2.5,0]: isMobile ? [0.5, -4.5, 0] : [0.8, -9.9, 0],
    cubePosition: isSmall ? [2, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [4, 5, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-9, 5, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-10, 3, 0],
    targetPosition: isSmall ? [-5, -20, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

