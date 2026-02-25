import { projects } from './projectsData.js';

const TYPE_COLOR = {
  'Machine Learning': '#c8f060',
  'Business Intelligence': '#60c8f0',
  'Financial Analytics': '#f0c860',
  'Healthcare Analytics': '#f08060',
  'People Analytics': '#b060f0',
  'Operations Analytics': '#60f0b0',
};

const projectsList = document.getElementById('projects-list');
const filterRow = document.getElementById('filter-row');
const countEl = document.getElementById('projects-count');

let activeFilter = 'All';

function renderFilters() {
  if (!filterRow) return;
  const types = ['All', ...Array.from(new Set(projects.map((p) => p.type)))];

  filterRow.innerHTML = types.map((t) => {
    const isActive = t === activeFilter;
    const color = TYPE_COLOR[t] || '#c8f060';
    let style = '';
    if (isActive && t !== 'All') {
      style = `color:${color};border-color:${color}60;background:${color}12`;
    } else if (isActive) {
      style = `color:#c8f060;border-color:#c8f06050;background:#c8f06010`;
    }
    return `<button class="pp-filter-btn${isActive ? ' pp-filter-active' : ''}" data-type="${t}" style="${style}">${t}</button>`;
  }).join('');

  // Attach click handlers
  filterRow.querySelectorAll('.pp-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.type;
      renderFilters();
      renderCards();
    });
  });
}

function renderCards() {
  if (!projectsList) return;

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  const cards = filtered.map((project, i) => {
    const idx = String(i + 1).padStart(2, '0');
    const typeColor = TYPE_COLOR[project.type] || '#c8f060';

    const toolPills = project.tools.slice(0, 4)
      .map((t) => `<span class="pp-pill">${t}</span>`)
      .join('');
    const extraTools = project.tools.length > 4
      ? `<span class="pp-pill pp-pill-extra">+${project.tools.length - 4}</span>`
      : '';

    const takeaway = project.caseStudy?.takeaway || project.outcome || '';

    return `
      <a href="/project.html?slug=${project.slug}" class="pp-card" style="animation-delay:${i * 60}ms;--divider-hover:${typeColor}">
        <div class="pp-card-top">
          <span class="pp-card-id">— ${idx}</span>
          <span class="pp-card-type" style="color:${typeColor};border-color:${typeColor}30;background:${typeColor}0d">${project.type}</span>
        </div>
        <h2 class="pp-card-title">${project.title}</h2>
        <div class="pp-card-timeline">${project.timeline}</div>
        <div class="pp-card-divider" data-color="${typeColor}"></div>
        <p class="pp-card-summary">${project.summary}</p>
        <div class="pp-tool-row">${toolPills}${extraTools}</div>
        <div class="pp-takeaway-row">
          <span class="pp-takeaway-arrow" style="color:${typeColor}">↳</span>
          <span class="pp-takeaway-text">${takeaway}</span>
        </div>
        <div class="pp-cta">View case study →</div>
      </a>
    `;
  }).join('');

  projectsList.innerHTML = cards;

  // Update count
  if (countEl) {
    const label = activeFilter === 'All'
      ? `${filtered.length} projects total`
      : `${filtered.length} project${filtered.length !== 1 ? 's' : ''} in ${activeFilter}`;
    countEl.innerHTML = `<span class="pp-count-text">${label}</span>`;
  }
}

renderFilters();
renderCards();
