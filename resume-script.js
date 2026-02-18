function loadResume() {
    const container = document.querySelector('.resume-container');
    if (!container) return;

    // Clear existing content just in case, though we'll likely remove it from HTML
    container.innerHTML = '';

    // Header
    const header = document.createElement('header');
    header.className = 'resume-header';
    header.innerHTML = `
        <h1 class="name">${data.profile.name}</h1>
        <h2 class="title">${data.profile.role}</h2>
        
        <div class="contact-info">
            <span>${data.profile.location}</span>
            <span class="separator">•</span>
            <span><a href="mailto:${data.profile.email}">${data.profile.email}</a></span>
            <span class="separator">•</span>
            <span>${data.profile.phone}</span>
            <span class="separator">•</span>
            <span><a href="${data.profile.website}" target="_blank">jlea.github.io/portfolio</a></span>
        </div>
    `;
    container.appendChild(header);

    // Summary
    const summarySec = document.createElement('section');
    summarySec.className = 'section summary-section';
    summarySec.innerHTML = `
        <h3 class="section-title">Summary</h3>
        <p>${data.profile.summary}</p>
    `;
    container.appendChild(summarySec);

    // Impact Stats
    if (data.impactStats) {
        const statsSec = document.createElement('section');
        statsSec.className = 'section stats-section';
        // We want a clean row: "11+ Years Experience | 5 Shipped Games | ..."
        // Let's build a pipe-separated list or a flex row.

        const statsList = document.createElement('div');
        statsList.className = 'resume-stats-row';

        data.impactStats.forEach(stat => {
            const statItem = document.createElement('div');
            statItem.className = 'resume-stat-item';
            statItem.innerHTML = `
                <span class="stat-value">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            `;
            statsList.appendChild(statItem);
        });

        statsSec.appendChild(statsList);
        container.appendChild(statsSec);
    }

    // Experience
    const expSec = document.createElement('section');
    expSec.className = 'section experience-section';
    expSec.innerHTML = `<h3 class="section-title">Experience</h3>`;

    data.experience.forEach(job => {
        const entry = document.createElement('div');
        entry.className = 'job-entry';

        // Prepare optional sections
        let projectsHtml = '';
        if (job.projects) {
            projectsHtml = `<p class="projects-list"><strong>Projects:</strong> ${job.projects}</p>`;
        }

        let tasksHtml = '';
        if (job.points && job.points.length > 0) {
            tasksHtml = `<ul class="key-tasks">${job.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
        }

        // Logic for ForwardXP ordering (Projects BEFORE Description)
        // We can check if it's ForwardXP by name or just apply a general rule if needed.
        // The user specifically asked for FXP projects to be above description.
        // Let's genericize: if it has projects, does it go before or after?
        // User asked for "standardized projects listing below the job title/description" INITIALLY, 
        // but then asked for "ForwardXP projects above description" to match other entries?
        // Wait, looking at previous steps: "Moved ForwardXP 'Projects' list above the description to match other entries."
        // So standard is Projects -> Description?
        // Let's look at `data.js`:
        // Vertigo: projects string used.
        // New World: projects string used.
        // FXP: projects string used.
        // PLAYERUNKNOWN: no projects string, just points.

        // Let's render: Header -> Projects (if any) -> Description -> Points

        entry.innerHTML = `
            <div class="job-header">
                <div class="job-title-company">
                    <span class="role">${job.role}</span>
                    <span class="company-separator">|</span>
                    <span class="company">${job.company}</span>
                </div>
                <div class="job-meta">
                    <span class="dates">${job.dates}</span>
                    <span class="location">${job.location}</span>
                </div>
            </div>
            ${projectsHtml}
            ${job.description ? `<p class="job-description">${job.description}</p>` : ''}
            ${tasksHtml}
        `;
        expSec.appendChild(entry);
    });
    container.appendChild(expSec);

    // Skills
    const skillsSec = document.createElement('section');
    skillsSec.className = 'section skills-section';
    skillsSec.innerHTML = `<h3 class="section-title">Technical Skills</h3>`;

    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'skills-grid';

    // keys in data.resumeSkills: engines, languages, tools, specialties
    const labels = {
        engines: "Engines",
        languages: "Languages",
        tools: "Tools",
        specialties: "Specialties"
    };

    for (const [key, value] of Object.entries(data.resumeSkills)) {
        const row = document.createElement('div');
        row.className = 'skill-category';
        row.innerHTML = `
            <span class="skill-label">${labels[key] || key}:</span>
            <span class="skill-list">${value}</span>
        `;
        skillsGrid.appendChild(row);
    }
    skillsSec.appendChild(skillsGrid);
    container.appendChild(skillsSec);

    // Education
    const eduSec = document.createElement('section');
    eduSec.className = 'section education-section';
    eduSec.innerHTML = `
        <h3 class="section-title">Education</h3>
        <div class="education-entry">
            <div class="edu-header">
                <div class="degree-institution">
                    <span class="degree">${data.education.degree}</span>
                    <span class="institution">, ${data.education.institution}</span>
                </div>
                <span class="dates">${data.education.dates}</span>
            </div>
            <p class="honors">${data.education.honors}</p>
        </div>
    `;
    container.appendChild(eduSec);
}

document.addEventListener('DOMContentLoaded', loadResume);
