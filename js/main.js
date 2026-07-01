/* ════════════════════════════════════════════════════════════════════
   TapFlow Landingpage — Logic
   ════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  // Prevent the browser from restoring the previous scroll position (or jumping
  // to a leftover #hash from earlier navigation) on reload — always start at the top.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
  window.addEventListener('load', () => window.scrollTo(0, 0));

  /* ───────────────────────── i18n ───────────────────────── */
  const dict = {
    de: {
      'nav.privacy':'Privatsphäre', 'nav.insights':'Analyse', 'nav.screens':'App', 'nav.premium':'Premium', 'nav.faq':'FAQ', 'nav.cta':'Launch',

      'hero.kicker':'Lokal. Verschlüsselt. Nur deins.',
      'hero.title1':'Deine Zahlen.',
      'hero.sub':'TapFlow rechnet, sortiert und erklärt deine Finanzen direkt auf deinem Gerät — kein Server sieht jemals einen Cent davon.',
      'hero.cta1':'Mehr erfahren', 'hero.cta2':'Wie die Analyse funktioniert',
      'hero.stat1':'Server sehen deine Daten', 'hero.stat2':'% bleibt auf deinem Gerät', 'hero.stat3':'für Reports & Export, kündbar',

      'app.title':'TapFlow', 'app.month':'Juni 2026', 'app.greeting':'Guten Abend', 'app.username':'Jake',
      'app.totalBalance':'GESAMTGUTHABEN', 'app.income':'Einnahmen', 'app.expenses':'Ausgaben', 'app.recent':'Letzte Transaktionen',

      'privacy.kicker':'Privatsphäre',
      'privacy.title':'Deine Daten gehören <span class="underline-draw">dir</span>. Sonst niemandem.',
      'privacy.lead':'Keine Bank-Logins, kein Tracking, kein Server, der mitliest. TapFlow ist so gebaut, dass es deine Finanzen technisch gar nicht weggeben kann.',
      'privacy.p1.title':'Kein Server.', 'privacy.p1.text':'Transaktionen, Ziele und Budgets verlassen dein Gerät nie.',
      'privacy.p2.title':'Kein Tracking.', 'privacy.p2.text':'Wir verkaufen keine Daten — weil wir keine besitzen, die wir verkaufen könnten.',
      'privacy.p3.title':'Du entscheidest.', 'privacy.p3.text':'Ein Export verlässt dein Gerät nur, wenn du selbst auf „Teilen” tippst.',
      'privacy.node1.title':'Dein Gerät', 'privacy.node1.text':'Alle Berechnungen passieren hier',
      'privacy.node2.title':'Verschlüsselt & lokal', 'privacy.node2.text':'Kein Cloud-Sync, kein Konto-Login nötig',
      'privacy.node3.title':'Server: kein Zugriff', 'privacy.node3.text':'Es gibt schlicht keinen, der mitlesen könnte',

      'features.kicker':'Funktionen', 'features.title':'Alles, was dein Konto wirklich braucht',
      'features.f1.title':'Sparziele', 'features.f1.text':'Setz dir Ziele mit Emoji & Zielbetrag — einzahlen, entnehmen, Fortschritt live sehen.',
      'features.f2.title':'Kategorie-Budgets', 'features.f2.text':'Monatslimits pro Kategorie — TapFlow warnt dich, bevor es zu spät ist.',
      'features.f3.title':'Beleg-Scanner', 'features.f3.text':'Foto vom Kassenzettel — Betrag, Kategorie & Name werden automatisch erkannt, auf dem Gerät.',
      'features.f4.title':'Wiederkehrende Kosten', 'features.f4.text':'Miete, Abos & Co. einmal anlegen — TapFlow erinnert sich jeden Monat.',
      'features.f5.title':'Biometric Lock', 'features.f5.text':'Face ID, Fingerprint oder App-PIN — niemand außer dir öffnet die App.',
      'features.f6.title':'DE & EN', 'features.f6.text':'Komplett zweisprachig — die App spricht deine Sprache, sofort.',

      'insights.kicker':'Analyse',
      'insights.title':'Du siehst nicht nur, was du ausgegeben hast. Du verstehst <span class="underline-draw">warum</span>.',
      'insights.lead':'Das ist unser Kern: TapFlow rechnet jeden Monat live aus, wohin dein Geld fließt, wo es sich häuft und wie du im Vergleich zu Gleichaltrigen stehst — alles lokal berechnet, nichts beschönigt.',
      'insights.c1.tag':'Ausgaben-Breakdown', 'insights.c1.note':'In Sekunden siehst du, welche Kategorie wirklich an deinem Geld zieht.',
      'insights.c2.tag':'6-Monats-Trend', 'insights.c2.note':'Einnahmen und Ausgaben nebeneinander — Muster fallen sofort auf.',
      'insights.c3.tag':'Sparquote im Vergleich', 'insights.c3.you':'Deine Quote', 'insights.c3.peers':'Ø Alter 29',
      'insights.c3.note':'Ein ehrlicher Vergleich statt Bauchgefühl — komplett anonym berechnet, nur für dich sichtbar.',
      'insights.c4.tag':'Budget-Warnung', 'insights.c4.note':'TapFlow meldet sich, bevor das Limit reißt — nicht erst danach.',
      'cat.groceries':'Lebensmittel', 'cat.housing':'Wohnen', 'cat.leisure':'Freizeit', 'cat.savings':'Sparen',

      'screens.kicker':'Die App', 'screens.title':'Jeder Screen durchdacht', 'screens.sub':'Tippe durch die wichtigsten Ansichten von TapFlow.',
      'screens.tab.home':'Home', 'screens.tab.insights':'Insights', 'screens.tab.add':'Hinzufügen', 'screens.tab.budget':'Budget', 'screens.tab.scanner':'Scanner', 'screens.tab.onboarding':'Onboarding', 'screens.tab.profile':'Profil',
      'screens.home.title':'Alles auf einen Blick', 'screens.home.text':'Saldo, Einnahmen, Ausgaben und Sparziele — direkt nach dem Öffnen. Wische seitlich, um zwischen Tabs zu springen.',
      'screens.home.b1':'Monatsweise Navigation', 'screens.home.b2':'Swipe zum Bearbeiten / Löschen', 'screens.home.b3':'Live-Sparziel-Fortschritt',

      'themes.kicker':'Designs', 'themes.title':'6 Looks. Ein Tap.', 'themes.sub':'Light, Dark, AMOLED, Ocean, Rose oder Sky — wechsle jederzeit im Profil.',

      'how.kicker':'Ablauf', 'how.title':'In vier Schritten im Fluss',
      'how.s1.title':'Onboarding', 'how.s1.text':'Name, Gehalt, Gehaltstag, PIN — in unter einer Minute startklar.',
      'how.s2.title':'Erfassen', 'how.s2.text':'Manuell eintragen oder Beleg scannen lassen.',
      'how.s3.title':'Ziele setzen', 'how.s3.text':'Budgets pro Kategorie & Sparziele mit Emoji anlegen.',
      'how.s4.title':'Verstehen', 'how.s4.text':'Insights zeigen dir, wohin dein Geld wirklich fließt.',

      'premium.kicker':'Premium',
      'premium.title':'Die App bleibt gratis & privat. Premium ist optional.',
      'premium.lead':'Budget, Sparziele und Analyse kosten dauerhaft nichts. Wer Berichte zum Abheften oder einen Wechsel zwischen Geräten braucht, schaltet das mit Premium frei.',
      'premium.l1':'PDF-Monatsberichte zum Teilen oder Abheften',
      'premium.l2':'Backup-Export & Import zwischen Geräten',
      'premium.l3':'Neue Funktionen — laufend mehr, ohne Aufpreis',
      'premium.l3future':'Weitere Funktionen folgen automatisch',
      'premium.cardTag':'TapFlow Premium', 'premium.perMonth':'/ Monat',
      'premium.cta':'Premium kommt bald', 'premium.cancel':'Später jederzeit kündbar — kein Kleingedrucktes.',

      'faq.kicker':'FAQ', 'faq.title':'Gut zu wissen',
      'faq.q1':'Ist TapFlow kostenlos?', 'faq.a1':'Ja — und aktuell ist alles kostenlos. Budget, Sparziele, Beleg-Scanner und Analyse bleiben dauerhaft gratis. Premium (geplant, 4,99€/Monat) wird später PDF-Reports und Import/Export freischalten und jederzeit kündbar sein.',
      'faq.q2':'Werden meine Daten in der Cloud gespeichert?', 'faq.a2':'Nein. TapFlow speichert ausschließlich lokal auf deinem Gerät. Es gibt keinen Server, der deine Transaktionen je sieht. Einen Export teilst du nur, wenn du es selbst auslöst.',
      'faq.q3':'Was kostet Premium?', 'faq.a3':'Premium ist geplant und noch nicht verfügbar — derzeit fallen keine Kosten an. Sobald es startet, kostet es 4,99€/Monat und ist mit einem Tap im Profil zum Monatsende kündbar. Keine Mindestlaufzeit.',
      'faq.q4':'Wann startet TapFlow?', 'faq.a4':'TapFlow ist aktuell in aktiver Entwicklung. Schau einfach bald wieder vorbei — der Launch wird hier angekündigt.',

      'cta.title':'Sei beim Launch dabei', 'cta.sub':'TapFlow ist in aktiver Entwicklung und erscheint bald in den App Stores.',
      'cta.placeholder':'du@email.com', 'cta.button':'Eintragen', 'cta.success':'Danke! Wir melden uns, sobald es losgeht. 🎉',
      'cta.consent':'Ich stimme zu, dass meine E-Mail zur Launch-Benachrichtigung gespeichert wird. (<a href="datenschutz.html">Datenschutzerklärung</a>)',
      'cta.storeSoon1':'App Store — bald', 'cta.storeSoon2':'Google Play — bald',
      'footer.tag':'Deine Zahlen. Privat verstanden.', 'footer.rights':'Alle Rechte vorbehalten.',
    },
    en: {
      'nav.privacy':'Privacy', 'nav.insights':'Insights', 'nav.screens':'App', 'nav.premium':'Premium', 'nav.faq':'FAQ', 'nav.cta':'Launch',

      'hero.kicker':'Local. Encrypted. Yours alone.',
      'hero.title1':'Your numbers.',
      'hero.sub':'TapFlow calculates, sorts and explains your finances right on your device — no server ever sees a single cent of it.',
      'hero.cta1':'Learn more', 'hero.cta2':'See how the analysis works',
      'hero.stat1':'servers see your data', 'hero.stat2':'% stays on your device', 'hero.stat3':'for reports & export, cancel anytime',

      'app.title':'TapFlow', 'app.month':'June 2026', 'app.greeting':'Good evening', 'app.username':'Jake',
      'app.totalBalance':'TOTAL BALANCE', 'app.income':'Income', 'app.expenses':'Expenses', 'app.recent':'Recent Transactions',

      'privacy.kicker':'Privacy',
      'privacy.title':'Your data belongs to <span class="underline-draw">you</span>. No one else.',
      'privacy.lead':'No bank logins, no tracking, no server reading along. TapFlow is built so it technically cannot hand your finances to anyone.',
      'privacy.p1.title':'No server.', 'privacy.p1.text':'Transactions, goals and budgets never leave your device.',
      'privacy.p2.title':'No tracking.', 'privacy.p2.text':'We don\'t sell data — because we don\'t own any to sell.',
      'privacy.p3.title':'You decide.', 'privacy.p3.text':'An export only leaves your device when you tap "Share" yourself.',
      'privacy.node1.title':'Your device', 'privacy.node1.text':'Every calculation happens right here',
      'privacy.node2.title':'Encrypted & local', 'privacy.node2.text':'No cloud sync, no account login required',
      'privacy.node3.title':'Server: no access', 'privacy.node3.text':'There simply isn\'t one that could read along',

      'features.kicker':'Features', 'features.title':'Everything your account actually needs',
      'features.f1.title':'Savings Goals', 'features.f1.text':'Set goals with emoji & target amount — deposit, withdraw, watch progress live.',
      'features.f2.title':'Category Budgets', 'features.f2.text':'Monthly limits per category — TapFlow warns you before it\'s too late.',
      'features.f3.title':'Receipt Scanner', 'features.f3.text':'Snap a receipt — amount, category & name detected automatically, on-device.',
      'features.f4.title':'Recurring Expenses', 'features.f4.text':'Rent, subscriptions & more — set up once, TapFlow remembers every month.',
      'features.f5.title':'Biometric Lock', 'features.f5.text':'Face ID, fingerprint or app PIN — nobody but you opens the app.',
      'features.f6.title':'EN & DE', 'features.f6.text':'Fully bilingual — the app speaks your language, instantly.',

      'insights.kicker':'Insights',
      'insights.title':'You don\'t just see what you spent. You understand <span class="underline-draw">why</span>.',
      'insights.lead':'This is our core: TapFlow works out every month, live, where your money goes, where it piles up, and how you compare to people your age — all calculated locally, nothing sugar-coated.',
      'insights.c1.tag':'Spending Breakdown', 'insights.c1.note':'In seconds you see which category is really pulling at your money.',
      'insights.c2.tag':'6-Month Trend', 'insights.c2.note':'Income and expenses side by side — patterns jump out immediately.',
      'insights.c3.tag':'Savings Rate vs. Peers', 'insights.c3.you':'Your rate', 'insights.c3.peers':'Avg. age 29',
      'insights.c3.note':'An honest comparison instead of a gut feeling — calculated fully anonymously, visible only to you.',
      'insights.c4.tag':'Budget Warning', 'insights.c4.note':'TapFlow speaks up before the limit breaks — not after.',
      'cat.groceries':'Groceries', 'cat.housing':'Housing', 'cat.leisure':'Leisure', 'cat.savings':'Savings',

      'screens.kicker':'The App', 'screens.title':'Every screen, thought through', 'screens.sub':'Tap through the key views of TapFlow.',
      'screens.tab.home':'Home', 'screens.tab.insights':'Insights', 'screens.tab.add':'Add', 'screens.tab.budget':'Budget', 'screens.tab.scanner':'Scanner', 'screens.tab.onboarding':'Onboarding', 'screens.tab.profile':'Profile',
      'screens.home.title':'Everything at a glance', 'screens.home.text':'Balance, income, expenses and savings goals — right after opening. Swipe sideways to jump between tabs.',
      'screens.home.b1':'Month-by-month navigation', 'screens.home.b2':'Swipe to edit / delete', 'screens.home.b3':'Live savings-goal progress',

      'themes.kicker':'Themes', 'themes.title':'6 looks. One tap.', 'themes.sub':'Light, Dark, AMOLED, Ocean, Rose or Sky — switch anytime in your profile.',

      'how.kicker':'How it works', 'how.title':'Four steps into flow',
      'how.s1.title':'Onboarding', 'how.s1.text':'Name, salary, payday, PIN — ready in under a minute.',
      'how.s2.title':'Capture', 'how.s2.text':'Add manually or let TapFlow scan your receipt.',
      'how.s3.title':'Set goals', 'how.s3.text':'Per-category budgets & savings goals with emoji.',
      'how.s4.title':'Understand', 'how.s4.text':'Insights show you where your money really goes.',

      'premium.kicker':'Premium',
      'premium.title':'The app stays free & private. Premium is optional.',
      'premium.lead':'Budgets, savings goals and analysis cost nothing, permanently. If you need reports to file away or a switch between devices, Premium unlocks that.',
      'premium.l1':'Monthly PDF reports to share or file away',
      'premium.l2':'Backup export & import between devices',
      'premium.l3':'New features — keeps growing, no extra cost',
      'premium.l3future':'More features unlock automatically',
      'premium.cardTag':'TapFlow Premium', 'premium.perMonth':'/ month',
      'premium.cta':'Premium coming soon', 'premium.cancel':'Cancel anytime later — no fine print.',

      'faq.kicker':'FAQ', 'faq.title':'Good to know',
      'faq.q1':'Is TapFlow free?', 'faq.a1':'Yes — and right now everything is free. Budgets, savings goals, the receipt scanner and analysis stay free, permanently. Premium (planned, €4.99/month) will later unlock PDF reports and import/export, and you\'ll be able to cancel anytime.',
      'faq.q2':'Is my data stored in the cloud?', 'faq.a2':'No. TapFlow stores everything exclusively on your device. There is no server that ever sees your transactions. An export only leaves when you trigger it yourself.',
      'faq.q3':'What does Premium cost?', 'faq.a3':'Premium is planned and not available yet — there are no charges right now. Once it launches it will cost €4.99/month, cancellable with one tap in your profile, effective end of month. No minimum term.',
      'faq.q4':'When does TapFlow launch?', 'faq.a4':'TapFlow is currently in active development. Check back soon — the launch will be announced here.',

      'cta.title':'Be there at launch', 'cta.sub':'TapFlow is in active development and will arrive in the app stores soon.',
      'cta.placeholder':'you@email.com', 'cta.button':'Notify me', 'cta.success':'Thanks! We\'ll let you know when it\'s live. 🎉',
      'cta.consent':'I agree that my email address will be stored for the launch notification. (<a href="datenschutz.html">Privacy Policy</a>)',
      'cta.storeSoon1':'App Store — soon', 'cta.storeSoon2':'Google Play — soon',
      'footer.tag':'Your numbers. Privately understood.', 'footer.rights':'All rights reserved.',
    },
  };

  const words = {
    de: ['Privat.', 'Sicher.', 'Nur deins.'],
    en: ['Private.', 'Secure.', 'Truly yours.'],
  };

  let lang = localStorage.getItem('tf_lang') || 'de';

  function applyI18n(){
    document.documentElement.lang = lang;
    document.getElementById('langLabel').textContent = lang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang][key]) el.textContent = dict[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[lang][key]) el.innerHTML = dict[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[lang][key]) el.setAttribute('placeholder', dict[lang][key]);
    });
    renderShowcaseDesc();
  }

  document.getElementById('langToggle').addEventListener('click', () => {
    lang = lang === 'de' ? 'en' : 'de';
    localStorage.setItem('tf_lang', lang);
    applyI18n();
    renderTxLists();
    renderShowcaseScreen(currentScreen, false);
    wordIdx = -1; cycleWord();
    renderCarouselBars();
  });

  /* ───────────────────────── Icon set (no emoji in app mockups) ───────────────────────── */
  const ICONS = {
    home:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1v-9"/></svg>',
    insights: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V11M12 20V4M20 20v-6.5"/></svg>',
    add:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
    budget:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.4"/><path d="M3 10.5h18"/></svg>',
    profile:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.2" r="3.4"/><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"/></svg>',
    scanner:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l1.4-2h7.2L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.2"/></svg>',
    onboarding:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h12l-2.6 3.5L17 11H5"/></svg>',
    theme:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 5.5 5.5 0 0 0 0 11 2 2 0 1 1 0 4Z"/><circle cx="8" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="13" cy="6.5" r="1" fill="currentColor" stroke="none"/><circle cx="17" cy="10" r="1" fill="currentColor" stroke="none"/></svg>',
    security: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z"/></svg>',
    pdf:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l3 3v15H7Z"/><path d="M14 3v3h3"/></svg>',
    backup:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M8 11l4 4 4-4"/><path d="M5 19h14"/></svg>',
  };
  const TABBAR_ORDER = ['home','insights','add','budget','profile'];

  function buildTabbar(activeName){
    return TABBAR_ORDER.map(name => {
      const active = name === activeName;
      return `<span class="tab ${active ? 'tab--active':''} ${name==='add' ? 'tab--add':''}">${ICONS[name]}</span>`;
    }).join('');
  }

  document.getElementById('heroTabbar').innerHTML = buildTabbar('home');
  document.getElementById('themeTabbar').innerHTML = buildTabbar('home');

  document.querySelectorAll('.showcase__tab').forEach(btn => {
    const name = btn.getAttribute('data-screen');
    const iconEl = btn.querySelector('.showcase__tab-icon');
    if (iconEl && ICONS[name]) iconEl.innerHTML = ICONS[name];
  });

  /* ───────────────────────── Word slider ───────────────────────── */
  const wordEl = document.getElementById('wordSliderWord');
  const barEl = document.getElementById('wordSliderBar');
  let wordIdx = 0;
  let wordTimer = null;

  function cycleWord(){
    wordEl.classList.remove('is-in');
    wordEl.classList.add('is-out');
    barEl.classList.remove('draw');
    setTimeout(() => {
      wordIdx = (wordIdx + 1) % words[lang].length;
      wordEl.textContent = words[lang][wordIdx];
      wordEl.classList.remove('is-out');
      wordEl.classList.add('is-in');
      void wordEl.offsetWidth; // force reflow so the transition re-triggers
      setTimeout(() => {
        wordEl.classList.remove('is-in');
        barEl.classList.add('draw');
      }, 20);
    }, 400);
  }
  function startWordSlider(){
    if (wordTimer) clearInterval(wordTimer);
    barEl.classList.add('draw');
    wordTimer = setInterval(cycleWord, 2600);
  }
  startWordSlider();

  /* ───────────────────────── Parallax (scroll-linked) ───────────────────────── */
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  let parallaxTicking = false;
  function updateParallax(){
    const vh = window.innerHeight;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      const rect = el.getBoundingClientRect();
      const centerOffset = (rect.top + rect.height / 2) - vh / 2;
      el.style.transform = `translateY(${(centerOffset * -speed).toFixed(1)}px)`;
    });
    parallaxTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!parallaxTicking){
      parallaxTicking = true;
      requestAnimationFrame(updateParallax);
    }
  }, { passive:true });
  updateParallax();

  /* ───────────────────────── Site theme toggle ───────────────────────── */
  const body = document.body;
  const iconSun = document.getElementById('iconSun');
  const iconMoon = document.getElementById('iconMoon');
  let siteTheme = localStorage.getItem('tf_site_theme') || 'dark';

  function applySiteTheme(){
    body.setAttribute('data-theme', siteTheme);
    iconSun.style.display = siteTheme === 'dark' ? 'block' : 'none';
    iconMoon.style.display = siteTheme === 'dark' ? 'none' : 'block';
  }
  document.getElementById('themeToggle').addEventListener('click', () => {
    siteTheme = siteTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('tf_site_theme', siteTheme);
    applySiteTheme();
  });
  applySiteTheme();

  /* ───────────────────────── Mobile nav ───────────────────────── */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('is-open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('is-open')));

  /* ───────────────────────── Nav scroll state ───────────────────────── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  }, { passive:true });

  /* ───────────────────────── Scroll reveal ───────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  revealEls.forEach(el => io.observe(el));

  // Steps line fill
  const stepsSection = document.getElementById('how');
  const stepsLine = document.getElementById('stepsLine');
  const stepsIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        stepsLine.style.width = '100%';
        stepsIO.unobserve(entry.target);
      }
    });
  }, { threshold:0.3 });
  if (stepsSection) stepsIO.observe(stepsSection);

  /* ───────────────────────── Counter animation ───────────────────────── */
  function animateCount(el, target, isMoney, duration=1400){
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = isMoney ? '€' + val.toFixed(2) : Math.round(val).toString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const countTargets = document.querySelectorAll('[data-count], [data-money]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const el = entry.target;
        const isMoney = el.hasAttribute('data-money');
        const target = parseFloat(el.getAttribute(isMoney ? 'data-target' : 'data-count'));
        animateCount(el, target, isMoney);
        countIO.unobserve(el);
      }
    });
  }, { threshold:0.4 });
  countTargets.forEach(el => countIO.observe(el));

  /* ───────────────────────── Hero / theme tx list data ───────────────────────── */
  const txData = {
    de: [
      { icon:'🛒', title:'Supermarkt', sub:'Heute, 14:32', amount:-42.30 },
      { icon:'☕', title:'Kaffee', sub:'Heute, 09:10', amount:-3.80 },
      { icon:'💰', title:'Gehalt', sub:'Gestern', amount:2950 },
      { icon:'🏠', title:'Miete', sub:'01. Juni', amount:-890, recurring:true, recurText:'jeden 1.' },
      { icon:'🎬', title:'Kino', sub:'29. Mai', amount:-24.50 },
    ],
    en: [
      { icon:'🛒', title:'Groceries', sub:'Today, 2:32 PM', amount:-42.30 },
      { icon:'☕', title:'Coffee', sub:'Today, 9:10 AM', amount:-3.80 },
      { icon:'💰', title:'Salary', sub:'Yesterday', amount:2950 },
      { icon:'🏠', title:'Rent', sub:'June 1', amount:-890, recurring:true, recurText:'every 1st' },
      { icon:'🎬', title:'Cinema', sub:'May 29', amount:-24.50 },
    ],
  };

  // Icon tint follows the TRANSACTION TYPE (income/expense/recurring) — exactly like
  // TransactionRowView in the real app, not an arbitrary per-category color.
  function txRowHTML(tx){
    const pos = tx.amount > 0;
    const typeColor = tx.recurring ? 'var(--orange)' : (pos ? 'var(--accent)' : 'var(--negative)');
    const amountStr = (pos ? '+' : '') + '€' + tx.amount.toFixed(2);
    return `<div class="tx-row">
      <div class="tx-row__icon" style="background:color-mix(in srgb, ${typeColor} 14%, transparent);color:${typeColor}">${tx.icon}</div>
      <div class="tx-row__mid">
        <div class="tx-row__title">${tx.title}</div>
        <div class="tx-row__sub">${tx.sub}${tx.recurring ? ` · <span style="color:var(--accent)">${tx.recurText}</span>` : ''}</div>
      </div>
      <div class="tx-row__amount ${pos ? 'pos':'neg'}">${amountStr}</div>
    </div>`;
  }

  function renderTxLists(){
    const list = txData[lang];
    const heroEl = document.getElementById('heroTxList');
    const themeEl = document.getElementById('themeTxList');
    if (heroEl) heroEl.innerHTML = list.map(txRowHTML).join('');
    if (themeEl) themeEl.innerHTML = list.slice(0,3).map(txRowHTML).join('');
  }

  /* ───────────────────────── Insights carousel bars ───────────────────────── */
  function renderCarouselBars(){
    const bars = document.getElementById('carouselBars');
    if (!bars) return;
    const vals = [40,55,35,70,50,85];
    const labels = { de:['J','F','M','A','M','J'], en:['J','F','M','A','M','J'] };
    bars.innerHTML = vals.map((v,i) => `<div class="bars__col"><div class="bars__bar" style="height:0%" data-h="${v}"></div><div class="bars__label">${labels[lang][i]}</div></div>`).join('');
    requestAnimationFrame(() => {
      bars.querySelectorAll('.bars__bar').forEach(b => { b.style.height = b.getAttribute('data-h') + '%'; });
    });
  }
  const carouselSection = document.getElementById('insights');
  if (carouselSection){
    const carouselIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          renderCarouselBars();
          carouselIO.unobserve(entry.target);
        }
      });
    }, { threshold:0.3 });
    carouselIO.observe(carouselSection);
  }

  /* ───────────────────────── Screens showcase ───────────────────────── */
  let currentScreen = 'home';
  const tabs = document.querySelectorAll('.showcase__tab');
  const screenEl = document.getElementById('showcaseScreen');
  const tabbarEl = document.getElementById('showcaseTabbar');

  const screenDesc = {
    de: {
      home:    { title:'Alles auf einen Blick', text:'Saldo, Einnahmen, Ausgaben und Sparziele — direkt nach dem Öffnen. Wische seitlich, um zwischen Tabs zu springen.', b:['Monatsweise Navigation','Swipe zum Bearbeiten / Löschen','Live-Sparziel-Fortschritt'] },
      insights:{ title:'Verstehen statt raten', text:'Donut-Chart nach Kategorie, 6-Monats-Trend und ein Vergleich deiner Sparquote mit Gleichaltrigen.', b:['Ausgaben-Breakdown','6-Monats-Übersicht','Sparquote im Altersvergleich'] },
      add:     { title:'In drei Tipps erfasst', text:'Typ wählen, Betrag eintippen, Kategorie antippen — fertig. Das Tastaturlayout bleibt immer erreichbar.', b:['Ausgabe / Einnahme / Wiederkehrend','22 Kategorien + eigene anlegen','Optional an ein Sparziel koppeln'] },
      budget:  { title:'Budgets, die mitdenken', text:'Lege Limits pro Kategorie fest und beobachte Sparziele mit Emoji — alles an einem Ort.', b:['Kategorie-Limits','Sparziele mit Fortschrittsbalken','Wiederkehrende Ausgaben'] },
      scanner: { title:'Beleg fotografieren, fertig', text:'TapFlow liest Betrag, Kategorie und Namen direkt vom Kassenzettel — keine Tipparbeit mehr.', b:['On-Device-OCR (ML Kit)','Kamera oder Galerie','Automatische Kategorisierung'] },
      onboarding:{ title:'In unter einer Minute startklar', text:'Name, Alter, Gehalt, Gehaltstag und PIN — fünf kurze Schritte mit Fortschrittsanzeige.', b:['5 Schritte, klar geführt','Auto-Gehaltsgutschrift am Zahltag','PIN optional überspringbar'] },
      profile: { title:'Dein Konto, deine Regeln', text:'Profilbild, Sprache, Sicherheit, Designs und Export — alles übersichtlich gruppiert.', b:['Face ID / PIN-Schutz','6 Farb-Designs','PDF- & Backup-Export'] },
    },
    en: {
      home:    { title:'Everything at a glance', text:'Balance, income, expenses and savings goals — right after opening. Swipe sideways to jump between tabs.', b:['Month-by-month navigation','Swipe to edit / delete','Live savings-goal progress'] },
      insights:{ title:'Understand, don\'t guess', text:'Donut chart by category, 6-month trend, and a comparison of your savings rate to your peers.', b:['Spending breakdown','6-month overview','Savings rate vs. age group'] },
      add:     { title:'Logged in three taps', text:'Pick a type, type the amount, tap a category — done. The numeric layout stays one thumb-reach away.', b:['Expense / Income / Recurring','22 categories, or add your own','Optionally link to a savings goal'] },
      budget:  { title:'Budgets that think ahead', text:'Set limits per category and track savings goals with emoji — all in one place.', b:['Per-category limits','Goals with progress bars','Recurring expenses'] },
      scanner: { title:'Snap a receipt, done', text:'TapFlow reads amount, category and name straight from the receipt — no more typing.', b:['On-device OCR (ML Kit)','Camera or gallery','Automatic categorization'] },
      onboarding:{ title:'Ready in under a minute', text:'Name, age, salary, payday and PIN — five short steps with a progress bar.', b:['5 clearly guided steps','Auto salary credit on payday','PIN optional, can be skipped'] },
      profile: { title:'Your account, your rules', text:'Profile photo, language, security, themes and export — all neatly grouped.', b:['Face ID / PIN protection','6 color themes','PDF & backup export'] },
    },
  };

  function renderShowcaseDesc(){
    const d = screenDesc[lang][currentScreen];
    if (!d) return;
    const descEl = document.getElementById('showcaseDesc');
    descEl.innerHTML = `<h3>${d.title}</h3><p>${d.text}</p><ul class="checklist">${d.b.map(x=>`<li>${x}</li>`).join('')}</ul>`;
  }

  function screenMarkup(name){
    const t = lang === 'de';
    switch(name){
      case 'home': return `
        <div class="app-bar screen-fade">TapFlow</div>
        <div class="card balance-card balance-card--mini screen-fade">
          <span class="dim tiny">${t?'GESAMTGUTHABEN':'TOTAL BALANCE'}</span>
          <strong class="balance-amount">€3.842,50</strong>
        </div>
        <div class="section-label screen-fade">${t?'Sparziele':'Savings Goals'}</div>
        <div class="card screen-fade">
          <div class="goal-row">
            <div class="goal-row__top">
              <span class="goal-row__emoji">✈️</span>
              <div class="goal-row__name"><strong>${t?'Urlaub':'Vacation'}</strong><span>€620 ${t?'von':'of'} €1.200</span></div>
              <span class="goal-row__pct" id="goalPct1">0%</span>
            </div>
            <div class="goal-row__bar"><div class="goal-row__fill" id="goalFill1" style="width:0%"></div></div>
          </div>
        </div>
        <div class="section-label screen-fade">${t?'Letzte Transaktionen':'Recent Transactions'}</div>
        <div class="card tx-list screen-fade" id="screenTxList"></div>`;

      case 'insights': return `
        <div class="app-bar screen-fade">${t?'Insights':'Insights'}</div>
        <div class="card screen-fade" style="padding:12px;">
          <span class="section-label" style="padding:0">${t?'Ausgaben nach Kategorie':'Spending Breakdown'}</span>
          <div class="donut-wrap">
            <svg class="donut" width="74" height="74" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#23262d" stroke-width="5"></circle>
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#F59E0B" stroke-width="5" stroke-dasharray="35 65" stroke-dashoffset="25" stroke-linecap="round"></circle>
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#3B9FE0" stroke-width="5" stroke-dasharray="25 75" stroke-dashoffset="-10" stroke-linecap="round"></circle>
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E05580" stroke-width="5" stroke-dasharray="18 82" stroke-dashoffset="-35" stroke-linecap="round"></circle>
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#00C896" stroke-width="5" stroke-dasharray="22 78" stroke-dashoffset="-53" stroke-linecap="round"></circle>
            </svg>
            <div class="legend">
              <div class="legend__row"><span class="legend__dot" style="background:#F59E0B"></span><span>${t?'Lebensmittel':'Groceries'}</span><span>35%</span></div>
              <div class="legend__row"><span class="legend__dot" style="background:#3B9FE0"></span><span>${t?'Wohnen':'Housing'}</span><span>25%</span></div>
              <div class="legend__row"><span class="legend__dot" style="background:#E05580"></span><span>${t?'Freizeit':'Leisure'}</span><span>18%</span></div>
              <div class="legend__row"><span class="legend__dot" style="background:#00C896"></span><span>${t?'Sparen':'Savings'}</span><span>22%</span></div>
            </div>
          </div>
        </div>
        <div class="card screen-fade" style="padding:12px;">
          <span class="section-label" style="padding:0">${t?'6-Monats-Übersicht':'6-Month Overview'}</span>
          <div class="bars" id="screenBars"></div>
        </div>
        <div class="card screen-fade" style="padding:12px;">
          <span class="section-label" style="padding:0">${t?'Sparquote im Vergleich':'Savings Rate vs Peers'}</span>
          <div class="mini-rate">
            <div class="mini-rate__cell"><strong style="color:var(--accent)">18,4%</strong><span>${t?'Deine Quote':'Your rate'}</span></div>
            <div class="mini-rate__div"></div>
            <div class="mini-rate__cell"><strong>12,1%</strong><span>${t?'Ø Alter 29':'Age 29 avg'}</span></div>
          </div>
        </div>`;

      case 'add': {
        const cats = t
          ? [{e:'🛒',l:'Lebensmittel',s:true},{e:'🍽️',l:'Restaurant'},{e:'🚗',l:'Transport'},{e:'🎬',l:'Freizeit'},{e:'🏠',l:'Wohnen'},{e:'📱',l:'Abos'},{e:'💊',l:'Gesundheit'},{e:'💡',l:'Sonstiges'}]
          : [{e:'🛒',l:'Groceries',s:true},{e:'🍽️',l:'Restaurant'},{e:'🚗',l:'Transport'},{e:'🎬',l:'Leisure'},{e:'🏠',l:'Housing'},{e:'📱',l:'Subscriptions'},{e:'💊',l:'Health'},{e:'💡',l:'Other'}];
        return `
        <div class="app-bar screen-fade">${t?'Hinzufügen':'Add'}</div>
        <div class="type-toggle screen-fade">
          <span class="type-pill is-active">${t?'Ausgabe':'Expense'}</span>
          <span class="type-pill">${t?'Einnahme':'Income'}</span>
          <span class="type-pill">${t?'Wiederk.':'Recurring'}</span>
        </div>
        <div class="amount-display screen-fade"><span class="amount-display__sign">€</span><strong>24<small>,80</small></strong></div>
        <div class="section-label screen-fade">${t?'Kategorie':'Category'}</div>
        <div class="cat-grid screen-fade">
          ${cats.map(c => `<div class="cat-chip ${c.s ? 'is-selected':''}"><span class="cat-chip__emoji">${c.e}</span><span class="cat-chip__label">${c.l}</span></div>`).join('')}
        </div>
        <div class="onb-btn screen-fade" style="margin-top:12px">${t?'Speichern':'Save'}</div>`;
      }

      case 'budget': return `
        <div class="app-bar screen-fade">${t?'Budget':'Budget'}</div>
        <div class="section-label screen-fade">${t?'Kategorie-Budgets':'Category Budgets'}</div>
        <div class="card screen-fade">
          <div class="budget-row">
            <div class="budget-row__top"><span>🛒 ${t?'Lebensmittel':'Groceries'}</span><span>€280 / €350</span></div>
            <div class="budget-row__bar"><div class="budget-row__fill" id="bFill1" style="width:0%"></div></div>
          </div>
          <div class="budget-row">
            <div class="budget-row__top"><span>🎬 ${t?'Freizeit':'Leisure'}</span><span>€95 / €150</span></div>
            <div class="budget-row__bar"><div class="budget-row__fill" id="bFill2" style="width:0%;background:#F59E0B"></div></div>
          </div>
        </div>
        <div class="section-label screen-fade">${t?'Sparziele':'Savings Goals'}</div>
        <div class="card screen-fade">
          <div class="goal-row">
            <div class="goal-row__top">
              <span class="goal-row__emoji">🎯</span>
              <div class="goal-row__name"><strong>${t?'Notgroschen':'Emergency Fund'}</strong><span>€1.450 ${t?'von':'of'} €2.000</span></div>
              <span class="goal-row__pct" id="goalPct2">0%</span>
            </div>
            <div class="goal-row__bar"><div class="goal-row__fill" id="bFill3" style="width:0%"></div></div>
          </div>
        </div>
        <div class="section-label screen-fade">${t?'Wiederkehrende Ausgaben':'Recurring Expenses'}</div>
        <div class="card tx-list screen-fade">
          <div class="tx-row">
            <div class="tx-row__icon" style="background:color-mix(in srgb, var(--orange) 14%, transparent);color:var(--orange)">🏠</div>
            <div class="tx-row__mid">
              <div class="tx-row__title">${t?'Miete':'Rent'}</div>
              <div class="tx-row__sub">${t?'jeden 1.':'every 1st'}</div>
            </div>
            <div class="tx-row__amount neg">€-890.00</div>
          </div>
        </div>`;

      case 'scanner': return `
        <div class="app-bar screen-fade">${t?'Beleg scannen':'Scan Receipt'}</div>
        <div class="section-label screen-fade">${t?'Beleg hinzufügen':'Add Receipt'}</div>
        <div class="scanner-options screen-fade">
          <div class="card scanner-opt">
            <div class="scanner-opt__icon">${ICONS.scanner}</div>
            <div><div class="scanner-opt__title">${t?'Kamera':'Camera'}</div><div class="scanner-opt__sub">${t?'Jetzt fotografieren':'Take a photo now'}</div></div>
          </div>
          <div class="card scanner-opt">
            <div class="scanner-opt__icon" style="background:color-mix(in srgb, var(--blue) 14%, transparent);color:var(--blue)">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5L5 21"/></svg>
            </div>
            <div><div class="scanner-opt__title">${t?'Galerie':'Gallery'}</div><div class="scanner-opt__sub">${t?'Foto auswählen':'Pick from gallery'}</div></div>
          </div>
        </div>
        <div class="scan-result screen-fade">
          <span class="scan-result__arrow">↓</span>
          <div class="scan-result__card">
            <span class="scan-result__label">${t?'AUTOMATISCH ERKANNT':'AUTO-DETECTED'}</span>
            <div class="scan-result__row"><strong>REWE</strong><strong>€24,80</strong></div>
            <span class="scan-result__cat">🛒 ${t?'Lebensmittel':'Groceries'}</span>
          </div>
        </div>`;

      case 'onboarding': return `
        <div class="onb-progress screen-fade"><div class="onb-progress__fill" style="width:60%"></div></div>
        <div class="onb-center screen-fade">
          <span class="big-emoji">💰</span>
          <h4>${t?'Monatliches Gehalt (€)?':'Monthly salary (€)?'}</h4>
          <input class="onb-input" value="2.950" readonly>
          <div class="onb-btn">${t?'Weiter →':'Continue →'}</div>
        </div>`;

      case 'profile': return `
        <div class="app-bar screen-fade">${t?'Profil':'Profile'}</div>
        <div class="profile-mini screen-fade">
          <div class="profile-mini__avatar">J</div>
          <div class="profile-mini__name">Jake</div>
          <div class="profile-mini__sub">29 ${t?'Jahre':'years'} · €2.950/${t?'Monat':'month'}</div>
        </div>
        <div class="card screen-fade">
          <div class="profile-row">${ICONS.theme}<span>${t?'Designs':'Themes'}</span></div>
          <div class="profile-row">${ICONS.security}<span>Face ID / PIN</span></div>
          <div class="profile-row">${ICONS.pdf}<span>${t?'PDF-Bericht':'PDF Report'}</span><em class="premium-pill">PREMIUM</em></div>
          <div class="profile-row">${ICONS.backup}<span>${t?'Backup exportieren':'Export Backup'}</span><em class="premium-pill">PREMIUM</em></div>
        </div>`;

      default: return '';
    }
  }

  function animateGoalPct(fillId, pctId, target){
    const fill = document.getElementById(fillId);
    const pctEl = document.getElementById(pctId);
    if (!fill) return;
    requestAnimationFrame(() => { fill.style.width = target + '%'; });
    if (!pctEl) return;
    const start = performance.now();
    (function tick(now){
      const p = Math.min(1, (now - start) / 1000);
      pctEl.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + '%';
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  function postRenderAnimations(name){
    if (name === 'home'){
      const el = document.getElementById('screenTxList');
      if (el) el.innerHTML = txData[lang].slice(0,4).map(txRowHTML).join('');
      animateGoalPct('goalFill1', 'goalPct1', 52);
    }
    if (name === 'insights'){
      const bars = document.getElementById('screenBars');
      if (bars){
        const vals = [40,55,35,70,50,85];
        bars.innerHTML = vals.map((v,i) => `<div class="bars__col"><div class="bars__bar" style="height:0%" data-h="${v}"></div><div class="bars__label">${['J','F','M','A','M','J'][i]}</div></div>`).join('');
        requestAnimationFrame(() => {
          bars.querySelectorAll('.bars__bar').forEach(b => { b.style.height = b.getAttribute('data-h') + '%'; });
        });
      }
    }
    if (name === 'budget'){
      requestAnimationFrame(() => {
        const f1 = document.getElementById('bFill1'); if (f1) f1.style.width = '80%';
        const f2 = document.getElementById('bFill2'); if (f2) f2.style.width = '63%';
      });
      animateGoalPct('bFill3', 'goalPct2', 72);
    }
  }

  function renderShowcaseScreen(name){
    currentScreen = name;
    screenEl.innerHTML = screenMarkup(name);
    postRenderAnimations(name);
    renderShowcaseDesc();
    tabs.forEach(t => t.classList.toggle('is-active', t.getAttribute('data-screen') === name));
    tabbarEl.innerHTML = buildTabbar(TABBAR_ORDER.includes(name) ? name : null);
  }

  tabs.forEach(tab => tab.addEventListener('click', () => renderShowcaseScreen(tab.getAttribute('data-screen'))));
  renderShowcaseScreen('home');

  /* ───────────────────────── Theme demo (app color themes) ───────────────────────── */
  const themeTokens = {
    light: { bg:'#F7F7F7', card:'#FFFFFF', card2:'#E4E4E4', text:'#0D0D0D', dim:'#6B6B6B', border:'#E8E8E8', accent:'#00C896' },
    dark:  { bg:'#1C1C1E', card:'#2C2C2E', card2:'#48484A', text:'#FFFFFF', dim:'#98989D', border:'#3A3A3C', accent:'#00C896' },
    amoled:{ bg:'#000000', card:'#1C1C1E', card2:'#3A3A3C', text:'#FFFFFF', dim:'#98989D', border:'#2C2C2E', accent:'#00E5A8' },
    ocean: { bg:'#0A1628', card:'#0F2040', card2:'#1E3A60', text:'#E8F4FD', dim:'#7FB3D3', border:'#1A3050', accent:'#4DAFFF' },
    rose:  { bg:'#FFF5F5', card:'#FFFFFF', card2:'#FFE5E5', text:'#1A0A0A', dim:'#8B5A5A', border:'#FFE0E0', accent:'#E05580' },
    sky:   { bg:'#F0F8FF', card:'#FFFFFF', card2:'#E3F0FA', text:'#0A1A2A', dim:'#5A7A95', border:'#DCEBF7', accent:'#3B9FE0' },
  };

  const themePhone = document.getElementById('themePhone');
  const swatches = document.querySelectorAll('.swatch');

  function applyDemoTheme(name){
    const tk = themeTokens[name];
    themePhone.style.setProperty('--bg-soft', tk.bg);
    themePhone.style.setProperty('--card', tk.card);
    themePhone.style.setProperty('--card-2', tk.card2);
    themePhone.style.setProperty('--text', tk.text);
    themePhone.style.setProperty('--text-dim', tk.dim);
    themePhone.style.setProperty('--border', tk.border);
    themePhone.style.setProperty('--accent', tk.accent);
    themePhone.style.setProperty('--accent-dim', tk.accent + '26');
    swatches.forEach(s => s.classList.toggle('is-active', s.getAttribute('data-theme-demo') === name));
  }
  swatches.forEach(s => s.addEventListener('click', () => applyDemoTheme(s.getAttribute('data-theme-demo'))));
  applyDemoTheme('light');

  /* ───────────────────────── FAQ accordion ───────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-item__q');
    const a = item.querySelector('.faq-item__a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.faq-item__a').style.maxHeight = null;
      });
      if (!isOpen){
        item.classList.add('is-open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ───────────────────────── Hero phone parallax on mouse ───────────────────────── */
  const heroPhone = document.getElementById('heroPhone');
  window.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 980) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    heroPhone.style.transform = `rotate(${x*0.3}deg) translate(${x}px, ${y}px)`;
  });

  /* ───────────────────────── Bento feature grid effects ───────────────────────── */
  (function initBento(){
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });

    // Animate the goal/budget mini progress bars once the grid scrolls into view
    const bentoSection = document.getElementById('features');
    if (bentoSection){
      const bentoIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          document.querySelectorAll('.bento-goal__fill, .bento-budget__fill').forEach(el => {
            el.style.width = el.getAttribute('data-pct') + '%';
          });
          const pctEl = document.querySelector('.bento-goal__pct');
          if (pctEl){
            const target = parseInt(pctEl.getAttribute('data-target'), 10);
            const start = performance.now();
            (function tick(now){
              const p = Math.min(1, (now - start) / 1100);
              pctEl.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + '%';
              if (p < 1) requestAnimationFrame(tick);
            })(start);
          }
          bentoIO.unobserve(entry.target);
        });
      }, { threshold:0.3 });
      bentoIO.observe(bentoSection);
    }

    // Language pill: gentle auto-toggle to hint at the bilingual feature
    const langToggleEl = document.getElementById('bentoLangToggle');
    if (langToggleEl){
      const pills = langToggleEl.querySelectorAll('.bento-lang__pill');
      let active = 0;
      setInterval(() => {
        active = active === 0 ? 1 : 0;
        pills.forEach((p,i) => p.classList.toggle('is-active', i===active));
      }, 2200);
    }
  })();

  /* ───────────────────────── Insights carousel (drag + autoplay) ───────────────────────── */
  (function initCarousel(){
    const root = document.getElementById('insightsCarousel');
    if (!root) return;
    const viewport = root.querySelector('.carousel__viewport') || root;
    const track = document.getElementById('carouselTrack');
    const cards = Array.from(track.children);
    const dotsEl = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    let index = 0;
    let autoplayTimer = null;
    let isDragging = false;
    let dragStartX = 0;
    let dragDelta = 0;
    let baseOffset = 0;

    function cardsPerView(){ return window.innerWidth >= 680 ? 2 : 1; }
    function maxIndex(){ return Math.max(0, cards.length - cardsPerView()); }
    function step(){ const gap = parseFloat(getComputedStyle(track).gap) || 0; return cards[0].getBoundingClientRect().width + gap; }

    function renderDots(){
      const count = maxIndex() + 1;
      dotsEl.innerHTML = Array.from({length:count}, (_, i) =>
        `<span class="carousel__dot ${i===index?'is-active':''}" data-i="${i}"></span>`
      ).join('');
      dotsEl.querySelectorAll('.carousel__dot').forEach(d => {
        d.addEventListener('click', () => { goTo(parseInt(d.dataset.i,10)); restartAutoplay(); });
      });
    }

    function update(animate=true){
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.transition = animate ? '' : 'none';
      baseOffset = -index * step();
      track.style.transform = `translateX(${baseOffset}px)`;
      if (!animate) requestAnimationFrame(() => { track.style.transition = ''; });
      dotsEl.querySelectorAll('.carousel__dot').forEach((d,i) => d.classList.toggle('is-active', i===index));
    }

    function goTo(i){ index = i; update(); }
    function next(){ index = index >= maxIndex() ? 0 : index + 1; update(); }
    function prev(){ index = index <= 0 ? maxIndex() : index - 1; update(); }

    function restartAutoplay(){
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, 4500);
    }

    nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });
    prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
    viewport.addEventListener('mouseenter', () => { if (autoplayTimer) clearInterval(autoplayTimer); });
    viewport.addEventListener('mouseleave', () => restartAutoplay());

    // Drag / swipe
    viewport.addEventListener('pointerdown', (e) => {
      isDragging = true; dragStartX = e.clientX; dragDelta = 0;
      track.style.transition = 'none';
      if (autoplayTimer) clearInterval(autoplayTimer);
      viewport.setPointerCapture && viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      dragDelta = e.clientX - dragStartX;
      track.style.transform = `translateX(${baseOffset + dragDelta}px)`;
    });
    function endDrag(){
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = '';
      if (dragDelta < -60) next();
      else if (dragDelta > 60) prev();
      else update();
      restartAutoplay();
    }
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointerleave', () => { if (isDragging) endDrag(); });

    window.addEventListener('resize', () => update(false));

    renderDots();
    update(false);
    restartAutoplay();
  })();

  /* ───────────────────────── Init ───────────────────────── */
  applyI18n();
  renderTxLists();
})();
