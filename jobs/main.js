// Curated source guide based on the initial corridor research.
(function () {
  'use strict';

  // Each entry links to a place to search or get employment help. Entries are
  // not claims that a particular vacancy or shift is currently open.
  const sources = {
    'work-now': {
      title: 'Work now',
      intro: 'Near-term work routes. Only the Mountain View Center has a confirmed walk-in process; none of these sources guarantees a placement or shift.',
      items: [
        ['Day Worker Center of Mountain View', 'Mountain View · serves Bay Area workers', 'Free in-person matching for same-day or next-day assignments. Arrive by 8:30 a.m.; call first. Work and hours vary daily.', 'https://www.dayworkercentermv.org/en/for-workers', 'Process confirmed · no job guaranteed'],
        ['San Francisco Day Labor Program', 'San Francisco', 'Mission Action says to call to join. Intake schedule, fees, and current placements still need confirmation.', 'https://www.missionaction.org/our-work/community-engagement-organizing/', 'Call to verify'],
        ['Instawork · San Jose', 'South Bay', 'Hourly shift marketplace. A worker account and screening are required; public pages do not confirm a shift is open.', 'https://www.instawork.com/local-staffing/san-jose', 'Shifts unverified'],
        ['Instawork · San Francisco', 'San Francisco', 'Hourly shift marketplace. Check in the app for current shifts, onboarding, and payout terms.', 'https://www.instawork.com/local-staffing/san-francisco', 'Shifts unverified'],
        ['Qwick', 'San Francisco · hospitality', 'Hospitality shifts require app signup and verification, which can take 2–3 business days. Not a guaranteed same-day option.', 'https://www.qwick.com/browse-gigs/state/california/san-francisco/', 'Setup delay · shifts unverified'],
        ['Indeed · San Jose', 'South Bay', 'Broad hourly-job search. Nearby cities, duplicates, and stale posts appear; verify at the employer site.', 'https://www.indeed.com/jobs?q=&l=San+Jose%2C+CA', 'Check each posting'],
        ['Indeed · San Francisco', 'San Francisco', 'Broad search with nearby-city results, including South San Francisco. Confirm location and freshness.', 'https://www.indeed.com/jobs?q=&l=San+Francisco%2C+CA', 'Check each posting'],
        ['Indeed · Oakland', 'East Bay', 'Local hourly roles surfaced in research, but counts and duplicates are not verified vacancies.', 'https://www.indeed.com/jobs?q=&l=Oakland%2C+CA', 'Check each posting'],
        ['Craigslist gigs', 'Bay Area', 'Open classifieds may include short-notice work, but current listings were not validated. Screen the employer, pay, and terms carefully.', 'https://sfbay.craigslist.org/search/ggg', 'Use extra caution'],
        ['Oakland Workers Collective', 'Oakland', 'Day-labor matching is currently paused with no confirmed restart date. Do not travel expecting placement.', 'https://oaklanddaylabor.com/', 'Paused · do not rely on yet'],
      ],
    },
    'full-time': {
      title: 'Full-time',
      intro: 'Direct employer and public-sector career pages. These are search destinations; review each role’s schedule, qualifications, and closing date.',
      items: [
        ['City of San Jose Careers', 'San Jose', 'Direct city recruitments with public browsing. Applications may require an account and supplemental questions.', 'https://www.governmentjobs.com/careers/sanjoseca', 'Direct employer'],
        ['San Francisco City Careers', 'San Francisco', 'City and County openings with role details and deadlines; applications may continue in another system.', 'https://careers.sf.gov/', 'Direct employer'],
        ['City of Oakland Careers', 'Oakland', 'Official city recruitment portal. Check the individual bulletin because search results can be incomplete.', 'https://www.governmentjobs.com/careers/oaklandca', 'Check live bulletin'],
        ['Stanford Health Care Careers', 'Peninsula · South Bay', 'Healthcare, facilities, hospitality, and administrative job families. Apply through the official site.', 'https://careers.stanfordhealthcare.org/us/en', 'Direct employer'],
        ['Kaiser Permanente Careers', 'Bay Area', 'Search by city and job family. Requirements vary widely; reviewed examples included specialized roles.', 'https://www.kaiserpermanentejobs.org/search-jobs', 'Check role fit'],
        ['UCSF Careers', 'San Francisco · Oakland', 'Official roles include clinical and nonclinical job families. Check each posting for location and credentials.', 'https://careers.ucsf.edu/', 'Direct employer'],
        ['CalCareers', 'Bay Area counties', 'California state jobs searchable by county. Some roles require exams and a CalCareer account.', 'https://calcareers.ca.gov/CalHRPublic/Search/GeographicalJobSearch.aspx', 'Exam may be required'],
        ['SFO Careers', 'SFO · South San Francisco', 'Airport Commission jobs and separate airline, concession, and retail employers use different application routes.', 'https://www.flysfo.com/about/careers', 'Several employers'],
        ['BART Careers', 'East Bay · San Francisco corridor', 'Public transit employer careers. Current openings were not confirmed in the initial search review.', 'https://www.bart.gov/about/jobs', 'Vacancies need recheck'],
        ['CalJOBS', 'Bay Area wide', 'State job and training system. Guest access is available; an account unlocks more job-seeker tools.', 'https://www.caljobs.ca.gov/', 'Broad search · account for tools'],
      ],
    },
    'part-time': {
      title: 'Part-time',
      intro: 'Start with sources that show schedules or hourly roles. Confirm the actual hours and whether the listing is still open.',
      items: [
        ['SFO Business and Career Center Job Board', 'SFO · South San Francisco', 'Airport-area employers list role, schedule, openings, location, and sometimes starting pay. Apply with the employer.', 'https://www.flysfo.com/about/careers/business-and-career-center', 'Schedule and pay shown on samples'],
        ['Indeed · San Jose', 'South Bay', 'Search terms such as “part time” plus a city. Nearby-city leakage and duplicate posts need screening.', 'https://www.indeed.com/jobs?q=part+time&l=San+Jose%2C+CA', 'Aggregator · verify employer'],
        ['Indeed · San Francisco', 'San Francisco', 'Broad part-time search; check commute location, posted date, and employer application.', 'https://www.indeed.com/jobs?q=part+time&l=San+Francisco%2C+CA', 'Aggregator · verify employer'],
        ['Indeed · Oakland', 'East Bay', 'Broad local search; confirm the workplace is in Oakland or reachable by transit.', 'https://www.indeed.com/jobs?q=part+time&l=Oakland%2C+CA', 'Aggregator · verify employer'],
        ['Snagajob', 'Bay Area search needs checking', 'Hourly-work search platform. Bay Area listing volume was not established in the initial review.', 'https://www.snagajob.com/', 'Local results unverified'],
        ['Instawork · San Jose', 'South Bay', 'Hospitality and other flexible shifts through an app; current availability and onboarding need checking.', 'https://www.instawork.com/local-staffing/san-jose', 'App and screening required'],
        ['Instawork · San Francisco', 'San Francisco', 'Flexible shift marketplace; check the app for actual openings and payout eligibility.', 'https://www.instawork.com/local-staffing/san-francisco', 'App and screening required'],
        ['Qwick · San Francisco', 'San Francisco', 'Hospitality shifts. Verification can take 2–3 business days and live shifts are app-only.', 'https://www.qwick.com/browse-gigs/state/california/san-francisco/', 'Setup delay · shifts unverified'],
        ['SFO Careers', 'SFO', 'Check airport commission roles and follow separate links for concession, retail, airline, and service employers.', 'https://www.flysfo.com/about/careers', 'Multiple hiring employers'],
        ['San Francisco JobsNOW!', 'San Francisco · eligibility limited', 'Paid trainee placements and job-search support for qualifying SF residents receiving specified benefits.', 'https://www.sfhsa.org/services/jobs/jobsnow/jobsnow-job-seekers', 'Eligibility required'],
      ],
    },
    temporary: {
      title: 'Temporary',
      intro: 'Staffing and shift sources can move quickly. Confirm who the employer is, assignment length, payroll, and any fees before accepting.',
      items: [
        ['Robert Half · Bay Area', 'South Bay · Peninsula · SF · East Bay', 'Regional offices and dated local roles, especially professional, administrative, and accounting assignments.', 'https://www.roberthalf.com/us/en/locations/ca-san-francisco-bay-area', 'Strongest staffing evidence'],
        ['Aerotek · San Jose', 'San Jose · Bay Area', 'Local industrial and logistics search path. Confirm the assignment, pay, and contractor terms with the recruiter.', 'https://www.aerotek.com/en/locations/united-states/california/san-jose', 'Check current roles'],
        ['Randstad · San Jose', 'South Bay', 'Local logistics and material-handling searches surfaced. Nearby cities can appear in results.', 'https://www.randstadusa.com/jobs/california/san-jose/', 'Check commute and contract'],
        ['Kelly Job Search', 'Bay Area search by city or ZIP', 'Search portal supports location filtering. Local role mix and assignment terms need direct review.', 'https://www.mykelly.com/find-jobs', 'Local results need checking'],
        ['Adecco Job Search', 'Search by city or keyword', 'Official site says candidates are not charged during recruitment. Confirm local role and recruiter identity.', 'https://www.adecco.com/en-us/job-search', 'Never pay to get hired'],
        ['AppleOne', 'Bay Area', 'Staffing source included for comparison; official local job evidence was thin in our initial review.', 'https://www.appleone.com/', 'Local openings need checking'],
        ['Instawork · San Jose', 'South Bay', 'Short shifts through the worker app; availability and onboarding are not visible on the public page.', 'https://www.instawork.com/local-staffing/san-jose', 'Shifts unverified'],
        ['Instawork · San Francisco', 'San Francisco', 'Short shifts through the worker app; confirm cancellation and payout terms before accepting.', 'https://www.instawork.com/local-staffing/san-francisco', 'Shifts unverified'],
        ['Qwick', 'San Francisco · hospitality', 'Hospitality gigs require verification and app access; signup may take several business days.', 'https://www.qwick.com/professionals/', 'Not immediate until approved'],
        ['Day Worker Center of Mountain View', 'Mountain View · serves Bay Area workers', 'Free day-labor matching with a defined in-person process. Daily work is not guaranteed; call before traveling.', 'https://www.dayworkercentermv.org/en/for-workers', 'Process confirmed · no guarantee'],
      ],
    },
    'skilled-trade': {
      title: 'Skilled / Trade',
      intro: 'A mix of direct employers, apprenticeship search, and workforce pathways. Some programs have eligibility rules or paused intake.',
      items: [
        ['California Registered Apprenticeship Search', 'Statewide · filter locally', 'Search registered apprenticeship programs by occupation and area. Confirm current openings with each sponsor.', 'https://www.dir.ca.gov/databases/das/aigstart.asp', 'Pathway search · openings vary'],
        ['West Oakland Job Resource Center', 'Oakland · construction and logistics', 'Specialized training and employer referrals, but weekly orientations are paused until Jan. 13, 2027; address also needs clarification.', 'https://www.wojrc.org/', 'Paused · address needs check'],
        ['Aerotek · San Jose', 'South Bay', 'Industrial, manufacturing, and technical staffing searches. Confirm qualifications and assignment details.', 'https://www.aerotek.com/en/locations/united-states/california/san-jose', 'Staffing route'],
        ['BART Careers', 'East Bay · SF corridor', 'Transit operations, maintenance, and technical careers. Recheck live vacancies and application deadlines.', 'https://www.bart.gov/about/jobs', 'Current vacancies unverified'],
        ['Port of Oakland Job Center', 'Oakland', 'Separates Port jobs from tenant employers; each has its own application route and requirements.', 'https://www.portofoakland.com/jobs/job-center', 'Check employer and deadline'],
        ['City of Oakland Careers', 'Oakland', 'Public-sector technical and trade recruitments appear on the city portal; check the actual bulletin.', 'https://www.governmentjobs.com/careers/oaklandca', 'Check live bulletin'],
        ['City of San Jose Careers', 'San Jose', 'City roles can include maintenance, engineering, and skilled classifications; formal application may be required.', 'https://www.governmentjobs.com/careers/sanjoseca', 'Read role requirements'],
        ['City and County of San Francisco Careers', 'San Francisco', 'Search public works, operations, and technical classifications; check exam and application steps.', 'https://careers.sf.gov/', 'Exam may be required'],
        ['Alameda County Workforce Development Board', 'East Bay', 'Career coaching, training, and on-the-job training may be available after enrollment and eligibility review.', 'https://acwdb.org/job-seekers/', 'Eligibility / enrollment'],
        ['JobTrain', 'Peninsula · includes San Jose intake', 'Training and placement support across several pathways; admission and funding depend on eligibility.', 'https://jobtrainworks.org/', 'Intake and eligibility required'],
      ],
    },
    'just-need-work': {
      title: 'Just need work',
      intro: 'A broad first pass across the corridor. Choose a city, then narrow by schedule, pay, commute, and experience.',
      items: [
        ['Indeed · San Jose', 'South Bay', 'Broad job search. Use a specific role or skill and check the employer’s own application page.', 'https://www.indeed.com/jobs?l=San+Jose%2C+CA', 'Broad · verify each result'],
        ['Indeed · San Francisco', 'San Francisco', 'Broad search with neighboring cities mixed in. Check exact worksite and transit route.', 'https://www.indeed.com/jobs?l=San+Francisco%2C+CA', 'Broad · verify each result'],
        ['Indeed · Oakland', 'East Bay', 'Broad search; research found local roles alongside high counts and repeats.', 'https://www.indeed.com/jobs?l=Oakland%2C+CA', 'Broad · verify each result'],
        ['CalJOBS', 'Bay Area wide', 'State job search and workforce services, including training search and resume tools.', 'https://www.caljobs.ca.gov/', 'Free · account unlocks tools'],
        ['City of San Jose Careers', 'San Jose', 'Direct public employer openings and application instructions.', 'https://www.governmentjobs.com/careers/sanjoseca', 'Direct employer'],
        ['San Francisco City Careers', 'San Francisco', 'Direct city and county openings; review deadlines and role requirements.', 'https://careers.sf.gov/', 'Direct employer'],
        ['City of Oakland Careers', 'Oakland', 'Direct city openings. Recheck individual bulletins for active status.', 'https://www.governmentjobs.com/careers/oaklandca', 'Direct employer · verify'],
        ['SFO Business and Career Center', 'SFO · South San Francisco', 'Public airport-area job board and career support; employers handle applications directly.', 'https://www.flysfo.com/about/careers/business-and-career-center', 'Local roles · check dates'],
        ['work2future', 'San Jose area', 'No-cost public career support, appointments, coaching, workshops, and training pathways.', 'https://www.work2future.org/', 'Service intake may apply'],
        ['NOVAworks', 'Peninsula · north Santa Clara County', 'No-cost career services and workshops. Its Santa Clara service area does not include San Jose proper.', 'https://novaworks.org/career-seekers/', 'Check city eligibility'],
      ],
    },
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);

  const resultsPanel = document.querySelector('#category-results');
  const categorySection = document.querySelector('.category-section');
  const categoryButtons = [...document.querySelectorAll('[data-select-category]')];
  const searchInput = document.querySelector('#job-search');
  const locationSelect = document.querySelector('#job-location');
  const freshnessSelect = document.querySelector('#job-freshness');
  const clearSearchButton = document.querySelector('#clear-job-search');
  let activeCategory = 'work-now';

  const searchSites = [
    {
      name: 'CalJOBS',
      status: 'California state job search',
      detail: 'Official California job-search system. Enter your keyword and location on CalJOBS; date range may need to be set there.',
      makeUrl: () => 'https://www.caljobs.ca.gov/',
      dateNote: true,
      detailClass: 'source-detail-highlight',
    },
    {
      name: 'Indeed',
      status: 'Broad results · verify location and duplicates',
      detail: 'Indeed searches across employer and aggregated postings. Confirm the posting date, exact worksite, and employer application page.',
      makeUrl: (term, area, days) => {
        const params = new URLSearchParams({ q: term, l: area });
        if (days) params.set('fromage', days);
        return `https://www.indeed.com/jobs?${params}`;
      },
    },
    {
      name: 'LinkedIn Jobs',
      status: 'Account prompts may appear · local mix varies',
      detail: 'Search LinkedIn Jobs for this role and area. Our initial review found it more promising for professional and skilled roles; check listing freshness.',
      makeUrl: (term, area, days) => {
        const params = new URLSearchParams({ keywords: term, location: area });
        if (days) params.set('f_TPR', `r${Number(days) * 86400}`);
        return `https://www.linkedin.com/jobs/search/?${params}`;
      },
    },
    {
      name: 'ZipRecruiter',
      status: 'Supplemental · verify employer and pay',
      detail: 'Search role and area on ZipRecruiter. Results may include duplicates, recruiter reposts, or estimated pay.',
      makeUrl: (term, area) => `https://www.ziprecruiter.com/jobs-search?${new URLSearchParams({ search: term, location: area })}`,
    },
    {
      name: 'Google Jobs search',
      status: 'Search result quality not fully reviewed',
      detail: 'Search Google for openings matching this role and area. Open the original employer posting and verify it is still active.',
      makeUrl: (term, area, days) => {
        const params = new URLSearchParams({ q: `jobs ${term} near ${area}` });
        if (days) params.set('tbs', days <= 1 ? 'qdr:d' : days <= 7 ? 'qdr:w' : 'qdr:m');
        return `https://www.google.com/search?${params}`;
      },
    },
  ];

  function renderPanel(title, intro, items) {
    if (!resultsPanel) return;
    resultsPanel.innerHTML = `
      <div class="source-panel-heading">
        <div>
          <span class="resource-count">${items.length} ${items.length === 1 ? 'result' : 'results'} · Initial research</span>
          <h3 id="source-category-title" aria-live="polite">${escapeHtml(title)}</h3>
        </div>
        <p>${escapeHtml(intro)}</p>
      </div>
      <ol class="source-list">
        ${items.map(({ name, region, detail, url, status, detailClass }, index) => `
          <li class="source-row">
            <span class="source-index">${String(index + 1).padStart(2, '0')}</span>
            <div class="source-copy">
              <div class="source-meta"><span>${escapeHtml(region)}</span><span class="source-status">${escapeHtml(status)}</span></div>
              <h4>${escapeHtml(name)}</h4>
              <p class="${detailClass || ''}">${escapeHtml(detail)}</p>
            </div>
            <a class="source-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="Search ${escapeHtml(name)} in a new tab"><span aria-hidden="true">↗</span></a>
          </li>`).join('')}
      </ol>`;
  }

  function showCategory(key) {
    const category = sources[key];
    if (!category || !resultsPanel) return;
    activeCategory = key;
    categorySection?.classList.remove('searching');

    categoryButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.selectCategory === key));
    });
    const items = category.items.map(([name, region, detail, url, status]) => ({
      name, region, detail, url, status,
    }));
    renderPanel(`${category.title} · ${items.length} starting points`, category.intro, items);
  }

  function searchJobSites() {
    const term = searchInput?.value.trim();
    if (!term) return showCategory(activeCategory);
    categoryButtons.forEach((button) => button.setAttribute('aria-pressed', 'false'));
    if (clearSearchButton) clearSearchButton.hidden = false;
    const area = locationSelect?.value || 'San Francisco Bay Area';
    const days = Number(freshnessSelect?.value ?? 7);
    categorySection?.classList.add('searching');
    const items = searchSites.map((site) => ({
      name: site.name,
      region: area,
      detail: days && site.dateNote
        ? `${site.detail} Apply a date filter on the site if available.`
        : site.detail,
      detailClass: site.detailClass,
      url: site.makeUrl(term, area, days),
      status: !days ? site.status
        : ['Indeed', 'LinkedIn Jobs'].includes(site.name)
          ? `${site.status} · posted in past ${days === 1 ? '24 hours' : `${days} days`}`
          : site.name === 'Google Jobs search'
            ? `${site.status} · page freshness filter; check job date`
          : `${site.status} · date filter may need setting`,
    }));
    renderPanel(`Search for “${term}”`, 'These links send your search to each outside site. Their listings may be current, outdated, duplicated, or unsuitable; confirm details with the employer.', items);
  }

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (clearSearchButton) clearSearchButton.hidden = true;
      showCategory(button.dataset.selectCategory);
    });
  });
  searchInput?.addEventListener('input', searchJobSites);
  locationSelect?.addEventListener('change', () => {
    if (searchInput?.value.trim()) searchJobSites();
  });
  freshnessSelect?.addEventListener('change', () => {
    if (searchInput?.value.trim()) searchJobSites();
  });
  clearSearchButton?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    clearSearchButton.hidden = true;
    showCategory(activeCategory);
    searchInput?.focus();
  });
  showCategory('work-now');

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.hidden = expanded;
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
