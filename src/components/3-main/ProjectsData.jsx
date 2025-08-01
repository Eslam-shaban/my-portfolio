import { SiGithub, SiLinkedin } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";

export const contactInfo = [
    {
        contactName: "Email",
        contactIcon: <TbMailFilled size={18} />,
        conactSource: "mailto:eslamshaban170@gmail.com",
        contactValue: "eslam.shaban.dev@gmail.com"
    },
    {
        contactName: "Github",
        contactIcon: <SiGithub size={18} />,
        conactSource: "https://github.com/Eslam-shaban",
        contactValue: "github.com/Eslam-shaban"
    },
    {
        contactName: "Linkedin",
        contactIcon: <SiLinkedin size={18} />,
        conactSource: "https://www.linkedin.com/in/eslam-shaban-170/",
        contactValue: "linkedin.com/in/eslam-shaban-170"
    },
]

export const projectsArr = [
    {
        projectTitle: "Veltrix E-commerce Platform",
        category: ["fullstack", "react"],
        description: "A modern full-stack e-commerce app built with React, Node.js, and Tailwind CSS. Features include product browsing, shopping cart, and a full admin dashboard.",
        imgPath: './Ecommerce_Homepage.jpg',
        url: "",
        github: "https://github.com/Eslam-shaban/mern-ecommerce",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    },
    {
        projectTitle: "Eyego Dashboard",
        category: ["next", "react"],
        description: "Eyego Dashboard is a simple and powerful admin dashboard built with Next.js, Supabase, and Tailwind CSS. It supports authentication, role-based access control (RBAC), data tables, and charts.",
        imgPath: './eyego-dashboard.png',
        url: "#",
        github: "https://github.com/Eslam-shaban/eyego-dashboard-nextjs",
        tech: ["Next.js", "Supabase", "Tailwind CSS", "Shadcn UI", "Recharts.js"]
    },
    {
        projectTitle: "MERN Notes App",
        category: ["fullstack", "react"],
        description: "A full-stack notes-taking application built with the MERN stack and styled with Tailwind CSS. Includes login, create, edit, and delete features.",
        imgPath: './notes.png',
        url: "https://react-notes-app-client.vercel.app/",
        github: "https://github.com/Eslam-shaban/mern-notes-app",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    },
    {
        projectTitle: "YouTube Clone (2024)",
        category: ["react"],
        description: "A responsive YouTube clone built using React, Redux Toolkit, and TypeScript. Integrates with YouTube Data API v3 to fetch and display content dynamically.",
        imgPath: './youtube-logo.jpg',
        url: "https://youtube-clone-2024-p1pwq13f5-eslamshabans-projects.vercel.app/",
        github: "https://github.com/Eslam-shaban/youtube-clone-2024",
        tech: ["React", "Redux Toolkit", "TypeScript", "YouTube Data API"]
    },
    {
        projectTitle: "Strapi + MUI E-commerce Site",
        category: ["react", "fullstack"],
        description: "An e-commerce website powered by React.js, Material UI, and Strapi CMS for seamless product management and beautiful UI design.",
        imgPath: './ecomm-mui.png',
        url: "https://ecommerce-59622.web.app/",
        github: "https://github.com/Eslam-shaban/React-E-commerce-with-Strapi",
        tech: ["React", "Strapi", "Material UI", "Node.js"]
    },
    {
        projectTitle: "Product Preview Card",
        category: ["css"],
        description: "Frontend Mentor challenge to recreate a clean and responsive product preview card using only HTML and CSS.",
        imgPath: './f-mentor-1.jpg',
        url: "https://eslam-product-preview-card.netlify.app/",
        github: "https://github.com/Eslam-shaban/product-preview-card",
        tech: ["HTML", "CSS"]
    }, {
        projectTitle: "FAQ Accordion ",
        category: ["css"],
        description: "Frontend Mentor challenge to recreate a clean and responsive FAQ-Accordion using only HTML, CSSand JavaScript.",
        imgPath: './f-mentor-2.jpg',
        url: "https://eslam-shaban.github.io/faq-accordion/",
        github: "https://github.com/Eslam-shaban/faq-accordion",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        projectTitle: "Bondi Bootstrap Landing Page",
        category: ["libraries"],
        description: "A responsive landing page design using Bootstrap components and utility classes, showcasing layout and styling skills.",
        imgPath: './bootstrap1.png',
        url: "https://eslam-shaban.github.io/bootstap-bondi-1/",
        github: "https://github.com/Eslam-shaban/bootstap-bondi-1",
        tech: ["HTML", "CSS", "Bootstrap"]
    },
    {
        projectTitle: "Bootstrap Template Project",
        category: ["libraries"],
        description: "A basic template design built with Bootstrap to explore responsive layouts and components.",
        imgPath: './bootstrap2.png',
        url: "https://eslam-shaban.github.io/bootstrap-template-2/",
        github: "https://github.com/Eslam-shaban/bootstrap-template-2",
        tech: ["HTML", "CSS", "Bootstrap"]
    },
    {
        projectTitle: "Tailwind Website Template",
        category: ["libraries"],
        description: "A fully responsive website template created with Tailwind CSS, focusing on speed, layout flexibility, and modern design.",
        imgPath: './tailwind-1.png',
        url: "https://eslam-shaban.github.io/tailwind-1/",
        github: "https://github.com/Eslam-shaban/tailwind-1",
        tech: ["HTML", "CSS", "Tailwind CSS"]
    },
    {
        projectTitle: "Leon Design Template",
        category: ["css"],
        description: "A static responsive website made using only HTML and CSS, focusing on grid layout and visual aesthetics.",
        imgPath: './template1.png',
        url: "https://eslam-shaban.github.io/template1/",
        github: "https://github.com/Eslam-shaban/template1",
        tech: ["HTML", "CSS"]
    },
    {
        projectTitle: "Kasper Web Design",
        category: ["css"],
        description: "A template-based website using HTML, CSS, and JavaScript for an engaging and interactive UI design.",
        imgPath: './template2.png',
        url: "https://eslam-shaban.github.io/template2/",
        github: "https://github.com/Eslam-shaban/template2",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        projectTitle: "Elzero Template Design",
        category: ["css"],
        description: "Responsive static website project inspired by Elzero Web School, built using modern CSS layout techniques.",
        imgPath: './template3.png',
        url: "https://eslam-shaban.github.io/template3/",
        github: "https://github.com/Eslam-shaban/template3",
        tech: ["HTML", "CSS"]
    },
    {
        projectTitle: "Admin Dashboard UI",
        category: ["css"],
        description: "A CSS-only dashboard design with cards, charts, and widgets built to mimic modern admin panels.",
        imgPath: './template4.png',
        url: "https://eslam-shaban.github.io/template4/",
        github: "https://github.com/Eslam-shaban/template4",
        tech: ["HTML", "CSS"]
    }
];
