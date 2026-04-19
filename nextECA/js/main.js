// ============================================
// nextECA — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTicker();
  initOpportunities();
  initCountries();
  initUniversities();
  initUpdates();
  initCounterAnimation();
  initScrollAnimations();
  initHamburger();
});

// ====== NAVBAR ======
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ====== HAMBURGER ======
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// ====== TICKER ======
function initTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track || !ECA_DATA.deadlines) return;

  const items = ECA_DATA.deadlines;
  // Duplicate for infinite scroll
  const html = [...items, ...items].map(d =>
    `<div class="ticker-item"><span>⏰</span> ${d.title} — <strong>${d.date}</strong></div>`
  ).join('');
  track.innerHTML = html;
}

// ====== OPPORTUNITIES ======
let currentFilter = 'all';

function initOpportunities() {
  const grid = document.getElementById('oppGrid');
  if (!grid) return;

  renderOpportunities();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderOpportunities();
    });
  });
}

function renderOpportunities() {
  const grid = document.getElementById('oppGrid');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? ECA_DATA.opportunities
    : ECA_DATA.opportunities.filter(o => o.type === currentFilter);

  const shown = filtered.slice(0, 9);

  grid.innerHTML = shown.map(o => {
    const daysLeft = getDaysLeft(o.deadline);
    const badgeClass = daysLeft <= 7 ? 'deadline-urgent' : daysLeft <= 30 ? 'deadline-soon' : 'deadline-normal';
    const badgeText = daysLeft < 0 ? 'Closed' : daysLeft === 0 ? 'Today!' : `${daysLeft} days left`;

    return `
      <div class="opp-card fade-up">
        <div class="opp-card-top">
          <span class="opp-type">${capitalize(o.type)}</span>
          <span class="opp-country">${o.country}</span>
        </div>
        <h3>${o.title}</h3>
        <p>${o.description}</p>
        <div class="opp-meta">
          <span class="deadline-badge ${badgeClass}">🗓 ${formatDate(o.deadline)} · ${badgeText}</span>
          <a href="${o.link}" target="_blank" class="opp-link">Register →</a>
        </div>
      </div>
    `;
  }).join('');

  // Re-trigger animations
  requestAnimationFrame(() => {
    document.querySelectorAll('.opp-card.fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

// ====== COUNTRIES ======
function initCountries() {
  const list = document.getElementById('countryList');
  if (!list) return;

  list.innerHTML = ECA_DATA.countries.map(c => `
    <a href="pages/international.html?country=${encodeURIComponent(c.name)}" class="country-card fade-up">
      <div class="country-flag">${c.flag}</div>
      <div class="country-info">
        <h4>${c.name}</h4>
        <span>${c.count}</span>
      </div>
    </a>
  `).join('');
}

// ====== UNIVERSITIES ======
function initUniversities() {
  const grid = document.getElementById('uniGrid');
  if (!grid) return;

  grid.innerHTML = ECA_DATA.universities.map(u => `
    <div class="uni-card fade-up">
      <div class="uni-rank">${u.rank}</div>
      <h3>${u.name}</h3>
      <div class="uni-country">${u.country}</div>
      <div class="uni-tags">
        ${u.tags.map(t => `<span class="uni-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ====== UPDATES ======
function initUpdates() {
  const grid = document.getElementById('updatesGrid');
  if (!grid) return;

  grid.innerHTML = ECA_DATA.updates.map(u => `
    <div class="update-card fade-up">
      <div class="update-meta">
        <span class="update-tag">${u.tag}</span>
        <span class="update-date">${u.date}</span>
      </div>
      <h3>${u.title}</h3>
      <p>${u.text}</p>
      <a href="${u.link}" class="update-link">Read More →</a>
    </div>
  `).join('');
}

// ====== COUNTER ANIMATION ======
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, 16);
}

// ====== SCROLL ANIMATIONS ======
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up:not(.opp-card)').forEach(el => {
    observer.observe(el);
  });

  // Re-run on DOM mutations (for dynamically added cards)
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.fade-up:not(.visible):not(.opp-card)').forEach(el => {
      observer.observe(el);
    });
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

// ====== REMINDER SUBSCRIPTION ======
function subscribeReminder() {
  const email = document.getElementById('reminderEmail').value;
  const msg = document.getElementById('reminderMsg');
  const checks = document.querySelectorAll('.reminder-cats input:checked');

  if (!email || !email.includes('@')) {
    if (msg) { msg.style.color = '#E8000D'; msg.textContent = 'Please enter a valid email address.'; }
    return;
  }
  if (!checks.length) {
    if (msg) { msg.style.color = '#E8000D'; msg.textContent = 'Please select at least one category.'; }
    return;
  }

  const cats = Array.from(checks).map(c => c.value).join(', ');
  // In production, POST to /api/subscribe
  console.log('Subscribe:', email, cats);
  if (msg) {
    msg.style.color = '#00c864';
    msg.textContent = `✓ Subscribed! You'll receive reminders for: ${cats}`;
  }
}

// ====== HELPERS ======
function getDaysLeft(dateStr) {
  const now = new Date(); now.setHours(0,0,0,0);
  const deadline = new Date(dateStr);
  return Math.round((deadline - now) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
