//  Scrolling js
(function () {
  // Ticker: ensure continuous scroll by cloning items to fill 2x viewport
  const tickerViewport = document.querySelector('.promo-ticker .ticker__viewport');
  const tickerTrack = document.querySelector('.promo-ticker .ticker__track');
  let baseCount = 0;
  function fillTicker() {
    if (!tickerViewport || !tickerTrack) return;
    if (baseCount === 0) baseCount = tickerTrack.children.length;
    const targetWidth = tickerViewport.offsetWidth * 2;

    // Append clones of the base items until the track is wide enough
    while (tickerTrack.scrollWidth < targetWidth) {
      for (let i = 0; i < baseCount; i++) {
        tickerTrack.appendChild(tickerTrack.children[i].cloneNode(true));
      }
    }
  }
  window.addEventListener('load', fillTicker);
  window.addEventListener('resize', fillTicker);
})();

// home-slider

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let slideInterval;

function updateSlider(index) {
  // Remove active classes
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Set new active slide
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  updateSlider(currentSlide + 1);
}

function prevSlide() {
  updateSlider(currentSlide - 1);
}

// Event Listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateSlider(index);
    resetTimer();
  });
});

// Auto-play logic
function startTimer() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetTimer() {
  clearInterval(slideInterval);
  startTimer();
}

// Initialize
window.onload = startTimer;

// home-second section

// We clone the content via JS to ensure the "Continuous" effect works 
// regardless of screen width without manual HTML duplication.
const original = document.getElementById('originalContent');
const wrapper = document.getElementById('tickerWrapper');

// Clone the original set of 4 boxes
const clone = original.cloneNode(true);
wrapper.appendChild(clone);

// Pause animation on hover for desktop users
wrapper.addEventListener('mouseenter', () => {
  original.style.animationPlayState = 'paused';
  clone.style.animationPlayState = 'paused';
});

wrapper.addEventListener('mouseleave', () => {
  original.style.animationPlayState = 'running';
  clone.style.animationPlayState = 'running';
});

// home-Page-third-section
// Initialize Icons
lucide.createIcons();

// Button Interaction Logic
const btn = document.getElementById('cta-button');
btn.addEventListener('click', () => {
  // Log interaction
  console.log("Strategic process started.");

  // Simple visual feedback
  btn.textContent = "Processing...";
  setTimeout(() => {
    btn.textContent = "Success!";
    btn.style.background = "#22c55e"; // Green color
    btn.style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.6)";
  }, 1000);
});

// home-page-fourth-section
// Array of solutions as requested
const solutions = [
  { name: "IT SERVICES", url: "https://example.com/bpo" },
  { name: "BPO", url: "https://example.com/ecommerce" },
  { name: "E-COMMERCE", url: "https://example.com/marketing" },
  { name: "WEB DEVELOPMENT", url: "https://example.com/software" },
  { name: "AI SOLUTIONS", url: "https://example.com/cloud" }
];

const container = document.getElementById('solutions-container');

// Logic to build the rows dynamically
solutions.forEach((item, index) => {
  // 1. Create the Row
  const row = document.createElement('div');
  row.className = 'solution-row';

  // 2. Create the Text Label
  const label = document.createElement('span');
  label.className = 'solution-name';
  label.textContent = item.name;

  // 3. Create the Animated Circle Link
  const link = document.createElement('a');
  link.className = 'circle-link';
  link.href = item.url;
  link.target = "_blank";
  link.textContent = index + 1;
  // Staggered animation delay for each circle
  link.style.animationDelay = (index * 0.1) + 's';

  // Append elements
  row.appendChild(label);
  row.appendChild(link);
  container.appendChild(row);

  // 4. Add Divider (except after the last item)
  if (index < solutions.length - 1) {
    const divider = document.createElement('div');
    divider.className = 'divider';
    container.appendChild(divider);
  }
});
// home-page-fifth-section

