import { projects } from './projectsData.js';

const projectsList = document.getElementById('projects-list');

if (projectsList) {
  const projectCards = projects.map((project) => {
    const toolTags = project.tools
      .map((tool) => `<span class="project-tool">${tool}</span>`)
      .join('');

    const mediumButton = project.links.medium
      ? `<a href="${project.links.medium}" class="project-link-btn" target="_blank" rel="noopener noreferrer">Medium</a>`
      : '';

    return `
      <article class="project-card reveal-text">
        <a href="/project.html?slug=${project.slug}" class="project-card-media">
          <img src="${project.image}" alt="${project.title}">
        </a>
        <div class="project-card-body">
          <a href="/project.html?slug=${project.slug}" class="project-title-link">${project.title}</a>
          <p class="project-timeline">${project.timeline}</p>
          <div class="project-tools">${toolTags}</div>
          <p class="project-summary">${project.summary}</p>
          <div class="project-links">
            <a href="${project.links.dashboard}" class="project-link-btn" target="_blank" rel="noopener noreferrer">View Dashboard</a>
            <a href="${project.links.github}" class="project-link-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            ${mediumButton}
          </div>
        </div>
      </article>
    `;
  }).join('');

  projectsList.innerHTML = projectCards;
}
