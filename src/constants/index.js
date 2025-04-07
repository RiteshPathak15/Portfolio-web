const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: "/assets/dataAnalyst.png",
  },
  {
    title: "React Developer",
    icon: "/assets/frontend.png",
  },
  {
    title: "Backend Developer",
    icon: "/assets/backend.png",
  },

];

const technologies = [
  {
    name: "Python",
    icon: "/assets/tech/python.png",
  },
  {
    name: "Sql",
    icon: "/assets/tech/sql.png",
  },
  {
    name: "Excel",
    icon: "/assets/tech/Excel.png",
  },
  {
    name: "Power Bi",
    icon: "/assets/tech/Power-BI-Logo.png",
  },
  {
    name: "HTML 5",
    icon: "/assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "Express JS",
    icon: "/assets/tech/expressjs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "GitHub",
    icon: "/assets/github.png",
  },
];

const tools = [
  {
    name: "VS Code",
    icon: "/assets/tools/vscode.png",
  },
  {
    name: "Jupyter",
    icon: "/assets/tools/Jupyter_logo.png",
  },
  {
    name: "ChatGPT",
    icon: "/assets/tools/ChatGPT.png",
  },
  {
    name: "Chrome",
    icon: "/assets/tools/chrome.png",
  },
  {
    name: "Mongodb Compass",
    icon: "/assets/tools/mongodbCompass.png",
  },
  {
    name: "Postman",
    icon: "/assets/tools/postman.png",
  },

];

const experiences = [
  {
    title: "Pillai College of Arts, Commerce & Science (Autonomous)",
    institution_name: "Pillai College of Arts, Commerce & Science (Autonomous)",
    icon: "/assets/pcasc.jpeg",
    iconBg: "#383E56",
    date:"Bachelor of Science in Information Technology (BSc IT)-(Completed)\n 2022-2025",
    points: [
      "Gained in-depth knowledge of programming, databases, and software development.",
      "Worked on projects involving web development, data structures, and algorithms.",
      "Developed expertise in various technologies relevant to the IT industry.",
      "Enhanced problem-solving and teamwork skills through hands-on assignments.",
    ],
  },
  {
    title: "KLE (Karnatak Lingayat Education Society)(Science)",
    institution_name: "KLE (Karnatak Lingayat Education Society)",
    icon: "/assets/kle.jpg",
    iconBg: "white",
    date: "Higher Secondary Education -(11th - 12th)\n 2020-2022",
    points: [
      "Studied core science subjects, including Mathematics, Physics, and Chemistry.",
      "Built a strong foundation in logical reasoning and analytical problem-solving.",
      "Engaged in practical experiments to enhance scientific understanding.",
    ],
  },
  {
    title: "St. Joseph High School",
    institution_name: "St. Joseph High School",
    icon: "/assets/rayan joseph.png",
    iconBg: "#383E56",
    date: "Secondary Education-(Jr - 10th)\n 2008-2020",
    points: [
      "Completed foundational education with a strong academic record.",
      "Developed problem-solving and analytical thinking skills.",
    ],
  },
];

const projects = [
  // Data Analyst Projects
  {
    name: "Powerbi dashboard of Financial-Data",
    description:
      "An interactive Financial Dashboard built with Power BI to analyze sales, profit margins, and costs. It includes visualizations like total sales, sales by country, discount band analysis, top-selling products, and segment-wise sales trends. The dashboard uses an Excel dataset and features dynamic filters for in-depth insights.",
    tags: [
      {
        name: "PowerBi",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "DAX Query",
        color: "pink-text-gradient",
      },
    ],
    image:
      "/assets/financial_dashboard.png",
    alt: "E-Commerce",
    source_code_link: "https://github.com/RiteshPathak15/Powerbi-dashboard-of-Financial-Data",
    live_link: "https://app.powerbi.com/links/MhNUfIfkxN?ctid=aa74b0a8-dc31-4e56-b78a-68531b73a97b&pbi_source=linkShare",
    category: "Data Analyst",
  },
  
  {
    name: "Data Visualization Cheat Sheet & Notebooks",
    description:
      "Developed a comprehensive data visualization cheat sheet and Jupyter notebooks using Matplotlib, Seaborn, and Plotly.Created interactive and static visualizations, including heatmaps, scatter plots, 3D plots, and statistical visualizations.",
      tags: [
        {
          name: "Jupyter Notebook",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "Seaborn",
          color: "pink-text-gradient",
        },
        {
          name: "Plotly",
          color: "blue-text-gradient",
        },
      ],
    image:
      "/assets/dataVisualization.png",
    alt: "Data Visualization Cheat Sheet",
    source_code_link: "https://github.com/RiteshPathak15/Data-Visualization-cheat-sheet",
    // live_link: "https://app.powerbi.com/links/MhNUfIfkxN?ctid=aa74b0a8-dc31-4e56-b78a-68531b73a97b&pbi_source=linkShare",
    category: "Data Analyst",
  },
  
  {
    name: "Insights into Olympic Athletes and Data Science Salaries",
    description:
      "A dual visualization project analyzing athlete performance and data science salaries. Includes interactive Jupyter Notebooks for exploring Olympic athlete data and global data science salary trends. Built with Python, Pandas, Matplotlib, and Seaborn for data analysis and visualization",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "DataStorytelling",
          color: "green-text-gradient",
        },
        {
          name: "DataVisualization ",
          color: "pink-text-gradient",
        },
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
      ],
    image:
      "/assets/datavis.png",
    alt: "Data Visualization of athletes and DS salaries",
    source_code_link: "https://github.com/RiteshPathak15/Data-Visualization-cheat-sheet",
    // live_link: "https://app.powerbi.com/links/MhNUfIfkxN?ctid=aa74b0a8-dc31-4e56-b78a-68531b73a97b&pbi_source=linkShare",
    category: "Data Analyst",
  },
  

  // Web Development Projects
  {
    name: "Inventory Management System",
    description:
      "An efficient and user-friendly inventory management system for hardware shops. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this application helps manage inventory levels, track sales, and streamline operations.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node mailer",
        color: "blue-text-gradient",
      },
    ],
    image:
      "/assets/Inventory.png",
    alt: "Inventory Management",

    source_code_link: "https://github.com/RiteshPathak15/Inventory-Management-System--MERN-Stack",
    // live_link: "https://inventory-management-system-umber-one.vercel.app/login",
    category: "MERN Stack",
  },
  {
    name: "Feedback System",
    description:
      "An interactive platform where users can review and rate products, share feedback, and engage with brands. Features in development include product listings, feedback submissions with ratings and media, user profiles, and social interactions. Built with the MERN stack to ensure scalability and responsiveness.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },

    ],
    image: '/assets/feedback.png',
    source_code_link: "https://github.com/RiteshPathak15/Feedback-Platform",
    // live_link: "https://feedback-platform.onrender.com/",
    category: "MERN Stack",
   },


];

export {
  navLinks,
  services,
  technologies,
  experiences,
  
  projects,
  tools,
};
