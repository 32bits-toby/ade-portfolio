import { createApp, Events, Utils } from 'veloxi';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

// --- Animation Modules ---

const initHeroAnimations = () => {
  // console.log('Initializing Hero Animations');
  // Hero Text Rotator with Scramble Effect
  const rotatorEl = document.getElementById('hero-rotator-text');
  if (rotatorEl) {
    const phrases = [
      'Turning scattered spreadsheets into one clear dashboard',
      'Flagging churn risks before they become lost revenue',
      'Automating weekly reports so your team saves hours',
      'Revealing which campaigns actually drive ROI',
      'Building forecasts your planning team can trust'
    ];
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let currentIndex = 0;

    function scrambleTo(targetText) {
      const duration = 800; // ms for scramble
      const steps = 20;
      const stepTime = duration / steps;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const resolved = Math.floor(progress * targetText.length);

        const display = targetText.split('').map((char, i) => {
          if (i < resolved) return char;
          if (char === ' ') return ' ';
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }).join('');

        rotatorEl.textContent = display;

        if (step >= steps) {
          clearInterval(interval);
          rotatorEl.textContent = targetText;
        }
      }, stepTime);
    }

    function nextPhrase() {
      currentIndex = (currentIndex + 1) % phrases.length;
      scrambleTo(phrases[currentIndex]);
    }

    setInterval(nextPhrase, 5000);
  }

  // Hero Text Reveal - Cinematic Focus Pull (Word Level, Main Title Only)
  const heroTitle = document.querySelector('.hero-title');

  if (heroTitle) {
    const textSpans = heroTitle.querySelectorAll('.text-dim, .text-bright');
    let heroWords = [];

    textSpans.forEach(span => {
      // Helper: Split text into words (preserving structure and classes)
      if (!span.textContent.trim()) return;

      const words = span.textContent.split(' ').filter(w => w.length > 0);
      span.innerHTML = ''; // Clear content

      words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.innerText = word;
        wordSpan.classList.add('gsap-word');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.willChange = 'transform, filter, opacity';
        wordSpan.style.marginRight = '0.3em';

        // Copy classes from parent if needed, or rely on inheritance
        span.appendChild(wordSpan);
        heroWords.push(wordSpan);
      });
    });

    // 1. Initial State
    gsap.set(heroWords, {
      opacity: 0,
      filter: 'blur(15px)',
      y: 30,
      scale: 0.9
    });

    // 2. Animate to Focus
    const heroTl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1.5
      },
      delay: 0.5
    });

    heroTl.to(heroWords, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      scale: 1,
      stagger: 0.08,
    });
  }

  // Hero Character Grid Animation (Replaced with Data Constellation)
  const canvas = document.getElementById('hero-waves');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let nodes = [];
    const NODE_COUNT = 150;
    const CONNECTION_DISTANCE = 110;
    const SPOTLIGHT_RADIUS = 300;

    // Mouse tracking with smoothing
    let mouseX = -9999, mouseY = -9999;
    let targetMouseX = -9999, targetMouseY = -9999;

    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 0.8
        });
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initNodes();
    }

    // Listen to mouse movement on the hero section
    const heroEl = canvas.closest('.hero');
    if (heroEl) {
      heroEl.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = e.clientX - rect.left;
        targetMouseY = e.clientY - rect.top;
      });
      heroEl.addEventListener('mouseleave', () => {
        targetMouseX = -9999;
        targetMouseY = -9999;
      });
    }

    function animate() {
      // Smooth mouse interpolation
      if (targetMouseX > -9000) {
        mouseX += (targetMouseX - mouseX) * 0.08;
        mouseY += (targetMouseY - mouseY) * 0.08;
      } else {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      }

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges gently
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Ensure they don't get stuck out of bounds
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        // Distance from node to mouse
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        // Calculate opacity based on spotlight
        const baseOpacity = 0.15;
        let spotOpacity = 0;

        if (distToMouse < SPOTLIGHT_RADIUS) {
          spotOpacity = Math.pow(1 - distToMouse / SPOTLIGHT_RADIUS, 1.4) * 0.7;
        }

        const finalNodeOpacity = Math.min(1, baseOpacity + spotOpacity);

        // Draw Node (subtle olive green for points)
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(141, 184, 58, ${finalNodeOpacity})`;
        ctx.fill();

        // Check connections with other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          let node2 = nodes[j];
          const dx2 = node.x - node2.x;
          const dy2 = node.y - node2.y;
          const distBetweenNodes = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distBetweenNodes < CONNECTION_DISTANCE) {
            // Find the center point of the connection to calculate spotlight interaction
            const cx = (node.x + node2.x) / 2;
            const cy = (node.y + node2.y) / 2;
            const distCenterToMouse = Math.sqrt((cx - mouseX) ** 2 + (cy - mouseY) ** 2);

            if (distCenterToMouse < SPOTLIGHT_RADIUS) {
              const lineSpotOpacity = Math.pow(1 - distCenterToMouse / SPOTLIGHT_RADIUS, 1.5) * 0.35;
              const distanceFalloff = 1 - (distBetweenNodes / CONNECTION_DISTANCE);
              const finalLineOpacity = lineSpotOpacity * distanceFalloff;

              if (finalLineOpacity > 0.01) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(node2.x, node2.y);
                // Draw connecting lines in white to contrast the green nodes
                ctx.strokeStyle = `rgba(255, 255, 255, ${finalLineOpacity})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            }
          }
        }
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(animate);
  }
};

