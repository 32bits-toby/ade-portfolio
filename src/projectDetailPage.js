import { projects } from './projectsData.js';

const detailRoot = document.getElementById('project-detail-root');

const renderNotFound = () => {
  if (!detailRoot) return;

  detailRoot.innerHTML = `
    <div class="project-detail-card reveal-text in-view">
      <h1 class="project-detail-title">Project not found</h1>
      <p class="project-detail-summary">The selected project does not exist yet. Return to the projects page and choose a valid project.</p>
      <a href="/projects.html" class="project-link-btn inline-link">Back to Projects</a>
    </div>
  `;
};

if (detailRoot) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  if (!slug) {
    renderNotFound();
  } else {
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
      renderNotFound();
    } else {
      const toolTags = project.tools
        .map((tool) => `<span class="project-tool">${tool}</span>`)
        .join('');

      const keyInsights = project.keyInsights
        .map((insight) => `<li>${insight}</li>`)
        .join('');

      const mediumButton = project.links.medium
        ? `<a href="${project.links.medium}" class="project-link-btn" target="_blank" rel="noopener noreferrer">Medium</a>`
        : '';

      detailRoot.innerHTML = `
        <article class="project-detail-card reveal-text in-view">
          <div class="project-detail-media">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-detail-header">
            <h1 class="project-detail-title">${project.title}</h1>
            <p class="project-timeline">${project.timeline}</p>
            <div class="project-tools">${toolTags}</div>
          </div>

          <div class="project-detail-block">
            <h2>Project summary</h2>
            <p class="project-detail-summary">${project.projectSummary}</p>
          </div>

          <div class="project-detail-block">
            <h2>Key insights</h2>
            <ul class="project-insights-list">${keyInsights}</ul>
          </div>

          <div class="project-detail-block">
            <h2>Outcome / takeaway</h2>
            <p class="project-detail-summary">${project.outcome}</p>
          </div>

          <div class="project-links">
            <a href="${project.links.dashboard}" class="project-link-btn" target="_blank" rel="noopener noreferrer">View Dashboard</a>
            <a href="${project.links.github}" class="project-link-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            ${mediumButton}
          </div>
        </article>
      `;
    }
  }
}
