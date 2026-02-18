// Populate Profile Data
function loadProfile() {
    // Populate header info if elements exist
    // This is optional as most is static, but good for email/links
    const emailBtn = document.getElementById('contact-email');
    if (emailBtn) emailBtn.href = `mailto:${data.profile.email}`;

    // Update footer year/name if needed
    // ...
}

// Populate Experience
// Populate Experience
function loadExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    data.experience.forEach(job => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');

        // Extract Start Year (e.g., "Oct 2024" -> "2024")
        const startYear = job.dates.match(/\d{4}/)?.[0] || job.dates;

        let projectsHtml = '';
        if (job.projects) {
            projectsHtml = `<p class="timeline-projects"><strong>Projects:</strong> ${job.projects}</p>`;
        }

        item.innerHTML = `
            <div class="timeline-year">${startYear}</div>
            <div class="timeline-content">
                <h4 class="timeline-company">${job.company}</h4>
                <h3 class="timeline-role">${job.role}</h3>
                <div class="timeline-desc">${job.description}</div>
                ${projectsHtml}
            </div>
        `;
        timeline.appendChild(item);
    });
}

// Populate Projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    data.featuredProjects.forEach(project => {
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
                    <div class="project-role">${project.role}</div>
                    <div class="project-company">${project.company}</div>
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

    data.skills.forEach(skillSet => {
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

// Carousel Logic
function loadCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    // create slides
    data.videos.forEach(video => {
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
    loadProfile(); // NEW
    loadExperience(); // NEW
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