const initNarrativeReveal = () => {
  const revealElements = Array.from(document.querySelectorAll('.gsap-text-reveal'));
  if (revealElements.length === 0) return;

  // Clean up only narrative-related triggers if re-init happens.
  ScrollTrigger.getAll().forEach(t => {
    if (typeof t.vars?.id === 'string' && t.vars.id.startsWith('narrative-reveal-')) {
      t.kill();
    }
  });

  const splitNodeToChars = (node, charsRef) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const normalized = (node.textContent || '').replace(/\s+/g, ' ');
      if (!normalized.trim()) return document.createDocumentFragment();

      const frag = document.createDocumentFragment();
      // Split into words and spaces to preserve natural word-wrapping
      const tokens = normalized.match(/\S+|\s/g) || [];

      tokens.forEach(token => {
        if (token === ' ') {
          // Plain text space — collapses naturally at line-wrap points
          frag.appendChild(document.createTextNode(' '));
        } else {
          // Word — wrap in inline-block container so it never breaks mid-word
          const wordWrap = document.createElement('span');
          wordWrap.style.display = 'inline-block';
          wordWrap.style.whiteSpace = 'nowrap';

          Array.from(token).forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.classList.add('gsap-char');
            span.style.display = 'inline-block';
            span.style.willChange = 'transform, opacity';
            wordWrap.appendChild(span);
            charsRef.push(span);
          });

          frag.appendChild(wordWrap);
        }
      });
      return frag;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false);
      Array.from(node.childNodes).forEach(child => {
        clone.appendChild(splitNodeToChars(child, charsRef));
      });
      return clone;
    }

    return document.createDocumentFragment();
  };

  const paragraphs = [];

  revealElements.forEach((el) => {
    let chars = Array.from(el.querySelectorAll('.gsap-char'));

    if (chars.length === 0) {
      const splitChars = [];
      const originalNodes = Array.from(el.childNodes);
      el.innerHTML = '';
      originalNodes.forEach(node => {
        el.appendChild(splitNodeToChars(node, splitChars));
      });
      chars = splitChars;
    }

    if (chars.length === 0) return;

    // Group by rendered lines so reveal flows line-by-line.
    const lineBuckets = [];
    let currentLineTop = null;
    const lineTolerance = 2;

    chars.forEach(char => {
      const top = Math.round(char.getBoundingClientRect().top);
      if (currentLineTop === null || Math.abs(top - currentLineTop) > lineTolerance) {
        lineBuckets.push([]);
        currentLineTop = top;
      }
      lineBuckets[lineBuckets.length - 1].push(char);
    });

    const orderedChars = lineBuckets
      .flat()
      // Skip animating spaces to reduce per-frame work.
      .filter(char => char.textContent !== '\u00A0');

    if (orderedChars.length === 0) return;

    gsap.set(chars, { opacity: 0, y: 14 });
    gsap.set(chars.filter(char => char.textContent === '\u00A0'), { opacity: 1, y: 0 });

    paragraphs.push({ el, orderedChars });
  });

  if (paragraphs.length === 0) return;

  const narrativeTrigger =
    paragraphs[0].el.closest('.narrative-stack') ||
    paragraphs[0].el.parentElement ||
    paragraphs[0].el;
  const mistTarget = paragraphs[0].el.closest('.narrative-content') || narrativeTrigger;

  const narrativeTl = gsap.timeline({
    scrollTrigger: {
      id: 'narrative-reveal-main',
      trigger: narrativeTrigger,
      start: 'top 95%',
      end: 'top 25%',
      scrub: 0.55,
      invalidateOnRefresh: true,
    }
  });

  // Apply one shared mist layer across both narrative paragraphs.
  gsap.set(mistTarget, { filter: 'blur(7px)', willChange: 'filter' });

  // Sequence paragraphs so first completes before second starts.
  paragraphs.forEach((paragraph, idx) => {
    const paragraphDuration = Math.min(1.2, Math.max(0.55, paragraph.orderedChars.length * 0.01));
    const position = idx === 0 ? 0 : '>';

    narrativeTl.to(paragraph.orderedChars, {
      opacity: 1,
      y: 0,
      duration: paragraphDuration,
      ease: 'none',
      stagger: 0.01,
    }, position);
  });

  const narrativeDuration = narrativeTl.duration() || 1;
  narrativeTl.to(mistTarget, {
    filter: 'blur(0px)',
    duration: narrativeDuration,
    ease: 'none',
  }, 0);
};

