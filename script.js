// --- Tab Navigation System for vCard Layout ---
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 1. Remove active class from all links
                navLinks.forEach(nav => nav.classList.remove('active'));
                
                // 2. Add active class to clicked link
                this.classList.add('active');
                
                // 3. Hide all sections
                contentSections.forEach(section => section.classList.remove('active'));
                
                // 4. Show target section
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                    // Scroll to top of main content on mobile
                    if (window.innerWidth <= 1024) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }
    });
});

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
function loadExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    data.experience.forEach(job => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');

        // Extract Start Year (e.g., "Oct 2024" -> "2024")
        const startYear = job.dates.match(/\d{4}/)?.[0] || job.dates;

        let projectsHtml = '';
        let imagesHtml = '';

        if (job.projects) {
            projectsHtml = `<p class="timeline-projects"><strong>Projects:</strong> ${job.projects}</p>`;
            
            // Look up matching project images
            const matchedImages = [];
            data.featuredProjects.forEach(fp => {
                // simple fuzzy match: check if featured project title is in the job.projects string
                if (job.projects.toLowerCase().includes(fp.title.toLowerCase().replace(' vr', ''))) {
                    if (fp.image) matchedImages.push({ img: fp.image, link: fp.link, date: fp.releaseDate });
                }
            });

            if (matchedImages.length > 0) {
                const imgTags = matchedImages.map(proj => `
                    <div class="thumbnail-wrapper">
                        <a href="${proj.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${proj.img}" alt="Project Thumbnail" class="timeline-thumbnail">
                            <span class="date-overlay">${proj.date}</span>
                        </a>
                    </div>
                `).join('');
                imagesHtml = `<div class="timeline-thumbnails">${imgTags}</div>`;
            }
        }

        item.innerHTML = `
            <div class="timeline-year">${startYear}</div>
            <div class="timeline-content">
                <h4 class="timeline-company">${job.company}</h4>
                <h3 class="timeline-role">${job.role}</h3>
                ${projectsHtml}
                ${imagesHtml}
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
                <div class="project-header" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
                    <h3>${project.title}</h3>
                    <span class="project-tag-date">${project.releaseDate}</span>
                </div>
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

// Populate Stats
function loadStats() {
    const statsGrid = document.querySelector('.stats-grid');
    if (!statsGrid || !data.impactStats) return;

    data.impactStats.forEach(stat => {
        const item = document.createElement('div');
        item.classList.add('stat-item');

        const detailHtml = stat.detail ? `<div class="stat-detail">${stat.detail}</div>` : '';

        item.innerHTML = `
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
            ${detailHtml}
        `;
        statsGrid.appendChild(item);
    });
}

// Glitch Effect - CSS handled

// Media Showcase Logic
function loadMediaShowcase() {
    const container = document.getElementById('media-showcase');
    if (!container || !data.media) return;

    // Group media by category
    const categories = {};
    data.media.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    // Define category order
    const categoryOrder = ['Featured', 'Reels', 'WIP & Experiments'];

    categoryOrder.forEach(catName => {
        if (!categories[catName]) return;

        const group = document.createElement('div');
        group.className = 'media-category-group';

        const title = document.createElement('h3');
        title.className = 'media-category-title';
        title.textContent = catName;
        group.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'media-grid';

        categories[catName].forEach(item => {
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';
            if (item.category === 'Featured') {
                mediaItem.classList.add('media-featured');
            }

            let mediaHtml = '';
            if (item.type === 'video') {
                mediaHtml = `
                    <div class="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/${item.id}" 
                            title="${item.title}" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            } else if (item.type === 'image') {
                mediaHtml = `
                    <div class="image-wrapper">
                        <img src="${item.url}" alt="${item.title}">
                    </div>
                `;
            }

            mediaItem.innerHTML = `
                ${mediaHtml}
                <div class="media-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;

            grid.appendChild(mediaItem);
        });

        group.appendChild(grid);
        container.appendChild(group);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadStats();
    loadExperience();
    loadProjects();
    loadSkills();
    loadMediaShowcase(); // UPDATED
    initHeroAnimation();
    initScrollAnimations();
});

// Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

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