(function () {
  const data = [
    { name: "Anjali Sharma", role: "COO, RetailCo", quote: "Oppty’s e-commerce platform increased our online sales by 45% in just three months!", rating: 5, badge: "E‑commerce" },
    { name: "James Lee", role: "CTO, FinEdge", quote: "Secure, scalable, and fast. The AIOps rollout cut incident response time in half.", rating: 5, badge: "AIOps" },
    { name: "Priya Sharma", role: "Founder, CraftHub", quote: "We loved the attention to detail on our new website and the SEO wins.", rating: 4, badge: "Web Dev" },
    { name: "Vikram Singh", role: "Operations Manager", quote: "Oppty’s BPO services streamlined our operations, letting us focus on growth.", rating: 5, badge: "BPO" },
    { name: "Fatima Noor", role: "Head IT, HealthLink", quote: "Migration was seamless. Zero downtime and great documentation.", rating: 5, badge: "IT Services" },
    { name: "Rohan Patel", role: "Tech Entrepreneur", quote: "Their AI-driven solutions optimized our workflows, saving us significant costs.", rating: 5, badge: "AI Solutions" },
    { name: "Priyanka Reddy", role: "Marketing Head", quote: "The responsive website Oppty built for us perfectly captures our brand’s essence", rating: 4, badge: "Marketing" },
    { name: "Rahul Mehta", role: "Product Lead, SwiftPay", quote: "Top‑notch engineering practices. CI/CD improved release cadence.", rating: 5, badge: "DevOps" }
  ];

  const track = document.getElementById('testiTrack');
  const dotsEl = document.getElementById('testiDots');
  const prev = document.getElementById('testiPrev');
  const next = document.getElementById('testiNext');

  let perView = 1;
  let page = 0;
  let pages = 0;
  let autoTimer = null;
  let touchStartX = 0, touchDeltaX = 0;

  function computePerView() {
    const w = window.innerWidth;
    perView = w >= 1024 ? 2 : 1;
  }

  function starSVG(filled) {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="${filled ? '#f59e0b' : 'none'}" stroke="#f59e0b" stroke-width="2">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </svg>`;
  }

  function initials(name) {
    return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
  }

  function render() {
    computePerView();
    track.style.transform = 'translateX(0%)';
    track.innerHTML = '';
    dotsEl.innerHTML = '';

    for (let i = 0; i < data.length; i += perView) {
      const pageEl = document.createElement('div');
      pageEl.className = 'slide-page';
      pageEl.style.setProperty('--per-view', perView);

      data.slice(i, i + perView).forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
                            <div class="avatar">${initials(item.name)}</div>
                            <div class="header">
                                <div class="name">${item.name}</div>
                                <span class="role">• ${item.role}</span>
                            </div>
                            <div class="stars" aria-label="${item.rating} out of 5 stars">
                                ${Array.from({ length: 5 }, (_, idx) => starSVG(idx < item.rating)).join('')}
                            </div>
                            <p class="quote">${item.quote}</p>
                            <div class="meta">
                                <span class="badge">${item.badge}</span>
                            </div>
                        `;
        pageEl.appendChild(card);
      });
      track.appendChild(pageEl);
    }

    pages = Math.ceil(data.length / perView);
    page = 0;

    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    }

    startAuto();
  }

  function goTo(idx) {
    page = Math.max(0, Math.min(idx, pages - 1));
    track.style.transform = `translateX(-${page * 100}%)`;
    [...dotsEl.children].forEach((d, i) => d.setAttribute('aria-selected', i === page ? 'true' : 'false'));
    restartAuto();
  }

  function prevPage() { goTo(page - 1); }
  function nextPage() { goTo(page + 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      goTo(page + 1 >= pages ? 0 : page + 1);
    }, 5000);
  }
  function stopAuto() { if (autoTimer) clearInterval(autoTimer); }
  function restartAuto() { startAuto(); }

  // Events
  prev.addEventListener('click', prevPage);
  next.addEventListener('click', nextPage);
  window.addEventListener('resize', () => {
    const oldPages = pages;
    const oldPerView = perView;
    computePerView();
    if (oldPerView !== perView || oldPages !== Math.ceil(data.length / perView)) render();
  });
  track.addEventListener('pointerdown', (e) => {
    touchStartX = e.clientX;
    touchDeltaX = 0;
    stopAuto();
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove', (e) => {
    if (touchStartX) touchDeltaX = e.clientX - touchStartX;
  });
  track.addEventListener('pointerup', (e) => {
    if (Math.abs(touchDeltaX) > 48) {
      touchDeltaX < 0 ? nextPage() : prevPage();
    }
    touchStartX = 0;
    touchDeltaX = 0;
    startAuto();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevPage();
    if (e.key === 'ArrowRight') nextPage();
  });

  render();
})();

// home-page-sixth-section

(function () {
  const lanes = document.querySelectorAll('.clients-lane .track');
  

  lanes.forEach((track) => {
    const parent = track.parentElement;
    const minWidth = parent.clientWidth * 2;

    // Duplicate content until we have enough width to scroll seamlessly
    let total = track.scrollWidth;
    while (total < minWidth) {
      track.innerHTML += track.innerHTML;
      total = track.scrollWidth;
    }

    // Keyboard accessibility: focus outlines and enter to open
    track.querySelectorAll('.logo-card').forEach((card) => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    // Recompute on resize
    let resizeTO;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTO);
      resizeTO = setTimeout(() => {
        // No-op: animation adapts with mask; duplication already ensures coverage
      }, 100);
    });
  });
})();
// home-page-footer-section

// Set dynamic copyright year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Newsletter form handling
        const form = document.getElementById('subscribeForm');
        const statusMsg = document.getElementById('statusMessage');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            statusMsg.textContent = `Success! ${email} is on the list.`;
            statusMsg.className = 'msg-box msg-success';
            form.querySelector('input').value = '';
            setTimeout(() => { statusMsg.className = 'msg-box'; }, 5000);
        });

        // home page-arrow up button

        (function () {
            const btn = document.getElementById('backToTop');
            const showAt = 200;
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            function toggleBtn() {
                if (window.scrollY > showAt) {
                    btn.classList.add('show');
                } else {
                    btn.classList.remove('show');
                }
            }

            window.addEventListener('scroll', toggleBtn, { passive: true });
            window.addEventListener('load', toggleBtn);

            btn.addEventListener('click', function (e) {
                e.preventDefault();
                if (prefersReduced) {
                    window.scrollTo(0, 0);
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        })();