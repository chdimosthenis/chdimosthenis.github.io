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
          description: "External citations to published research, with the citing venue&#39;s AJG / ABDC / FNEGE / Scopus / WoS indexing where applicable. Cumulative external citations: 520 (all years, as of 10 July 2026).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/citations/";
          },
        },{id: "nav-research-themes",
          title: "research themes",
          description: "A verification ledger mapping the full 48-work portfolio (46 published, 2 forthcoming) onto 9 controlled research domains, with the per-venue AJG / ABDC / Scopus / WoS / FNEGE / EconLit indexing for each work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/themes/";
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
        },{id: "news-new-paper-out-in-the-journal-of-entrepreneurship-in-emerging-economies-emerald-crisis-innovation-and-change-management-a-blind-spot-for-micro-firms-with-ch-vlados-ajg-1-scopus-q1-wos-if-2-9-read-it",
          title: 'New paper out in the Journal of Entrepreneurship in Emerging Economies (Emerald) —...',
          description: "",
          section: "News",},{id: "news-awarded-a-full-registration-fee-waiver-for-the-35th-annual-eaepe-conference-power-and-empowerment-in-times-of-multiple-crisis-after-evaluation-of-the-full-paper-leeds-uk-13-15-september-2023",
          title: 'Awarded a full registration-fee waiver for the 35th Annual EAEPE Conference — “Power...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-the-japanese-political-economy-taylor-amp-amp-francis-russo-ukrainian-war-and-the-emerging-new-globalization-a-critical-review-of-relevant-research-with-ch-vlados-ajg-1-scopus-q3-read-it",
          title: 'New paper out in The Japanese Political Economy (Taylor &amp;amp;amp; Francis) — Russo-Ukrainian...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-the-journal-of-global-responsibility-emerald-the-emergence-of-the-new-globalization-the-approach-of-the-evolutionary-structural-triptych-with-ch-vlados-ajg-1-scopus-q2-wos-if-1-6-read-it",
          title: 'New paper out in the Journal of Global Responsibility (Emerald) — The Emergence...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-the-journal-of-the-knowledge-economy-springer-public-support-for-business-intermediary-organizations-and-knowledge-transfer-critical-development-and-innovation-policy-bottlenecks-with-ch-vlados-ajg-1-scopus-q2-wos-if-3-3-read-it",
          title: 'New paper out in the Journal of the Knowledge Economy (Springer) — Public...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-the-international-journal-of-global-environmental-issues-inderscience-why-the-cptpp-could-be-an-impetus-for-the-new-globalisation-with-ch-vlados-in-the-special-issue-on-the-tpp-cptpp-and-global-trade-forthcoming-scopus-q4",
          title: 'New paper accepted at the International Journal of Global Environmental Issues (Inderscience) —...',
          description: "",
          section: "News",},{id: "news-completed-my-phd-in-economics-at-the-democritus-university-of-thrace-awarded-a-unanimous-10-10-highest-distinction-on-the-energy-transition-in-europe-from-the-perspective-of-international-political-economy-business-ecosystems-and-entrepreneurship-dissertation",
          title: 'Completed my PhD in Economics at the Democritus University of Thrace, awarded a...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-the-international-journal-of-energy-economics-and-policy-econjournals-the-ecosystems-perspective-in-energy-research-a-new-field-is-born-with-ch-vlados-and-a-kokkinaki-abdc-c-scopus-q2-econlit-open-access-read-it",
          title: 'New paper out in the International Journal of Energy Economics and Policy (EconJournals)...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-energies-mdpi-on-a-new-sustainable-energy-policy-exploring-a-macro-meso-micro-synthesis-with-ch-vlados-scopus-q1-wos-if-3-0-open-access-read-it",
          title: 'New paper out in Energies (MDPI) — On a New Sustainable Energy Policy:...',
          description: "",
          section: "News",},{id: "news-joined-the-editorial-board-of-societies-mdpi-scopus-q2-wos-if-1-7",
          title: 'Joined the Editorial Board of Societies (MDPI; Scopus Q2; WoS IF 1.7).',
          description: "",
          section: "News",},{id: "news-joined-the-university-of-nicosia-school-of-business-aacsb-accredited-as-adjunct-faculty-across-its-mba-programmes-including-the-online-mba-ranked-in-the-world-top-100-of-the-qs-online-mba-rankings-2026",
          title: 'Joined the University of Nicosia, School of Business (AACSB-accredited), as Adjunct Faculty across...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-sustainability-mdpi-integrating-sustainable-energy-development-with-energy-ecosystems-trends-and-future-prospects-in-greece-scopus-q1-wos-if-3-3-open-access-read-it",
          title: 'New paper out in Sustainability (MDPI) — Integrating Sustainable Energy Development with Energy...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-energies-mdpi-energy-entrepreneurship-in-the-emerging-new-globalization-a-macro-meso-micro-perspective-with-evidence-from-a-less-developed-regional-ecosystem-with-ch-vlados-scopus-q1-wos-if-3-0-open-access-read-it",
          title: 'New paper out in Energies (MDPI) — Energy Entrepreneurship in the Emerging New...',
          description: "",
          section: "News",},{id: "news-joined-the-lotus-project-empowering-higher-education-institutions-for-green-amp-amp-digital-innovation-eit-hei-initiative-as-an-external-contributor-the-consortium-is-led-by-the-aristotle-university-of-thessaloniki-with-the-university-of-strasbourg-deusto-university-the-university-of-nicosia-and-ideasforward",
          title: 'Joined the LOTUS project — Empowering Higher Education Institutions for Green &amp;amp;amp; Digital...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-smart-cities-mdpi-on-smart-cities-and-triple-helix-intermediaries-a-critical-realist-perspective-scopus-q1-wos-if-7-0-open-access-read-it",
          title: 'New paper out in Smart Cities (MDPI) — On Smart Cities and Triple-Helix...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-frontiers-in-political-science-the-transformational-crisis-of-globalization-and-the-contingent-trajectories-towards-innovative-liberalism-with-ch-vlados-scopus-q1-wos-if-2-3-open-access-read-it",
          title: 'New paper out in Frontiers in Political Science — The Transformational Crisis of...',
          description: "",
          section: "News",},{id: "news-joined-the-international-editorial-board-of-mercados-y-negocios-universidad-de-guadalajara-scopus-q4",
          title: 'Joined the International Editorial Board of Mercados y Negocios (Universidad de Guadalajara; Scopus...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-the-journal-of-entrepreneurship-sage-from-business-ecosystems-to-firm-physiology-the-strategy-technology-management-evolutionary-synthesis-with-ch-vlados-ajg-1-scopus-q2-wos-if-2-7-read-it",
          title: 'New paper out in The Journal of Entrepreneurship (Sage) — From Business Ecosystems...',
          description: "",
          section: "News",},{id: "news-co-leading-a-discover-global-society-article-collection-on-energy-geopolitics-in-a-transforming-global-order-manuscripts-on-energy-security-transition-pathways-and-great-power-competition-are-encouraged",
          title: 'Co-leading a Discover Global Society article collection on Energy Geopolitics in a Transforming...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-frontiers-in-political-science-the-rcep-in-an-emerging-multipolar-order-examining-energy-transition-implications-with-ch-vlados-scopus-q1-wos-if-2-3-open-access-read-it",
          title: 'New paper out in Frontiers in Political Science — The RCEP in an...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-perspectives-on-global-development-and-technology-brill-advancing-international-political-economy-the-evolutionary-structural-triptych-and-the-global-competitiveness-web-with-ch-vlados-forthcoming-scopus-q3-wos-if-0-4",
          title: 'New paper accepted at Perspectives on Global Development and Technology (Brill) — Advancing...',
          description: "",
          section: "News",},{id: "news-serving-as-leading-guest-editor-for-the-sustainability-special-issue-international-economy-business-ecosystems-and-entrepreneurship-implications-for-sustainable-energy-development-submissions-welcome",
          title: 'Serving as Leading Guest Editor for the Sustainability special issue International Economy, Business...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-strategy-amp-amp-leadership-leading-through-complexity-an-integrative-review-and-contingent-innovation-framework-open-access-link-here",
          title: 'New paper out in Strategy &amp;amp;amp; Leadership — “Leading Through Complexity: An Integrative...',
          description: "",
          section: "News",},{id: "news-served-on-the-event-committee-of-the-1st-international-online-conference-on-societies-societal-challenges-opportunities-and-achievement-societies-mdpi-scopus-q2-wos-if-1-7-21-23-january-2026",
          title: 'Served on the Event Committee of the 1st International Online Conference on Societies...',
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
          section: "News",},{id: "news-launched-vsme-hellas-an-advisory-practice-helping-greek-smes-prepare-voluntary-sme-vsme-sustainability-statements-under-the-efrag-standard-and-eu-recommendation-2025-1710",
          title: 'Launched VSME Hellas — an advisory practice helping Greek SMEs prepare Voluntary SME...',
          description: "",
          section: "News",},{id: "news-new-article-out-in-euromed-journal-of-business-emerald-exporter-species-as-heuristic-forms-a-typology-of-export-marketing-capabilities-in-a-peripheral-region-open-access-cc-by-4-0-it-develops-a-physiology-based-stra-tech-man-typology-of-exporter-forms-across-23-firms-in-eastern-macedonia-and-thrace-read-it",
          title: 'New article out in EuroMed Journal of Business (Emerald) — Exporter Species as...',
          description: "",
          section: "News",},{id: "news-new-co-authored-conference-contribution-with-ch-vlados-and-i-gkodosidis-we-submitted-the-abstract-evolutionary-political-economy-the-stra-tech-man-approach-and-the-competitiveness-web-in-the-contemporary-phase-of-transition-towards-the-new-globalization-to-the-5th-panhellenic-conference-on-international-political-economy-tectonic-shifts-in-international-political-economy-contemporary-theories-interpretations-and-challenges-athens-8-10-october-2026",
          title: 'New co-authored conference contribution with Ch. Vlados and I. Gkodosidis: we submitted the...',
          description: "",
          section: "News",},{id: "news-citation-milestone-520-cumulative-external-citations-across-the-portfolio-with-an-external-h-index-of-11-and-a-mean-web-of-science-impact-factor-of-citing-sources-of-3-2-self-citations-excluded-full-point-in-time-record-on-the-citations-page",
          title: 'Citation milestone — 520 cumulative external citations across the portfolio, with an external...',
          description: "",
          section: "News",},{id: "news-now-out-in-the-international-journal-of-global-environmental-issues-inderscience-why-the-cptpp-could-be-an-impetus-for-the-new-globalisation-with-ch-vlados-in-the-special-issue-on-the-tpp-cptpp-and-global-trade-vol-24-no-4-pp-332-356-scopus-q4-read-it",
          title: 'Now out in the International Journal of Global Environmental Issues (Inderscience): Why the...',
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
        id: 'social-ideas_repec',
        title: 'Ideas_repec',
        section: 'Socials',
        handler: () => {
          window.open("https://ideas.repec.org/f/pch1894.html", "_blank");
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
