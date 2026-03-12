export interface UserPersona {
    name: string;
    role: string;
    needs: string[];
    image: string;
}

export interface CaseStudy {
    introduction: string;
    problemStatement: string;
    research: string;
    userPersonas: UserPersona[];
    userFlow: { description: string; image: string };
    wireframes: { description: string; image: string };
    uiDesign: { description: string; images: string[] };
    prototype: string;
    development: string;
    finalOutcome: string;
}

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
    caseStudy?: CaseStudy;
}

export const projectsData: Project[] = [
    {
        id: "garage-management",
        title: "Garage Management System",
        role: "UI/UX Designer & Frontend Developer",
        tools: ["Figma", "React Native", "Tailwind CSS", "Node.js", "Supabase"],
        description: "A digital platform designed to help garage owners manage daily operations such as vehicle service tracking, technician assignments, and task management.",
        fullOverview: "The Garage Management System is a robust mobile ecosystem designed to digitize automotive service workflows. It focuses on empowering garage owners with real-time data and customer management tools. By integrating service tracking with technician performance metrics, the system provides a holistic view of the garage's health and operational efficiency.",
        designProcess: ["Research", "UX Analysis", "User Flow", "Wireframing", "High Fidelity UI", "Prototype"],
        techStack: ["React Native", "Tailwind CSS", "Node.js", "Supabase"],
        year: "2026",
        category: "Mobile App",
        type: "mobile",
        mainImage: "/projects/garage/Dashboard2.png",
        showcaseScreens: [
            { title: "Dashboard", image: "/projects/garage/Dashboard2.png" },
            { title: "Active Jobs", image: "/projects/garage/Active Jobs.png" },
            { title: "Task Summary", image: "/projects/garage/Task .jpg" }
        ],
        gallery: [
            "/projects/garage/Dashboard2.png",
            "/projects/garage/Active Jobs.png",
            "/projects/garage/Task .jpg"
        ],
        caseStudy: {
            introduction: "The Garage Management System is a comprehensive mobile solution designed to streamline the complex operations of modern automotive service centers. The goal was to create a unified platform that bridges the gap between garage owners, technicians, and customers through real-time data and intuitive interfaces.",
            problemStatement: "Many garage owners struggle with manual service tracking, leading to mismanaged technician schedules, lost service records, and poor customer communication. The lack of a centralized system makes it difficult to track vehicle progress and technician efficiency, resulting in operational bottlenecks.",
            research: "I conducted semi-structured interviews and on-site observations at three local garages. Key findings revealed that technicians needed a quick way to update task status on the go, while owners required high-level analytics on shop throughput and resource allocation. User journey mapping helped identify friction points in the service handoff process.",
            userPersonas: [
                {
                    name: "Rajesh Kumar",
                    role: "Garage Owner",
                    needs: ["Real-time overview of all active jobs", "Technician performance tracking", "Automated customer service records"],
                    image: "/projects/garage/research.png"
                },
                {
                    name: "Amit Singh",
                    role: "Senior Technician",
                    needs: ["Clear daily task lists", "Easy vehicle history access", "Quick status update tools"],
                    image: "/projects/garage/research.png"
                }
            ],
            userFlow: {
                description: "The user flow was optimized for speed. From the initial login, an owner can immediately see a 'Shop Health' dashboard, while a technician is presented with 'My Tasks'. The workflow guides the user from vehicle intake to final delivery with minimal taps.",
                image: "/projects/garage/wireframes.png"
            },
            wireframes: {
                description: "I created low-fidelity wireframes in Figma to establish the information hierarchy. The focus was on making the core actions (like 'Add Job' or 'Update Status') prominent and easily accessible with one hand, considering technicians might be using the app in a busy environment.",
                image: "/projects/garage/wireframes.png"
            },
            uiDesign: {
                description: "The high-fidelity UI adopts a 'Dark-Industrial' aesthetic, chosen for its high contrast and professional feel. Bold typography and clear color-coded status indicators ensure readability even in workshop lighting conditions.",
                images: ["/projects/garage/Dashboard2.png", "/projects/garage/Active Jobs.png"]
            },
            prototype: "Using Figma's advanced prototyping features, I built interactive flows that simulated the entire service lifecycle. This allowed for rapid testing of transition timings and gesture-based interactions, ensuring the app felt snappy and responsive.",
            development: "The frontend was implemented using React Native for a native experience on both iOS and Android. Tailwind CSS (via NativeWind) was used for styling to maintain design consistency. The backend relies on Node.js and Supabase for real-time data synchronization and secure customer data storage.",
            finalOutcome: "The system successfully digitized over 90% of manual entries in pilot testing. Garage owners reported a 25% increase in technician productivity due to clearer task assignments and reduced administrative overhead. The streamlined communication leads to higher customer satisfaction and trust."
        }
    },
    {
        id: "water-management",
        title: "Water Management System",
        role: "UI/UX Designer & Frontend Developer",
        tools: ["Figma", "React.js", "Tailwind CSS", "Node.js", "Supabase"],
        description: "A platform designed to manage water jar distribution, customer records, and delivery operations efficiently.",
        fullOverview: "A comprehensive B2B SaaS platform engineered for global water distribution, company administration, and real-time logistics. It provides a dual-interface system for global oversight and individual distributors, ensuring seamless resource management across scales.",
        designProcess: ["Research", "Requirement Analysis", "Wireframing", "UI Design", "Prototype", "Development"],
        techStack: ["React.js", "Tailwind CSS", "Node.js", "Supabase"],
        year: "2025",
        category: "Fullstack",
        type: "web",
        mainImage: "/projects/water/water-1.png",
        showcaseScreens: [
            { title: "System Overview", image: "/projects/water/water-1.png" },
            { title: "Company Dashboard", image: "/projects/water/water-2.png" },
            { title: "User Management", image: "/projects/water/water-3.png" }
        ],
        gallery: [
            "/projects/water/water-1.png",
            "/projects/water/water-2.png",
            "/projects/water/water-3.png"
        ],
        caseStudy: {
            introduction: "The Water Management System is a specialized ERP solution designed to optimize the logistically intensive businesses of water jar distribution. The platform's main goal is to provide end-to-end visibility from the bottling plant to the customer's doorstep.",
            problemStatement: "Water suppliers often face significant losses due to unmanaged jar returns and manual delivery tracking. Relying on paper-based records leads to billing errors, inefficient routes, and a lack of real-time inventory data, which hampers scalability.",
            research: "My research involved shadowing delivery drivers and interviewing distribution managers. I discovered that 'jar leakage' (lost physical inventory) was the biggest pain point. The research highlighted a need for a mobile-first delivery interface paired with a powerful desktop administrative dashboard.",
            userPersonas: [
                {
                    name: "Suresh Mehra",
                    role: "Distribution Manager",
                    needs: ["Real-time inventory levels", "Customer billing automation", "Distribution route optimization"],
                    image: "/projects/water/research.png"
                },
                {
                    name: "Vikram Dev",
                    role: "Delivery Driver",
                    needs: ["Mobile delivery checklist", "Dynamic route map", "Instant customer payment logging"],
                    image: "/projects/water/research.png"
                }
            ],
            userFlow: {
                description: "The system manages three primary flows: Customer Onboarding, Order Orchestration, and Last-Mile Delivery. Each flow is designed to ensure data integrity, especially during physical jar handovers where digital confirmation is required.",
                image: "/projects/water/wireframes.png"
            },
            wireframes: {
                description: "Low-fidelity wireframes focused on data density and dashboard layouts. It was crucial to display a large amount of customer and inventory information without overwhelming the user, leading to a modular card-based interface design.",
                image: "/projects/water/wireframes.png"
            },
            uiDesign: {
                description: "The high-fidelity design uses a clean, 'Water-themed' palette with various shades of blue and white to evoke trust and clarity. A custom icon set was developed for different water products and delivery statuses for quick visual scanning.",
                images: ["/projects/water/water-1.png", "/projects/water/water-2.png"]
            },
            prototype: "Interactive prototypes were focused on the 'Delivery Confirmation' flow. I tested various UI patterns for scanning QR codes on jars versus manual entry to find the most efficient method for drivers in the field.",
            development: "The frontend was developed using React.js and Tailwind CSS for a highly responsive web interface. I contributed 25% of the frontend development, specifically focusing on the complex dashboard components and data visualizations. The backend is powered by Node.js and Supabase.",
            finalOutcome: "The implementation led to a 15% reduction in lost inventory and a 30% improvement in delivery speed through route optimization. The automated billing system reduced human errors by 40%, significantly improving the cash flow for distribution businesses."
        }
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