const initBridgeAnimations = () => {
  const transformCards = document.querySelectorAll('.transform-card');

  if (transformCards.length === 0) return;

  // Clean old triggers in this section
  ScrollTrigger.getAll().forEach(t => {
    if (t.trigger && (t.trigger.classList.contains('transform-card') || t.trigger.classList.contains('transform-grid'))) {
      t.kill();
    }
  });

  transformCards.forEach((card, index) => {
    // Card entrance animation
    gsap.fromTo(card,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.1
      }
    );
  });
};

const initWorkAnimations = () => {
  // Work Grid Magnetic Effect
  const workGrid = document.querySelector('.work-grid');
  if (workGrid) {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    const maxOffset = 6;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    workGrid.addEventListener('mousemove', (e) => {
      const rect = workGrid.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      targetX = normalizedX * maxOffset;
      targetY = normalizedY * maxOffset;
    });

    workGrid.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

    function animateMagnetic() {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      if (workGrid.classList.contains('in-view')) {
        workGrid.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      requestAnimationFrame(animateMagnetic);
    }
    animateMagnetic();
  }
};

const initDockAnimations = () => {
  // macOS Dock Parallax
  const docks = document.querySelectorAll('.macos-dock');
  // Clean old trigger
  ScrollTrigger.getAll().forEach(t => {
    if (t.trigger && t.trigger.classList.contains('macos-dock')) t.kill();
  });

  docks.forEach(dock => {
    gsap.to(dock, {
      y: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: dock,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      }
    });
  });

  // Veloxi Dock Logic
  const MacOsDockPlugin = (context) => {
    let docks = [];
    context.subscribeToEvents((eventBus) => {
      eventBus.subscribeToEvent(Events.PointerMoveEvent, (event) => {
        docks.forEach((dock) => {
          if (!dock.view.intersects(event.x, event.y)) {
            dock.items.forEach(item => item.size.reset());
            return;
          }
          dock.items.forEach(item => {
            const progress = Utils.pointToViewProgress({ x: event.x, y: event.y }, item, 120);
            const scale = Utils.remap(progress, 0, 1, 1, 2);
            item.size.set({ width: 40 * scale, height: 40 * scale });
          });
        });
      });
    });

    context.setup(() => {
      const dockViews = context.getViews('dock');
      const allItems = context.getViews('item');
      docks = dockViews.map(dockView => ({
        view: dockView,
        items: allItems.filter(item => dockView.element.contains(item.element))
      }));
      allItems.forEach(item => {
        item.size.setAnimator('dynamic');
        item.origin.set({ x: 0.5, y: 1 });
      });
    });
  };
  MacOsDockPlugin.pluginName = 'MacOsDock';
  const veloxiApp = createApp();
  veloxiApp.addPlugin(MacOsDockPlugin);
  veloxiApp.run();
};

