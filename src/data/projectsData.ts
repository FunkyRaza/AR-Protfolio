export interface Project {
    id: string;
    title: string;
    role: string;
    tools: string[];
    description: string;
    fullOverview: string;
    designProcess: string[];
    techStack: string[];
    year: string;
    category: "Fullstack" | "UI/UX Design" | "Frontend" | "Mobile App";
    type: "mobile" | "web";
    mainImage: string;
    showcaseScreens: { title: string; image: string }[];
    gallery: string[];
}

export const projectsData: Project[] = [
    {
        id: "garage-management",
        title: "Garage Management System",
        role: "UI/UX Designer + Frontend Developement",
        tools: ["Figma", "React Native", "TailwindCSS", "Node.js", "Supabase"],
        description: "A mobile application designed for garage owners to manage vehicle services, customer data, and service history efficiently.",
        fullOverview: "The Garage Management System is a robust mobile ecosystem designed to digitize automotive service workflows. It focuses on empowering garage owners with real-time data and customer management tools.",
        designProcess: ["Research", "UX Analysis", "User Flow", "Wireframing", "High Fidelity UI", "Prototype"],
        techStack: ["React Native", "TailwindCSS", "Node.js", "Supabase"],
        year: "2026",
        category: "Mobile App",
        type: "mobile",
        mainImage: "/projects/garage/Dashboard2.png",
        showcaseScreens: [
            { title: "Dashboard", image: "/projects/garage/Dashboard2.png" },
            { title: "Active Jobs", image: "/projects/garage/Active Jobs.png" },
            { title: "Task Summary", image: "/projects/garage/Task .jpg" },
            { title: "Service booking", image: "https://images.unsplash.com/photo-1621943011400-98cc28564020?q=80&w=2070&auto=format&fit=crop" },
            { title: "Customer details", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop" }
        ],
        gallery: [
            "/projects/garage/Dashboard2.png",
            "/projects/garage/Active Jobs.png",
            "/projects/garage/Task .jpg"
        ]
    },
    {
        id: "water-management",
        title: "Water Management System",
        role: "UI/UX Designer + Full Stack Developer",
        tools: ["Figma", "React.js", "TailwindCSS", "Node.js", "Supabase"],
        description: "A web platform designed to monitor water usage, manage water distribution, and provide analytics for better resource management.",
        fullOverview: "A comprehensive B2B SaaS platform engineered for global water distribution, company administration, and real-time logistics. It provides a dual-interface system for global oversight and individual distributors.",
        designProcess: ["Research", "Requirement Analysis", "Wireframing", "UI Design", "Prototype", "Development"],
        techStack: ["React.js", "TailwindCSS", "Node.js", "Supabase"],
        year: "2025",
        category: "Fullstack",
        type: "web",
        mainImage: "/projects/water/water-1.png",
        showcaseScreens: [
            { title: "System Overview", image: "/projects/water/water-1.png" },
            { title: "Company Dashboard", image: "/projects/water/water-2.png" },
            { title: "User Management", image: "/projects/water/water-3.png" },
            { title: "Logistics Analytics", image: "/projects/water/water-1.png" }
        ],
        gallery: [
            "/projects/water/water-1.png",
            "/projects/water/water-2.png",
            "/projects/water/water-3.png"
        ]
    },
    {
        id: "stylesphere",
        title: "StyleSphere",
        role: "UI/UX Designer + Full Stack Developer",
        tools: ["React.js", "MongoDB", "Node.js", "CSS", "Bootstrap"],
        description: "A fashion platform where users can explore fashion products and manage fashion collections.",
        fullOverview: "StyleSphere is an e-commerce ecosystem designed for the modern fashion industry, focusing on minimal aesthetics and a seamless product discovery experience. Final Year College Project.",
        designProcess: ["Research", "Data Modeling", "UI Design", "Implementation", "Testing"],
        techStack: ["React.js", "MongoDB", "Node.js", "Bootstrap"],
        year: "2026",
        category: "Fullstack",
        type: "web",
        mainImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        showcaseScreens: [
            { title: "Product listing", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop" },
            { title: "Product detail page", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop" },
            { title: "User interface screens", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
            { title: "Fashion catalog", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    {
        id: "airbnb-clone",
        title: "Airbnb Clone",
        role: "UI Designer + Developer",
        tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js"],
        description: "A web platform inspired by Airbnb where users can explore property listings and view details.",
        fullOverview: "A full-scale hospitality platform project that deep-dives into property listing management and search systems, following a clean component-driven approach.",
        designProcess: ["UX Component Analysis", "Responsive Design", "UI Implementation", "Search Logic"],
        techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Bootstrap"],
        year: "2025",
        category: "Frontend",
        type: "web",
        mainImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
        showcaseScreens: [
            { title: "Homepage listings", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" },
            { title: "Property detail page", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
            { title: "Booking interface", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" },
            { title: "Search system", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    {
        id: "car-rental",
        title: "Car Rental Platform",
        role: "Full Stack Developer",
        tools: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        description: "A comprehensive web application for managing car rentals, bookings, and fleet tracking.",
        fullOverview: "The Car Rental Platform provides a seamless experience for users to find and book vehicles, while offering administrators a powerful dashboard for managing their fleet and customer interactions.",
        designProcess: ["User Research", "Database Design", "API Development", "Frontend Implementation"],
        techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        year: "2025",
        category: "Fullstack",
        type: "web",
        mainImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
        showcaseScreens: [
            { title: "Vehicle Discovery", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" },
            { title: "Booking Flow", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" },
            { title: "Admin Fleet Manager", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop"
        ]
    }
];
