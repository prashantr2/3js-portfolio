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
      title: 'ChatOcean - A fullstack Social Media WebApp',
      desc: 'A fullstack social media web app where user can like, share, upload a post, chat with friends, follow other users, edit profile page etc.',
      subdesc:
        'Is fully responsive to various screen sizes, also has been dockerized for easy setup',
      href: 'https://www.youtube.com/watch?v=nsAT9Fd6M2M',
      texture: '/textures/project/project-demo-chatocean.mp4',
      logo: '/assets/project-chatocean.png',
      logoStyle: {
        backgroundColor: 'white',
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
          name: 'Node.js',
          path: 'assets/node.png',
        },
        {
          id: 3,
          name: 'Express.js',
          path: '/assets/express.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
        {
          id: 5,
          name: 'Docker',
          path: '/assets/docker.png',
        },
      ],
    },
    {
      title: 'AlgoBox - Algorithm Simulation Tool',
      desc: 'A simulation app that helps in visualising some sorting algorithms and Dijkstra’s algorithm on the custom input provided by user.',
      subdesc:
        '',
      href: 'https://pacifier121.github.io/algo-box/',
      texture: '/textures/project/project-demo-algobox.webm',
      logo: '/assets/project-algobox.png',
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
          name: 'HTML',
          path: 'assets/html.png',
        },
        {
          id: 3,
          name: 'CSS',
          path: '/assets/css.png',
        }
      ],
    },
    {
      title: 'DigitClassifier - ML Model classifying hand-drawn digits from 0-9',
      desc: 'A machine learning project having interactive web interface that classifies a digit drawn with cursor on screen from 0 to 9.',
      subdesc:
        'Has been trained on well known MNIST Digits Dataset',
      href: 'https://digit-classifier-fxd9.onrender.com/',
      texture: '/textures/project/project-demo-digitclassifier.webm',
      logo: '/assets/project-digitclassifier.png',
      logoStyle: {
        backgroundColor: 'transparent',
        background:
          '',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'ScikitLearn',
          path: 'assets/sklearn.png',
        },
        {
          id: 3,
          name: 'Flask',
          path: '/assets/flask.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/js.png',
        },
      ],
    },
    {
      title: 'AirlineManagementSystem - A microservice arch. based backend for Airline Management',
      desc: 'A backend system that can support different features of an airline company. End user should be able to book a flight, query about flights',
      subdesc:
        '',
      href: 'https://github.com/prashantr2/AirlineManagementSystem',
      texture: '/textures/project/coming_soon.mp4',
      logo: '/assets/project-ams.png',
      logoStyle: {
        backgroundColor: '#ff7777',
        background:
          '',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Node.js',
          path: '/assets/node.png',
        },
        {
          id: 2,
          name: 'Express.js',
          path: 'assets/express.png',
        },
        {
          id: 3,
          name: 'MySQL',
          path: '/assets/mysql.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'RabbitMQ',
          path: '/assets/rabbitmq.svg',
        },
      ],
    }
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.4, -4.5, 0] : [0.4, -6, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'ZScaler',
      pos: 'Associate Software Developer Engineer',
      duration: 'Sep 2024 - Present',
      title: "Zscaler is a Cloud Network Security company providing robust solutions to migrate a business' Security needs from on-premise to Cloud easily and effectively.",
      subtitle: "Worked on robust config syncing mechanism of multiple organizations across different clouds",
      icon: '/assets/ZS.D.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'ZScaler',
      pos: 'Engineering Intern',
      duration: 'Jun 2023 - Aug 2024',
      title: "Worked on automating the updation of SSL Certificates and DB migrations on the nodes",
      subtitle: "Had proficient interaction with Linux, PostgreSQL, TCP/IP Stack, Python at an advanced level",
      icon: '/assets/ZS.D.svg',
      animation: 'clapping',
    }
  ];