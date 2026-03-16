const data = {
    profile: {
        name: "James Lea-Baran",
        role: "Senior Gameplay Engineer",
        email: "james.c.lea@gmail.com",
        phone: "(+351) 934 386 385",
        location: "Lisbon, Portugal",
        linkedin: "https://www.linkedin.com/in/james-lea-baran-0050a429",
        website: "https://jlb.dev",
        tagline: "Building robust multiplayer systems, advanced AI, and immersive gameplay mechanics.",
        summary: "Senior Gameplay Engineer with <strong>11+ years of experience</strong> specializing in C++ gameplay programming and game AI architecture. I’ve often been described as a “designer masquerading as a programmer,” focusing on the <em>feel</em> of the game, not just the code. Proven track record in building robust multiplayer systems and immersive gameplay mechanics."
    },
    experience: [
        {
            company: "PLAYERUNKNOWN Productions",
            role: "Senior Gameplay Engineer",
            dates: "Oct 2024 - Mar 2026",
            location: "Remote",
            projects: "Prologue: Go Way Back!",
            description: "Pushing boundaries in large-scale environment tech. I build core survival systems, grid inventory, and advanced animation sets for a massive open-world setting.",
            points: [
                "Tetris grid-based inventory logic and gamepad navigation.",
                "Advanced animation systems for climbing and vaulting.",
                "Data-driven item systems and Valheim-style construction systems."
            ]
        },
        {
            company: "ForwardXP",
            role: "Senior Gameplay Engineer",
            dates: "June 2022 - Oct 2024",
            location: "Remote",
            description: "A mix of startup energy and AAA structure. Focused on high-velocity multiplayer prototyping, specifically extraction shooters, while collaborating across timezones with partners like Another Axiom.",
            points: [
                "Developed prototypes including an extraction multiplayer shooter and a single-player survival horror game.",
                "Engineered the ‘Towbot’ system for Orion Drift, designed for an open-world environment supporting 50+ concurrent clients on Meta Quest 2."
            ],
            projects: "Please, Don't Touch Anything VR, Orion Drift (Meta Quest 2), Unannounced multiplayer shooters"
        },
        {
            company: "Vertigo Games",
            role: "Senior Gameplay Engineer",
            dates: "Aug 2019 - June 2022",
            location: "Amsterdam, NL",
            projects: "Metro Awakening",
            description: "Operated in a structured AAA environment with high procedural formality. Worked directly with Meta to build physics-driven hand interactions and core VR systems for titles like Metro Awakening.",
            points: [
                "Optimized low-level code for mobile VR hardware constraints (forward rendering, tight GPU/CPU budgets).",
                "Developed physics-based hand interactions similar to Boneworks for immersive interaction with the world."
            ]
        },
        {
            company: "New World Interactive",
            role: "Principal AI & Gameplay Programmer",
            dates: "May 2016 - July 2019",
            location: "Amsterdam, NL",
            projects: "Insurgency: Sandstorm, Day of Infamy",
            description: "Built the AI and gameplay foundation as the studio scaled from a mod team to a principal-led studio. Sole architect for all enemy AI and cooperative modes in Insurgency: Sandstorm and Day of Infamy.",
            points: [
                "Designed and implemented all enemy AI combatants and cooperative game modes.",
                "Built ground and air vehicle navigation systems.",
                "Handled client/server networking and console (PS4/Xbox) optimization."
            ]
        }
    ],
    featuredProjects: [
        {
            title: "Insurgency: Sandstorm",
            releaseDate: "2018",
            role: "Principal AI & Gameplay Programmer",
            company: "New World Interactive",
            points: [
                "<strong>AI Architecture</strong>: Sole architect for all enemy AI combatants and their behaviors.",
                "<strong>Coop Game Logic</strong>: Designed and implemented the cooperative game modes driving the AI.",
                "<strong>Gameplay & Prototyping</strong>: Prototyped core gamemode systems and mechanics.",
                "<strong>Vehicle Systems</strong>: Built navigation systems (ground & air), including obstacle avoidance and convoy logic."
            ],
            tech: ["UE4", "AI Architecture", "Vehicle Physics", "Multi-Million Seller"],
            link: "https://store.steampowered.com/app/581320/Insurgency_Sandstorm/",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/581320/header.jpg"
        },
        {
            title: "Metro Awakening VR",
            releaseDate: "2024",
            role: "Senior Gameplay Engineer",
            company: "Vertigo Games",
            points: [
                "<strong>VR Interaction</strong>: Architected the player hand interaction system, ensuring physical presence and immersive object manipulation.",
                "<strong>Optimization</strong>: Optimized low-level gameplay systems for Oculus Quest hardware constraints."
            ],
            tech: ["VR", "Oculus Quest", "Physics Interaction", "Optimization"],
            link: "https://store.steampowered.com/app/2669410/Metro_Awakening/",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/2669410/header.jpg"
        },
        {
            title: "Prologue: Go Way Back!",
            releaseDate: "2026",
            role: "Senior Gameplay Engineer",
            company: "PLAYERUNKNOWN Productions",
            points: [
                "<strong>Inventory System</strong>: Implemented the core inventory management system.",
                "<strong>Locomotion & Animation</strong>: Integrated ALS and built complex animation systems.",
                "<strong>Gameplay Prototyping</strong>: Prototyped key features including building and item interaction."
            ],
            tech: ["UE5", "Survival Systems", "Open World", "ALS"],
            link: "https://store.steampowered.com/app/2943740/prologue/",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/2943740/header.jpg"
        },
        {
            title: "Orion Drift",
            releaseDate: "2025",
            role: "Senior Gameplay Engineer",
            company: "ForwardXP",
            points: [
                "<strong>Towbot System</strong>: Engineered the ‘Towbot’ system, designed for an open-world environment supporting 50+ concurrent clients on Meta Quest 2.",
                "<strong>Prototyping</strong>: Developed prototypes including an extraction multiplayer shooter and a single-player survival horror game."
            ],
            tech: ["UE5", "VR", "Multiplayer", "Replication", "Meta Quest"],
            link: "https://www.meta.com/en-gb/experiences/orion-drift/7181769438517329",
            image: "images/orion-drift.webp"
        },
        {
            title: "Please, Don't Touch Anything VR",
            releaseDate: "2023",
            role: "Senior Gameplay Engineer",
            company: "ForwardXP",
            points: [
                "<strong>Gameplay Systems</strong>: Implementation of core interaction mechanics and puzzle logic for the VR adaptation.",
                "<strong>Multi-Platform Support</strong>: Ensured consistent gameplay feeling across various VR headsets and controllers."
            ],
            tech: ["UE4", "VR", "Puzzle Systems", "Interaction Design"],
            link: "https://www.meta.com/experiences/please-dont-touch-anything/2706567592751319/",
            image: "images/pdta.webp"
        },
        {
            title: "Day of Infamy",
            releaseDate: "2017",
            role: "Gameplay Programmer",
            company: "New World Interactive",
            points: [
                "<strong>Core Gameplay</strong>: Responsible for core gameplay systems and fire-support mechanics.",
                "<strong>Cooperative Modes</strong>: Designed and implemented cooperative game modes.",
                "<strong>Networking & Optimization</strong>: Handled client/server networking and console (PS4/Xbox) optimization."
            ],
            tech: ["Source Engine", "Networking", "Console Optimization"],
            link: "https://store.steampowered.com/app/447820/Day_of_Infamy/",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/447820/header.jpg"
        }
    ],
    skills: [
        { category: "Core", items: ["C++", "Unreal Engine 5", "Blueprints", "Object-Oriented Programming"] },
        { category: "Systems", items: ["Multiplayer Replication", "Gameplay Abilities (GAS)", "AI Logic (Behavior Trees/EQS)", "Inventory Systems"] },
        { category: "Professional", items: ["Remote-Native Reliability", "Bridge Between Art & Code", "Empathetic Collaboration", "Technical Leadership"] },
        { category: "Tools", items: ["Perforce", "Git", "Visual Studio", "RenderDoc"] }
    ],
    resumeSkills: {
        engines: "Unreal Engine 5, Unreal Engine 4, CryEngine 3, Source Engine",
        languages: "C++, C# (.NET), Python, CSS, HTML, PHP",
        tools: "Perforce, Git, SVN, Visual Studio, Jira",
        specialties: "Game AI Architecture, Multiplayer Systems, Physics Simulation, VR Interaction, PCG, Voxels, Profiling & Optimization"
    },
    education: {
        degree: "Bachelor of Information Technology",
        institution: "Melbourne Polytechnic",
        dates: "2012 - 2015",
        honors: "Letter of Commendation for Outstanding Academic Achievement"
    },
    media: [
        {
            id: "WhsjIvqN7-I",
            type: "video",
            category: "Featured",
            title: "TROPPO - Survival Coop Pitch",
            description: "Valheim meets Insurgency. Procedurally generated islands roguelike experience."
        },
        {
            id: "rZR88aSsbPA",
            type: "video",
            category: "Reels",
            title: "Sandstorm Soldier AI Demo Reel",
            description: "Showcase of the AI behaviors and combat tactics I engineered for Insurgency: Sandstorm."
        },
        {
            id: "zWxUfQrPdVE",
            type: "video",
            category: "Reels",
            title: "Voidbound (RTS Project)",
            description: "A failed RTS project I built in my spare time. All systems were made by me and was a great learning experience."
        },
        {
            id: "mh3RprF9MyY",
            type: "video",
            category: "WIP & Experiments",
            title: "Runtime World Generation",
            description: "Runtime world generation on Unreal Engine 5. A great success unifying PCG and the Voxel Plugin over multiplayer."
        },
        {
            id: "F80eSXD_bsU",
            type: "video",
            category: "WIP & Experiments",
            title: "VR Tactical Interaction",
            description: "A VR experiment to work on authentic gun feeling and tactical play."
        },
        {
            id: "rNhZCn_0XLI",
            type: "video",
            category: "Reels",
            title: "Godwoken (Mobile Test)",
            description: "A mobile game test I made during COVID to familiarize myself with mobile games and their limitations."
        },
        {
            id: "iLQ0xm_mSpk",
            type: "video",
            category: "WIP & Experiments",
            title: "Wheel Surface FX",
            description: "Procedural wheel surface effects for vehicle tech exploration."
        },
        {
            id: "uPO04hJpK_Y",
            type: "video",
            category: "WIP & Experiments",
            title: "Logistics & Transport",
            description: "A demand-driven resource gathering system, similar to Factorio or Transport Fever."
        },
        {
            id: "MLUUjD5iARU",
            type: "video",
            category: "WIP & Experiments",
            title: "Tank Dynamic Destruction",
            description: "Dynamic mesh-based destruction experiments using UE4 fracture systems."
        },
        {
            id: "yYskEzi6b48",
            type: "video",
            category: "WIP & Experiments",
            title: "Helicopter crash physics",
            description: "Physically simulated helicopter crash physics with rotor inertia and persistent debris."
        },
        {
            id: "5IYc7zCmxKI",
            type: "video",
            category: "WIP & Experiments",
            title: "Thumbnail Generator",
            description: "Automating asset thumbnail generation for high-volume item systems."
        }
    ],
    impactStats: [
        { value: "6M+", label: "Players Reached" },
        { value: "11+", label: "Years Experience" },
        { value: "6", label: "Shipped Games" },
        { value: "5", label: "Platforms", detail: "Xbox, PlayStation, PC, Steam Deck, Oculus Quest" }
    ]
};
