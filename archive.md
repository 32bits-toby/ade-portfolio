# Research Archive Section Code

This file contains the complete implementation of the "Selected Analyses" horizontal rail, including HTML structure, strict editorial CSS styles, and the JavaScript required for the scroll reveal effect.

## 1. HTML Structure

Place this in `index.html` where you want the section to appear.

```html
<!-- RESEARCH ARCHIVE SECTION -->
<!-- RESEARCH ARCHIVE RAIL -->
<section class="research-rail container reveal-text delay-1">

  <div class="rail-header">
    <h2 class="section-label">Selected Analyses</h2>
  </div>

  <div class="rail-track">

    <!-- Card 1 -->
    <article class="rail-card" onclick="window.location.href='/research/permit-vs-approve'">
      <div class="rail-visual">
        <img src="/public/assets/design-1.svg" alt="Approve Flow Diagram">
      </div>
      <div class="rail-content">
        <h3 class="rail-title">Permit vs Approve: A Design Choice That Changed the Threat Model</h3>
        <div class="rail-meta">Design Review · DeFi · 2025</div>
        <p class="rail-summary">Reworked the approval flow to eliminate an implicit trust boundary, preventing a
          class of fund-draining exploits while improving user clarity.</p>
        <span class="rail-cta">Read case →</span>
      </div>
    </article>

    <!-- Card 2 -->
    <article class="rail-card" onclick="window.location.href='/research/partial-failure'">
      <div class="rail-visual">
        <img src="/public/assets/design-2.svg" alt="State Machine Diagram">
      </div>
      <div class="rail-content">
        <h3 class="rail-title">Why This Withdrawal Flow Breaks Under Partial Failure</h3>
        <div class="rail-meta">System Analysis · Infra · 2024</div>
        <p class="rail-summary">Exposed a partial-failure state in the bridge logic that leads to permanent fund
          lock, requiring a complete redesign of the settlement phase.</p>
        <span class="rail-cta">View analysis →</span>
      </div>
    </article>

    <!-- Card 3 -->
    <article class="rail-card" onclick="window.location.href='/research/ux-role-boundary'">
      <div class="rail-visual">
        <img src="/public/assets/design-3.svg" alt="Role Hierarchy Visual">
      </div>
      <div class="rail-content">
        <h3 class="rail-title">The Role Boundary That Turned UX Into an Attack Surface</h3>
        <div class="rail-meta">Architecture · Web2 · 2024</div>
        <p class="rail-summary">Reframed a permission model where a UX convenience feature allowed privilege
          escalation through an unchecked role boundary.</p>
        <span class="rail-cta">Read case →</span>
      </div>
    </article>

    <!-- Card 4 -->
    <article class="rail-card" onclick="window.location.href='/research/convenience-trust'">
      <div class="rail-visual">
        <img src="/public/assets/design-4.svg" alt="Trust Model Graph">
      </div>
      <div class="rail-content">
        <h3 class="rail-title">A Convenience Feature That Quietly Changed the Trust Model</h3>
        <div class="rail-meta">Protocol Analysis · Auth · 2023</div>
        <p class="rail-summary">Identified and removed a 'one-click' shortcut that bypassed key signature checks,
          restoring the intended security invariants.</p>
        <span class="rail-cta">View analysis →</span>
      </div>
    </article>

  </div>
</section>
```

## 2. CSS Styles

Ensure these styles are present in `src/style.css`.

### Usage Specific Styles (Research Rail)

```css
/* Research Archive Rail - STRICT EDITORIAL SPREAD */
.research-rail {
  width: 100%;
  max-width: 100%;
  margin: 8rem 0 16rem 0; /* Huge vertical breathing room */
  padding: 0;
  color: var(--text-primary);
  overflow: hidden;
}

.rail-header {
  max-width: var(--container-width);
  margin: 0 auto 4rem auto; /* Significant space below header */
  padding: 0 var(--spacing-md);
}

.section-label {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1.5rem;
  display: block;
  width: 100%;
}

/* Horizontal Track */
.rail-track {
  display: flex;
  overflow-x: auto;
  gap: 8rem; /* 8rem gap = Open, breathing rhythm */
  /* ALIGNMENT: Left padding ensures first item aligns with container grid */
  padding: 0 calc((100vw - var(--container-width)) / 2 + var(--spacing-md)) 6rem calc((100vw - var(--container-width)) / 2 + var(--spacing-md));
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.rail-track::-webkit-scrollbar {
  display: none;
}

/* Rail Card - Feature Spread - REFINED BALANCE */
.rail-card {
  /* Mobile Default */
  min-width: 85vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
  transition: opacity 0.4s ease;
  position: relative;
}

/* Desktop: Cinematic Spread Scale */
@media (min-width: 1024px) {
  .rail-card {
    min-width: 900px;
    max-width: 900px;
    flex-direction: row;
    align-items: flex-start; /* Top align to contain text */
    gap: 3.5rem; /* Slightly tighter gap */
  }
}

.rail-card:hover {
  opacity: 1; /* Keep full opacity on hover */
}

/* Image Anchor - Dominant */
.rail-visual {
  flex: none;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 0;
  overflow: hidden;
  background: #111;
}

@media (min-width: 1024px) {
  .rail-visual {
    width: 450px; /* Fixed anchor width */
    height: 450px; /* Fixed anchor height */
    aspect-ratio: 1/1;
  }
}

.rail-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  opacity: 0.9;
}

.rail-card:hover .rail-visual img {
  transform: scale(1.02);
  opacity: 1;
}

/* Content - Contained & Secondary */
.rail-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute height evenly */
  align-items: flex-start;
  /* Ensure it doesn't exceed image height visually */
  height: auto;
  min-height: 450px; /* Match image height on desktop */
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: none; /* Remove divider for cleaner look */
}

@media (max-width: 1023px) {
  .rail-content {
    min-height: auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 2rem;
  }
}

/* Typography Hierarchy - Balanced */
.rail-meta {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  opacity: 0.8;
  display: block;
}

.rail-title {
  font-family: var(--font-sans);
  /* Reduced scale to fit comfortably */
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  max-width: 18ch;
  margin-bottom: 1.5rem;
}

.rail-summary {
  font-family: var(--font-sans); /* Reverted to Sans (Neutral) */
  font-size: 1.05rem; /* Slightly smaller for balance */
  line-height: 1.5;
  color: #aaa; /* Quieter text */
  margin-bottom: auto; /* Push CTA to bottom */
  max-width: 42ch;
  font-weight: 400;
}

/* Link Style */
.rail-cta {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;
  margin-top: 2rem; /* Ensure spacing from text */
}

.rail-card:hover .rail-cta {
  opacity: 1;
  transform: translateX(5px);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .rail-track {
    padding-left: var(--spacing-md);
    gap: 3rem;
  }

  .research-rail {
    margin: 4rem 0;
  }

  .rail-title {
    font-size: 2rem;
  }
}
```