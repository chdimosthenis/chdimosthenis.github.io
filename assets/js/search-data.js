// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed journal articles, chapters in edited volumes, and selected conference proceedings. ABS / ABDC / Scopus / WoS rankings shown where applicable. Last updated December 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-citations",
          title: "citations",
          description: "External citations to published research, with the citing venue&#39;s AJG / ABDC / FNEGE / Scopus / WoS indexing where applicable. Cumulative external citations: 461 (all years, as of 4 June 2026).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/citations/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Updated December 2025. The PDF version is the authoritative record; the page below summarises the same content in HTML.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-completed-my-phd-in-economics-at-the-democritus-university-of-thrace-awarded-a-unanimous-10-10-highest-distinction-on-the-energy-transition-in-europe-from-the-perspective-of-international-political-economy-business-ecosystems-and-entrepreneurship-dissertation",
          title: 'Completed my PhD in Economics at the Democritus University of Thrace, awarded a...',
          description: "",
          section: "News",},{id: "news-joined-the-editorial-board-of-societies-mdpi-scopus-q2-wos-if-1-7",
          title: 'Joined the Editorial Board of Societies (MDPI; Scopus Q2; WoS IF 1.7).',
          description: "",
          section: "News",},{id: "news-joined-the-university-of-nicosia-school-of-business-aacsb-accredited-as-adjunct-faculty-across-its-mba-programmes-including-the-online-mba-ranked-in-the-world-top-100-of-the-qs-online-mba-rankings-2026",
          title: 'Joined the University of Nicosia, School of Business (AACSB-accredited), as Adjunct Faculty across...',
          description: "",
          section: "News",},{id: "news-joined-the-international-editorial-board-of-mercados-y-negocios-universidad-de-guadalajara-scopus-q4",
          title: 'Joined the International Editorial Board of Mercados y Negocios (Universidad de Guadalajara; Scopus...',
          description: "",
          section: "News",},{id: "news-co-leading-a-discover-global-society-article-collection-on-energy-geopolitics-in-a-transforming-global-order-manuscripts-on-energy-security-transition-pathways-and-great-power-competition-are-encouraged",
          title: 'Co-leading a Discover Global Society article collection on Energy Geopolitics in a Transforming...',
          description: "",
          section: "News",},{id: "news-serving-as-leading-guest-editor-for-the-sustainability-special-issue-international-economy-business-ecosystems-and-entrepreneurship-implications-for-sustainable-energy-development-submissions-welcome",
          title: 'Serving as Leading Guest Editor for the Sustainability special issue International Economy, Business...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-strategy-amp-amp-leadership-leading-through-complexity-an-integrative-review-and-contingent-innovation-framework-open-access-link-here",
          title: 'New paper out in Strategy &amp;amp;amp; Leadership — “Leading Through Complexity: An Integrative...',
          description: "",
          section: "News",},{id: "news-joined-the-lotus-project-empowering-higher-education-institutions-for-green-amp-amp-digital-innovation-eit-hei-initiative-as-an-external-contributor-the-consortium-is-led-by-the-aristotle-university-of-thessaloniki-with-the-university-of-strasbourg-deusto-university-the-university-of-nicosia-and-ideasforward",
          title: 'Joined the LOTUS project — Empowering Higher Education Institutions for Green &amp;amp;amp; Digital...',
          description: "",
          section: "News",},{id: "news-appointed-associate-editor-of-frontiers-in-political-science-international-studies-section-scopus-q1-wos-if-1-9",
          title: 'Appointed Associate Editor of Frontiers in Political Science (International Studies section; Scopus Q1;...',
          description: "",
          section: "News",},{id: "news-co-editing-a-frontiers-in-political-science-research-topic-world-war-iii-politics-perception-and-the-future-of-global-order-with-emer-prof-badar-a-iqbal-submissions-are-open-through-30-october-2026",
          title: 'Co-editing a Frontiers in Political Science Research Topic — World War III? Politics,...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-euromed-journal-of-business-exporter-species-as-heuristic-forms-a-typology-of-export-marketing-capabilities-in-a-peripheral-region-forthcoming-doi-10-1108-emjb-03-2026-0172",
          title: 'New paper accepted at EuroMed Journal of Business — “Exporter Species as Heuristic...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-world-affairs-dialectical-geopolitics-in-the-multipolar-energy-era-forthcoming-wiley-scopus-q2",
          title: 'New paper accepted at World Affairs — “Dialectical Geopolitics in the Multipolar Energy...',
          description: "",
          section: "News",},{id: "news-citation-milestone-461-cumulative-external-citations-across-the-portfolio-with-a-mean-web-of-science-impact-factor-of-citing-sources-of-3-14-self-citations-excluded-full-point-in-time-record-on-the-citations-page",
          title: 'Citation milestone — 461 cumulative external citations across the portfolio, with a mean...',
          description: "",
          section: "News",},{id: "news-launched-vsme-hellas-an-advisory-practice-helping-greek-smes-prepare-voluntary-sme-vsme-sustainability-statements-under-the-efrag-standard-and-eu-recommendation-2025-1710",
          title: 'Launched VSME Hellas — an advisory practice helping Greek SMEs prepare Voluntary SME...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/chatzinikolaou_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%69%6D%6F%73.%63%68%61%74%7A%69%6E%69%6B%6F%6C%61%6F%75@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2naT3FkAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4138-8828", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57218321522", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Dimos-Chatzinikolaou/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dimos-chatzinikolaou", "_blank");
        },
      },{
        id: 'social-web_of_science',
        title: 'Web_of_science',
        section: 'Socials',
        handler: () => {
          window.open("https://www.webofscience.com/wos/author/record/AAL-6613-2020", "_blank");
        },
      },{
        id: 'social-ssrn',
        title: 'Ssrn',
        section: 'Socials',
        handler: () => {
          window.open("https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3129895", "_blank");
        },
      },{
        id: 'social-ideas_repec',
        title: 'Ideas_repec',
        section: 'Socials',
        handler: () => {
          window.open("https://ideas.repec.org/f/pch1894.html", "_blank");
        },
      },{
        id: 'social-semantic_scholar',
        title: 'Semantic_scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/Dimos-Chatzinikolaou/120444095", "_blank");
        },
      },{
        id: 'social-academia',
        title: 'Academia',
        section: 'Socials',
        handler: () => {
          window.open("https://duth.academia.edu/DimosChatzinikolaou", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
