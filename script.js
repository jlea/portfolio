// Project Data
const projects = [
    {
        title: "TROPPO (Active Development)",
        role: "Solo Developer",
        company: "Private Development",
        points: [
            "A high-fidelity tactical shooter in UE5.",
            "<strong>Infinite Scalable Worlds</strong>: Unified PCG and Voxel Plugin to generate scalable infinite worlds at runtime.",
            "<strong>Advanced AI Ecosystem</strong>: Architected dynamic squad coordination and camp spawning systems driven by Utility AI.",
            "<strong>Replication-First Inventory</strong>: Engineered a complex weight-based inventory system with recursive containers, optimized for high-volume network replication."
        ],
        tech: ["UE5 C++", "PCG Framework", "AI Architecture", "Voxel Plugin", "Replication"],
        link: "#",
        image: null // Private project
    },
    {
        title: "Prologue: Go Way Back!",
        role: "Senior Software Engineer",
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
        role: "Senior Programmer",
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
        role: "Lead AI & Gameplay Programmer",
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
];

// Skills Data
const skills = [
    { category: "Core", items: ["C++", "Unreal Engine 5", "Blueprints", "Object-Oriented Programming"] },
    { category: "Systems", items: ["Multiplayer Replication", "Gameplay Abilities (GAS)", "AI Logic (Behavior Trees/EQS)", "Inventory Systems"] },
    { category: "Professional", items: ["Remote-Native Reliability", "Bridge Between Art & Code", "Empathetic Collaboration", "Technical Leadership"] },
    { category: "Tools", items: ["Perforce", "Git", "Visual Studio", "RenderDoc"] }
];

// Populate Projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Add image if available
        let imageHtml = '';
        if (project.image) {
            imageHtml = `<div class="project-image"><img src="${project.image}" alt="${project.title}"></div>`;
            card.querySelector('.project-tech')?.style.setProperty('margin-top', '1rem'); // Reset margin if image present

            // Make whole card clickable if link exists
            if (project.link && project.link !== "#") {
                card.style.cursor = "pointer";
                card.onclick = () => window.open(project.link, '_blank');
            }
        }

        const pointsHtml = project.points.map(p => `<li>${p}</li>`).join('');
        const techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        card.innerHTML = `
            ${imageHtml}
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-meta">
                    <span class="project-role">${project.role}</span>
                    <span class="project-company">${project.company}</span>
                </div>
                <hr class="project-divider">
                <ul class="project-points">
                    ${pointsHtml}
                </ul>
                <div class="project-tech">${techHtml}</div>
            </div>
        `;
        projectGrid.appendChild(card);
    });
}

// Populate Skills
function loadSkills() {
    const skillsWrapper = document.querySelector('.skills-wrapper');
    if (!skillsWrapper) return;

    skills.forEach(skillSet => {
        const group = document.createElement('div');
        group.classList.add('skill-group');

        const itemsHtml = skillSet.items.map(item => `<span class="skill-item">${item}</span>`).join('');

        group.innerHTML = `
            <h3>${skillSet.category}</h3>
            <div class="skill-list">${itemsHtml}</div>
        `;
        skillsWrapper.appendChild(group);
    });
}

// Glitch Effect - CSS handled
// function initGlitch() {}

// Video Data (Placeholders)
const videos = [
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
];

// Carousel Logic
function loadCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    // create slides
    videos.forEach(video => {
        const slide = document.createElement('li');
        slide.classList.add('carousel-slide');

        // Using strict-origin-when-cross-origin for better privacy/security defaults
        slide.innerHTML = `
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.id}" 
                    title="${video.title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="carousel-caption">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;

        track.appendChild(slide);
    });

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    if (slides.length === 0) return;

    let currentIndex = 0;

    function updateSlidePosition() {
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Loop to end
        }
        updateSlidePosition();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    loadCarousel();
    initHeroAnimation();
});

// Hero Background Animation (Grid/Particles)
function initHeroAnimation() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    // Create Canvas
    const canvas = document.createElement('canvas');
    canvas.classList.add('hero-canvas');
    heroSection.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Resize Handler
    function resize() {
        width = canvas.width = heroSection.offsetWidth;
        height = canvas.height = heroSection.offsetHeight;
        initParticles();
    }

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 123, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.floor(width * height / 15000); // Density based on area
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw Grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 50;

        // Vertical lines
        for (let x = 0; x <= width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y <= height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw Particles & Connections
        particles.forEach(p => {
            p.update();
            p.draw();

            // Connect nearby particles
            particles.forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx.strokeStyle = `rgba(0, 123, 255, ${0.1 * (1 - dist / 100)})`;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}
