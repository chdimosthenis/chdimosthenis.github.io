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
        },{id: "nav-cv",
          title: "cv",
          description: "Updated December 2025. The PDF version is the authoritative record; the page below summarises the same content in HTML.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-co-leading-a-discover-global-society-article-collection-on-energy-geopolitics-in-a-transforming-global-order-manuscripts-on-energy-security-transition-pathways-and-great-power-competition-are-encouraged",
          title: 'Co-leading a Discover Global Society article collection on Energy Geopolitics in a Transforming...',
          description: "",
          section: "News",},{id: "news-serving-as-leading-guest-editor-for-the-sustainability-special-issue-international-economy-business-ecosystems-and-entrepreneurship-implications-for-sustainable-energy-development-submissions-welcome",
          title: 'Serving as Leading Guest Editor for the Sustainability special issue International Economy, Business...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-strategy-amp-amp-leadership-leading-through-complexity-an-integrative-review-and-contingent-innovation-framework-open-access-link-here",
          title: 'New paper out in Strategy &amp;amp;amp; Leadership — “Leading Through Complexity: An Integrative...',
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
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
