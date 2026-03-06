import { projects } from './projectsData.js';

const root = document.getElementById('project-root');

const renderNestedList = (items = []) => {
  return items.map((item) => {
    if (typeof item === 'string') {
      return `<li>${item}</li>`;
    }

    if (item && Array.isArray(item.items)) {
      const childItems = item.items.map((child) => `<li>${child}</li>`).join('');
      return `
        <li>
          <span class="case-study-list-title">${item.title}</span>
          <ul class="case-study-sublist">${childItems}</ul>
        </li>
      `;
    }

    return '';
  }).join('');
};

const renderNotFound = () => {
  if (!root) return;

  root.innerHTML = `
    <section class="project-detail-section container">
      <div class="project-detail-card reveal-text in-view case-study-notfound">
        <h1 class="project-detail-title">Project not found</h1>
        <p class="project-detail-summary">The selected project does not exist yet. Return to the projects page and choose a valid project.</p>
        <a href="/projects.html" class="project-link-btn inline-link">Back to Projects</a>
      </div>
    </section>
  `;
};

const initCaseStudyGallery = () => {
  const track = document.querySelector('[data-gallery-track]');
  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.case-study-slide'));
  const prevBtn = document.querySelector('[data-gallery-prev]');
  const nextBtn = document.querySelector('[data-gallery-next]');
  const counter = document.querySelector('[data-gallery-counter]');
  const gallerySection = document.querySelector('.case-study-gallery-section');

  if (!prevBtn || !nextBtn || !counter || slides.length === 0 || !gallerySection) return;

  let currentIndex = 0;

  if (slides.length <= 1) {
    gallerySection.classList.add('is-single');
  }

  const update = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `${currentIndex + 1} / ${slides.length}`;

    const atStart = currentIndex === 0;
    const atEnd = currentIndex === slides.length - 1;
    const singleSlide = slides.length <= 1;

    prevBtn.disabled = atStart || singleSlide;
    nextBtn.disabled = atEnd || singleSlide;

    // Update dot indicators
    const dots = document.querySelectorAll('.case-study-gallery-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentIndex);
    });
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    update();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(slides.length - 1, currentIndex + 1);
    update();
  });

  update();

  // Create dot indicators
  const dotsContainer = document.querySelector('.case-study-gallery-dots');
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `case-study-gallery-dot${i === 0 ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = i;
        update();
      });
      dotsContainer.appendChild(dot);
    });
  }
};

const getProjectGalleryImages = (project) => {
  if (Array.isArray(project.images) && project.images.length > 0) {
    return project.images.filter(Boolean);
  }
  // Fallback to single image if present and not a default SVG
  if (project.image && !project.image.includes('/assets/design-')) {
    return [project.image];
  }
  return [];
};

if (root) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  if (!slug) {
    renderNotFound();
  } else {
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
      renderNotFound();
    } else {
      const caseStudy = project.caseStudy || {};

      // Extract data — prefer caseStudy fields, fall back to project-level
      const summaryText = typeof caseStudy.summary === 'string'
        ? caseStudy.summary
        : (Array.isArray(caseStudy.summary) ? caseStudy.summary.join(' ') : (project.projectSummary || project.summary));

      const whatItems = Array.isArray(caseStudy.what) ? caseStudy.what : [];
      const metrics = Array.isArray(caseStudy.metrics) ? caseStudy.metrics : [];
      const insightItems = Array.isArray(caseStudy.insights) ? caseStudy.insights : project.keyInsights;
      const outcomeItems = Array.isArray(caseStudy.outcomes) ? caseStudy.outcomes : [];
      const takeaway = caseStudy.takeaway || project.outcome;

      const toolTags = project.tools
        .map((tool) => `<li>${tool}</li>`)
        .join('');

      const linksHtml = [
        project.links.dashboard
          ? `<div class="meta-link-wrapper">
               <a href="${project.links.dashboard}" class="meta-link-icon" target="_blank" rel="noopener noreferrer" aria-label="Dashboard">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
               </a>
               <span class="meta-link-tooltip">Dashboard</span>
             </div>`
          : '',
        project.links.medium
          ? `<div class="meta-link-wrapper">
               <a href="${project.links.medium}" class="meta-link-icon" target="_blank" rel="noopener noreferrer" aria-label="Write-up">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               </a>
               <span class="meta-link-tooltip">Write-up</span>
             </div>`
          : '',
        project.links.github
          ? `<div class="meta-link-wrapper">
               <a href="${project.links.github}" class="meta-link-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
               </a>
               <span class="meta-link-tooltip">GitHub</span>
             </div>`
          : '',
        project.links.linkedin
          ? `<div class="meta-link-wrapper">
               <a href="${project.links.linkedin}" class="meta-link-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </a>
               <span class="meta-link-tooltip">LinkedIn</span>
             </div>`
          : ''
      ].join('');

      const images = getProjectGalleryImages(project);

      const sliderHtml = images.map((imgSrc, index) => `
        <figure class="case-study-slide">
          <img src="${imgSrc}" alt="${project.title} screenshot ${index + 1}">
        </figure>
      `).join('');

      // Helper: render em-dash bullet list
      const renderDashList = (items) => items.map((item) => `
        <li class="cs-list-item">
          <span class="cs-bullet">—</span>
          <span>${item}</span>
        </li>
      `).join('');

      // Build sections
      const summarySection = `
        <div class="cs-section">
          <div class="cs-label">Summary</div>
          <div class="cs-body">
            <p class="cs-prose">${summaryText}</p>
          </div>
        </div>
      `;

      const whatSection = whatItems.length > 0 ? `
        <div class="cs-section">
          <div class="cs-label">What I Did</div>
          <div class="cs-body">
            <ul class="cs-list">${renderDashList(whatItems)}</ul>
          </div>
        </div>
      ` : '';

      const metricsSection = metrics.length > 0 ? `
        <div class="cs-section">
          <div class="cs-label">Key Metrics</div>
          <div class="cs-body">
            <div class="cs-metrics-grid">
              ${metrics.map((m) => `
                <div class="cs-metric-card">
                  <div class="cs-metric-value">${m.value}</div>
                  <div class="cs-metric-label">${m.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      ` : '';

      const insightsSection = insightItems.length > 0 ? `
        <div class="cs-section">
          <div class="cs-label">Key Insights</div>
          <div class="cs-body">
            <ul class="cs-list">${renderDashList(insightItems)}</ul>
          </div>
        </div>
      ` : '';

      const outcomesSection = outcomeItems.length > 0 ? `
        <div class="cs-section">
          <div class="cs-label">Outcomes &amp; Recommendations</div>
          <div class="cs-body">
            <ul class="cs-list">${renderDashList(outcomeItems)}</ul>
          </div>
        </div>
      ` : '';

      const takeawaySection = takeaway ? `
        <div class="cs-takeaway">
          <span class="cs-takeaway-icon">↳</span>
          <p class="cs-takeaway-text">${takeaway}</p>
        </div>
      ` : '';

      const contentSectionHtml = `
        <section class="case-study-content container reveal-text in-view delay-2">
          <div class="cs-body-inner">
            ${summarySection}
            ${whatSection}
            ${metricsSection}
            ${insightsSection}
            ${outcomesSection}
            ${takeawaySection}
          </div>
        </section>
      `;

      root.innerHTML = `
        <header class="case-study-hero">
          <div class="hero-nav subpage-nav case-study-nav">
            <div class="menu-trigger" style="cursor: pointer;"><span class="menu-icon">=</span> Menu</div>
            <a href="/" class="logo-initials">ade.</a>
          </div>

          <div class="case-study-hero-inner container reveal-text in-view">
            <a href="/projects.html" class="cs-back-link">← Back to Projects</a>
            <h1 class="case-study-title">${project.title}</h1>

            <div class="case-study-meta-grid">
              <div class="case-study-meta-col">
                <h4 class="meta-label">Timeline</h4>
                <p class="meta-value">${project.timeline}</p>
              </div>

              <div class="case-study-meta-col">
                <h4 class="meta-label">Tools</h4>
                <ul class="meta-list">${toolTags}</ul>
              </div>

              <div class="case-study-meta-col">
                <h4 class="meta-label">Links</h4>
                <div class="meta-links">${linksHtml}</div>
              </div>
            </div>
          </div>

          <div class="scroll-indicator">
            <div class="scroll-dot"></div>
          </div>
        </header>

        ${images.length > 0 ? `
        <section class="case-study-gallery-section container reveal-text in-view delay-1">
          <div class="case-study-gallery-viewport">
            <button class="case-study-gallery-btn case-study-gallery-btn-prev" data-gallery-prev aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div class="case-study-gallery-track" data-gallery-track>
              ${sliderHtml}
            </div>

            <button class="case-study-gallery-btn case-study-gallery-btn-next" data-gallery-next aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <p class="case-study-gallery-counter" data-gallery-counter></p>
          <div class="case-study-gallery-dots"></div>
        </section>
        ` : ''}

        ${contentSectionHtml}
      `;

      initCaseStudyGallery();
    }
  }
}