const initGeneral = () => {
  // Scroll Reveal (Observer)
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-text, .reveal-image, .work-card, .work-grid').forEach(el => {
    revealObserver.observe(el);
  });

  // Smooth Scrolling (Lenis)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothTouch: false });
    window._lenis = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    /* Original rAf loop - replaced by gsap.ticker integration above
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf); */
  }

  // Live Time
  const liveTimeEl = document.getElementById('live-time');
  if (liveTimeEl) {
    function updateTime() {
      const now = new Date();
      const options = { timeZone: 'Africa/Lagos', hour: 'numeric', minute: '2-digit', hour12: true, weekday: 'short', month: 'short', day: 'numeric' };
      liveTimeEl.textContent = now.toLocaleString('en-US', options);
    }
    updateTime();
    setInterval(updateTime, 1000);
  }

  // Back to Top
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Menu Toggle (3D rotation animation)
  const menuTrigger = document.querySelector('.menu-trigger');
  const menuClose = document.querySelector('.menu-close');
  const pageContent = document.getElementById('page-content');

  if (menuTrigger) {
    menuTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      document.body.classList.add('menu-open');
      if (window._lenis) window._lenis.stop();
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      if (window._lenis) window._lenis.start();
    });
  }

  if (pageContent) {
    pageContent.addEventListener('click', (e) => {
      if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
        if (window._lenis) window._lenis.start();
        e.stopPropagation();
      }
    });
  }
};

const initGallerySlider = () => {
  const slides = document.querySelectorAll('.mv-slide');
  const dots = document.querySelectorAll('.mv-dot');

  if (slides.length === 0 || dots.length === 0) return;

  let currentSlide = 0;
  let slideInterval;
  const slideDuration = 5000;

  const goToSlide = (index) => {
    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to target
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  };

  // Start auto-cycling
  const startSlider = () => {
    slideInterval = setInterval(nextSlide, slideDuration);
  };

  // Stop auto-cycling
  const stopSlider = () => {
    clearInterval(slideInterval);
  };

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSlider();
      goToSlide(index);
      startSlider(); // Restart interval after manual click
    });
  });

  // Initialize
  startSlider();
};

const initCursor = () => {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  // Mark body to hide default cursor CSS rules we added
  document.body.classList.add('custom-cursor-active');

  // GSAP quickTo for very smooth tracking
  const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" }, "-=10");
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" }, "-=10");

  let isFirstMove = true;

  window.addEventListener("mousemove", (e) => {
    if (isFirstMove) {
      cursor.style.visibility = 'visible';
      isFirstMove = false;
    }
    xTo(e.clientX - 10);
    yTo(e.clientY - 10);
  });

  const interactives = document.querySelectorAll('a, button, .transform-card, .mv-gallery-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        duration: 0.2
      });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: 'none',
        duration: 0.2
      });
    });
  });
};

// --- Main Init ---

const init = () => {
  // console.log('Init called');
  // Initialize general logic immediately
  initGeneral();

  let animationsInitialized = false;

  const runAnimations = () => {
    if (animationsInitialized) return;
    animationsInitialized = true;
    // console.log('Running animations...');

    initCursor();
    initHeroAnimations();
    initNarrativeReveal();
    initBridgeAnimations();
    initWorkAnimations();
    initDockAnimations();
    initGallerySlider();

    ScrollTrigger.refresh();

    // Dismiss preloader after animations are ready
    dismissPreloader();
  };

  const dismissPreloader = () => {
    const preloader = document.getElementById('preloader');
    if (!preloader || preloader.classList.contains('dismiss')) return;

    // Give the typewriter animation time to finish (chars + pause)
    setTimeout(() => {
      preloader.classList.add('dismiss');

      // Remove preloader from DOM after slide-up transition
      preloader.addEventListener('transitionend', () => {
        preloader.remove();
      });
    }, 1200);
  };

  // Primary: Wait for fonts
  document.fonts.ready.then(() => {
    // console.log('Fonts ready');
    runAnimations();
  });

  // Failsafe: Wait for window load (images, etc)
  window.addEventListener('load', () => {
    // console.log('Window load');
    runAnimations();
    // Extra refresh for layout shifts
    setTimeout(() => ScrollTrigger.refresh(), 500);
  });

  // Fallback timeout (in case everything hangs)
  setTimeout(() => {
    if (!animationsInitialized) {
      // console.warn('Fallback animation trigger');
      runAnimations();
    }
    // Always dismiss preloader even if animations fail
    dismissPreloader();
  }, 4000);
};

document.addEventListener('DOMContentLoaded', init);
