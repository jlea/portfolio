const data = {
    profile: {
        name: "James Lea-Baran",
        role: "Senior Unreal Engine 5 Developer",
        email: "james.c.lea@gmail.com",
        phone: "(+351) 934 386 385",
        location: "Lisbon, Portugal",
        linkedin: "https://www.linkedin.com/in/james-lea-baran-0050a429",
        tagline: "Building robust multiplayer systems, advanced AI, and immersive gameplay mechanics.",
        summary: "Senior Software Engineer with <strong>11+ years of experience</strong> specializing in <strong>C++ gameplay programming and AI architecture</strong>. A \"designer masquerading as a programmer,\" focusing on the <em>feel</em> of the game, not just the code. Proven track record in building robust multiplayer systems and immersive gameplay mechanics."
    },
    experience: [
        {
            company: "PLAYERUNKNOWN Productions",
            role: "Senior Gameplay Programmer",
            dates: "Oct 2024 - Present",
            location: "Remote",
            projects: "Prologue: Go Way Back!",
            description: "Developing next-gen gameplay systems and prototypes specializing in UE5 C++ architecture.",
            points: [
                "Tetris grid-based inventory logic and gamepad navigation.",
                "Advanced animation systems for climbing and vaulting.",
                "Data-driven item systems and Valheim-style construction systems."
            ]
        },
        {
            company: "ForwardXP",
            role: "Senior Gameplay Programmer",
            dates: "June 2022 - Oct 2024",
            location: "Remote",
            description: "Engineered core gameplay features and optimization for large-scale projects.",
            points: [
                "Developed prototypes including an extraction multiplayer shooter and a single-player survival horror game.",
                "Engineered the 'Towbot' system for Orion Drift, designed for an open-world environment supporting 50+ concurrent clients on Meta Quest 2."
            ],
            projects: "Orion Drift (Meta Quest), Unannounced VR & PC shooters"
        },
        {
            company: "Vertigo Games",
            role: "Senior Gameplay Programmer",
            dates: "Aug 2019 - June 2022",
            location: "Amsterdam, NL",
            projects: "Metro Awakening",
            description: "Primarily working on all stages of development - design, iteration, testing - on a range of prototypes and Metro Awakening.",
            points: [
                "Architected the shipping hands system for VR interaction.",
                "Optimized low-level code for mobile VR hardware constraints.",
                "Developed physics-based hand interactions similar to Boneworks."
            ]
        },
        {
            company: "New World Interactive",
            role: "Principal AI & Gameplay Programmer",
            dates: "May 2016 - July 2019",
            location: "Amsterdam, NL",
            projects: "Insurgency: Sandstorm, Day of Infamy",
            description: "Worked closely with key stakeholders, designers, and the art team to achieve desired results in a collaborative, multi-disciplinary environment.",
            points: [
                "Designed and implemented all enemy AI combatants and cooperative game modes.",
                "Built ground and air vehicle navigation systems.",
                "Handled client/server networking and console (PS4/Xbox) optimization."
            ]
        }
    ],
    featuredProjects: [
        {
            title: "Orion Drift",
            role: "Senior Gameplay Programmer",
            company: "ForwardXP",
            points: [
                "<strong>Towbot System</strong>: Engineered the 'Towbot' system, designed for an open-world environment supporting 50+ concurrent clients on Meta Quest 2.",
                "<strong>Prototyping</strong>: Developed prototypes including an extraction multiplayer shooter and a single-player survival horror game."
            ],
            tech: ["UE5", "VR", "Multiplayer", "Replication", "Meta Quest"],
            link: "https://www.meta.com/en-gb/experiences/orion-drift/7181769438517329",
            image: "images/orion-drift.webp"
        },
        {
            title: "Prologue: Go Way Back!",
            role: "Senior Gameplay Programmer",
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
            title: "Metro Awakening VR",
            role: "Senior Gameplay Programmer",
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
            title: "Insurgency: Sandstorm",
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
            title: "Day of Infamy",
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
        specialties: "AI Architecture, Multiplayer Systems, Physics Simulation, VR Interaction"
    },
    education: {
        degree: "Bachelor of Information Technology",
        institution: "Melbourne Polytechnic",
        dates: "2012 - 2015",
        honors: "Letter of Commendation for Outstanding Academic Achievement"
    },
    videos: [
        {
            id: "rZR88aSsbPA",
            title: "Sandstorm Soldier AI Demo Reel",
            description: "Showcase of the AI behaviors and combat tactics I engineered for Insurgency: Sandstorm."
        },
        {
            id: "zWxUfQrPdVE",
            title: "Voidbound (RTS Project)",
            description: "A failed RTS project I built in my spare time. All systems were made by me and was a great learning experience."
        },
        {
            id: "mh3RprF9MyY",
            title: "Runtime World Generation",
            description: "Runtime world generation on Unreal Engine 5. A great success unifying PCG and the Voxel Plugin over multiplayer."
        },
        {
            id: "F80eSXD_bsU",
            title: "VR Tactical Interaction",
            description: "A VR experiment to work on authentic gun feeling and tactical play."
        },
        {
            id: "rNhZCn_0XLI",
            title: "Godwoken (Mobile Test)",
            description: "A mobile game test I made during COVID to familiarize myself with mobile games and their limitations."
        }
    ]
};
