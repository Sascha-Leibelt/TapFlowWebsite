/* ═══════════════════════════════════════════════════════════════
   TapFlow Legal Pages — shared logic
   Theme · Language · Config injection · i18n
   ═══════════════════════════════════════════════════════════════ */

const LEGAL_T = {
  de: {
    /* Shared */
    'common.back':        'Zurück zur Startseite',
    'common.lang':        'DE',
    'common.footer.tag':  'Deine Zahlen. Privat verstanden.',
    'common.footer.copy': '© 2026 TapFlow. Alle Rechte vorbehalten.',
    'common.country':     'Deutschland',
    'common.cfg.email':   'E-Mail:',
    'common.cfg.note':    '(im Folgenden „Anbieter")',

    /* ── Impressum ── */
    'imp.title':      'Impressum',
    'imp.meta':       'Angaben gemäß § 5 TMG',
    'imp.h1':         'Anbieter',
    'imp.h2':         'Kontakt',
    'imp.h3':         'Steuerliche Angaben',
    'imp.tax.p1':     'Kleinunternehmer gemäß § 19 Abs. 1 UStG — es wird keine Umsatzsteuer berechnet und keine Umsatzsteuer-Identifikationsnummer ausgewiesen.',
    'imp.h4':         'Inhaltlich verantwortlich (§ 18 Abs. 2 MStV)',
    'imp.h5':         'Haftungsausschluss',
    'imp.h5a':        'Haftung für Inhalte',
    'imp.disc.p1':    'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8–10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
    'imp.disc.p2':    'Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Inhalte umgehend entfernen.',
    'imp.h5b':        'Haftung für Links',
    'imp.links.p1':   'Unser Angebot enthält Links zu externen Websites Dritter. Für deren Inhalte sind die jeweiligen Anbieter verantwortlich; zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.',
    'imp.h5c':        'Urheberrecht',
    'imp.copy.p1':    'Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung und Verwertung außerhalb der gesetzlichen Grenzen bedürfen der schriftlichen Zustimmung.',
    'imp.h6':         'Streitschlichtung',
    'imp.dispute.p1': 'Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:',
    'imp.dispute.p2': 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',

    /* ── Datenschutz ── */
    'prv.title':       'Datenschutzerklärung',
    'prv.meta':        'Stand: Juli 2026 · Gemäß DSGVO und TMG',
    'prv.h1':          '1. Verantwortlicher',
    'prv.resp.p1':     'Bei Fragen zum Datenschutz erreichst du uns unter der oben angegebenen E-Mail-Adresse.',
    'prv.h2':          '2. Grundsatz: lokale Datenverarbeitung',
    'prv.gen.p1':      'TapFlow ist eine <strong>lokal-first App</strong>: Alle Finanzdaten (Transaktionen, Budgets, Sparziele) werden ausschließlich auf deinem Gerät gespeichert und verarbeitet. Es gibt keinen TapFlow-Server, der auf diese Daten zugreift. Diese Datenschutzerklärung bezieht sich auf die <strong>Website tapflow.app</strong> und beschreibt ergänzend die Datenverarbeitung in der App.',
    'prv.h3':          '3. Website — Hosting & Server-Logfiles',
    'prv.host.p1':     'Beim Aufruf dieser Website speichert der Hosting-Anbieter automatisch folgende Daten in Server-Logfiles:',
    'prv.host.l1':     'IP-Adresse (wird nach kurzer Zeit anonymisiert)',
    'prv.host.l2':     'Datum und Uhrzeit des Zugriffs',
    'prv.host.l3':     'Aufgerufene URL und Referrer',
    'prv.host.l4':     'Browser und Betriebssystem',
    'prv.host.l5':     'Übertragene Datenmenge, HTTP-Statuscode',
    'prv.host.p2':     '<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Betrieb und Sicherheit). <strong>Speicherdauer:</strong> in der Regel 7–30 Tage; keine Zusammenführung mit anderen Datenquellen.',
    'prv.h4':          '4. Website — keine E-Mail-Erfassung',
    'prv.wait.p1':     'Diese Website erhebt <strong>keine E-Mail-Adressen</strong> und enthält kein Warteliste-, Newsletter- oder Anmeldeformular. Über die Website werden keine personenbezogenen Kontaktdaten verarbeitet. Sollte künftig eine Anmeldemöglichkeit ergänzt werden, wird diese Erklärung vorher aktualisiert und nennt den eingesetzten Dienst.',
    'prv.wait.p2':     'Sobald das Formular aktiviert wird, verarbeiten wir folgende Daten:',
    'prv.wait.l1':     'E-Mail-Adresse',
    'prv.wait.l2':     'Zeitpunkt der Anmeldung',
    'prv.wait.p3':     '<strong>Zweck:</strong> Benachrichtigung über den App-Launch. <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). <strong>Speicherdauer:</strong> bis zur Abmeldung oder abgeschlossenem Launch. Diese Erklärung wird vor Aktivierung aktualisiert und nennt den eingesetzten Dienst.',
    'prv.h5':          '5. Website — Cookies & lokaler Speicher',
    'prv.cookie.p1':   'Diese Website setzt <strong>keine Tracking-Cookies</strong> und kein Analytics ein. Im lokalen Browserspeicher werden ausschließlich technische Präferenzen gespeichert (Theme hell/dunkel, Spracheinstellung). Diese Daten verlassen das Gerät nicht und erfordern keine Einwilligung (§ 25 Abs. 2 Nr. 2 TTDSG).',
    'prv.h6':          '6. App — Lokale Datenspeicherung',
    'prv.app.p1':      'Alle in der App eingegebenen Daten (Transaktionen, Budgets, Sparziele, Nutzerprofil) werden ausschließlich als JSON-Dateien im systemgeschützten App-Verzeichnis auf dem Gerät gespeichert. Es findet <strong>keine Übertragung an externe Server</strong> statt.',
    'prv.h6a':         '6.1 Beleg-Scanner (On-Device OCR)',
    'prv.ocr.p1':      'Der Beleg-Scanner nutzt die Google ML Kit Text Recognition API im <em>on-device</em>-Modus. Die Bilderkennung läuft vollständig auf dem Gerät; Fotos werden weder an Google noch an uns übertragen. Relevant: <a href="https://developers.google.com/ml-kit/terms" target="_blank" rel="noopener">Google ML Kit Terms of Service</a>.',
    'prv.h6b':         '6.2 Biometrische Authentifizierung',
    'prv.bio.p1':      'Fingerabdruck-Daten werden ausschließlich im Android Keystore (sicherer Systembereich) verwaltet. TapFlow hat keinen Zugriff auf biometrische Rohdaten.',
    'prv.h6c':         '6.3 Home-Screen-Widget',
    'prv.widget.p1':   'Das optionale Home-Screen-Widget zeigt Budget- und Sparziel-Daten an. Dazu schreibt die App Werte in einen geteilten App-Group-Container des Betriebssystems — ein rein geräteLokaler Kommunikationsweg zwischen App und Widget-Extension. Es findet kein Datentransfer nach außen statt.',
    'prv.h6d':         '6.4 Lokale Benachrichtigungen',
    'prv.notif.p1':    'TapFlow sendet Budget-Warnungen als lokale Push-Benachrichtigungen. Die Verarbeitung erfolgt vollständig auf dem Gerät; es werden keine Daten an externe Notification-Dienste übertragen.',
    'prv.h6e':         '6.5 Export-Funktion (Premium)',
    'prv.exp.p1':      'PDF-Berichte und Backup-Exporte verlassen das Gerät nur, wenn du sie über die Systemfunktion „Teilen" aktiv weiterleitest. TapFlow speichert keine Kopie auf Servern.',
    'prv.h6f':         '6.6 Premium-Abonnement',
    'prv.prem.p1':     'TapFlow Premium ist <strong>geplant, aber noch nicht verfügbar</strong> — derzeit findet keine Zahlungsabwicklung statt. Sobald Premium startet, werden Käufe vollständig über den <strong>Google Play Store</strong> abgewickelt; TapFlow erhält keine Zahlungsdaten. Es gilt dann die <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Datenschutzerklärung von Google</a>.',
    'prv.h7':          '7. Deine Rechte (Art. 15–22 DSGVO)',
    'prv.rights.p1':   'Du hast jederzeit das Recht auf:',
    'prv.rights.l1':   '<strong>Auskunft</strong> über gespeicherte personenbezogene Daten (Art. 15)',
    'prv.rights.l2':   '<strong>Berichtigung</strong> unrichtiger Daten (Art. 16)',
    'prv.rights.l3':   '<strong>Löschung</strong> deiner Daten (Art. 17)',
    'prv.rights.l4':   '<strong>Einschränkung</strong> der Verarbeitung (Art. 18)',
    'prv.rights.l5':   '<strong>Datenübertragbarkeit</strong> (Art. 20)',
    'prv.rights.l6':   '<strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21)',
    'prv.rights.l7':   '<strong>Widerruf</strong> einer Einwilligung (Art. 7 Abs. 3)',
    'prv.rights.p2':   'Zur Ausübung deiner Rechte wende dich an:',
    'prv.h8':          '8. Beschwerderecht',
    'prv.auth.p1':     'Du kannst dich jederzeit bei einer Datenschutz-Aufsichtsbehörde beschweren. Für Hessen zuständig ist der <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener">Hessische Beauftragte für Datenschutz und Informationsfreiheit</a>.',
    'prv.h9':          '9. Google Play — Data Safety',
    'prv.datasafety.p1': 'TapFlow erhebt, speichert oder teilt <strong>keine personenbezogenen Daten</strong> mit externen Servern oder Dritten. Im Google Play Store Data Safety Formular sind daher alle Felder unter „Keine Daten erhoben" anzugeben. Einzige Ausnahme: Käufe über Google Play Billing werden von Google selbst verarbeitet — dies ist im Play Store bereits standardmäßig hinterlegt.',
    'prv.datasafety.tbl': '<table class="legal-table"><thead><tr><th>Datenkategorie</th><th>Erhoben?</th><th>Weitergegeben?</th></tr></thead><tbody><tr><td>Finanzdaten (Transaktionen, Budgets)</td><td>Nein — nur lokal</td><td>Nein</td></tr><tr><td>Personendaten (Name, Gehalt)</td><td>Nein — nur lokal</td><td>Nein</td></tr><tr><td>Fotos (Beleg-Scanner)</td><td>Nein — on-device OCR, kein Speichern</td><td>Nein</td></tr><tr><td>Gerätekennungen</td><td>Nein</td><td>Nein</td></tr><tr><td>Standortdaten</td><td>Nein</td><td>Nein</td></tr><tr><td>Kaufdaten (Google Play Billing)</td><td>Google, nicht TapFlow</td><td>—</td></tr></tbody></table>',
    'prv.h10':          '10. Änderungen dieser Erklärung',
    'prv.upd.p1':      'Wir passen diese Erklärung an, wenn sich rechtliche oder technische Änderungen ergeben. Das Datum am Anfang dieser Seite gibt stets den aktuellen Stand an.',

    /* ── AGB ── */
    'agb.title':         'Allgemeine Geschäftsbedingungen',
    'agb.meta':          'Stand: Juli 2026 · TapFlow ist derzeit vollständig kostenlos — Premium ist geplant, aber noch nicht verfügbar.',
    'agb.h1':            '1. Geltungsbereich und Anbieter',
    'agb.scope.p1':      'Diese AGB gelten für alle Nutzer der App <strong>TapFlow</strong> und der zugehörigen Website. Anbieter:',
    'agb.scope.p2':      'Entgegenstehende Bedingungen des Nutzers werden nur anerkannt, wenn der Anbieter ihnen ausdrücklich schriftlich zustimmt.',
    'agb.h2':            '2. Leistungsbeschreibung',
    'agb.h2a':           '2.1 Kostenlose Basis-App',
    'agb.free.p1':       'TapFlow ist eine Finanzverwaltungs-App, die vollständig auf dem Gerät des Nutzers arbeitet. Alle Daten verbleiben lokal. Basis-Funktionen (Transaktionsverwaltung, Kategorien, Budgets, Sparziele, Analyse, Beleg-Scanner, Biometric Lock) sind dauerhaft kostenlos. <strong>Derzeit ist TapFlow vollständig kostenlos</strong> — es werden keine kostenpflichtigen Funktionen angeboten und keine Zahlungen verarbeitet.',
    'agb.h2b':           '2.2 TapFlow Premium (geplant)',
    'agb.prem.p1':       '<strong>Geplant, derzeit noch nicht verfügbar:</strong> Sobald TapFlow Premium eingeführt wird, sollen gegen <strong>4,99 € / Monat</strong> (inkl. etwaiger gesetzlicher Steuern) folgende Zusatzfunktionen freigeschaltet werden:',
    'agb.prem.l1':       'PDF-Monatsberichte',
    'agb.prem.l2':       'Backup-Export und -Import',
    'agb.prem.l3':       'Künftige Premium-Funktionen ohne Aufpreis',
    'agb.prem.p2':       'Premium soll ausschließlich über den <strong>Google Play Store</strong> angeboten werden. Zahlung, Rechnungsstellung und Abo-Verwaltung erfolgen dann durch Google nach deren Nutzungsbedingungen. Bis zur Einführung entstehen keine Kosten.',
    'agb.h3':            '3. Preise und Zahlung',
    'agb.price.p1':      'Aktuell werden über TapFlow <strong>keine Zahlungen</strong> verarbeitet; die App ist vollständig kostenlos. Sobald Premium verfügbar ist, soll der Preis <strong>4,99 € / Monat</strong> betragen, fällig monatlich im Voraus; Preisänderungen werden mindestens 30 Tage vorher angekündigt. Diese AGB werden vor dem Start kostenpflichtiger Funktionen entsprechend aktualisiert.',
    'agb.h4':            '4. Laufzeit und Kündigung',
    'agb.cancel.p1':     'Das Abo läuft monatlich und verlängert sich automatisch, sofern es nicht vor Ablauf des Abrechnungszeitraums gekündigt wird.',
    'agb.cancel.p2':     'Kündigung jederzeit direkt im Google Play Store unter Abonnements. Premium bleibt bis Periodenende aktiv. Keine Mindestlaufzeit.',
    'agb.h5':            '5. Widerrufsrecht',
    'agb.revoke.p1':     'Da Premium-Käufe über den Google Play Store abgewickelt werden, gelten die Widerrufsregeln von Google (Google Play-Nutzungsbedingungen). Google gewährt in der Regel innerhalb von 48 Stunden nach Kauf ein Rückgaberecht.',
    'agb.revoke.p2':     'Für etwaige Direktkäufe außerhalb der App-Stores gilt:',
    'agb.revoke.box.title': 'Widerrufsbelehrung',
    'agb.revoke.box.text':  'Du hast das Recht, binnen 14 Tagen ohne Angabe von Gründen zu widerrufen. Frist beginnt mit Vertragsschluss. Widerruf per E-Mail an',
    'agb.h6':            '6. Nutzungsrechte',
    'agb.rights.p1':     'Der Anbieter räumt ein nicht-exklusives, nicht übertragbares Recht ein, die App auf eigenen Geräten zu nutzen. Dekompilierung, Reverse Engineering, Weiterverteilung oder kommerzielle Nutzung der App selbst sind ohne schriftliche Genehmigung untersagt.',
    'agb.h7':            '7. Haftung',
    'agb.liab.p1':       'Der Anbieter haftet unbeschränkt für Schäden aus Verletzung von Leben, Körper oder Gesundheit sowie für vorsätzliche oder grob fahrlässige Pflichtverletzungen.',
    'agb.liab.p2':       'Im Übrigen ist die Haftung auf vorhersehbare Schäden begrenzt. TapFlow erbringt keine Anlage- oder Steuerberatung; finanzielle Entscheidungen auf Basis der App-Auswertungen liegen in der Verantwortung des Nutzers. Das Produkthaftungsgesetz bleibt unberührt.',
    'agb.h8':            '8. Datenschutz',
    'agb.priv.p1':       'Näheres zur Datenverarbeitung findest du in der <a href="datenschutz.html">Datenschutzerklärung</a>.',
    'agb.h9':            '9. Änderungen dieser AGB',
    'agb.changes.p1':    'Änderungen werden mit mindestens 30 Tagen Vorankündigung per E-Mail oder In-App-Hinweis mitgeteilt. Widerspricht der Nutzer nicht innerhalb von 30 Tagen, gelten die geänderten AGB als angenommen.',
    'agb.h10':           '10. Anwendbares Recht',
    'agb.law.p1':        'Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Für Verbraucher in der EU bleiben zwingend anwendbare Schutzvorschriften ihres Wohnsitzlandes unberührt. Für Verbraucher gilt der gesetzliche Gerichtsstand ihres Wohnsitzes.',
    'agb.h11':           '11. Open-Source-Hinweise',
    'agb.oss.p1':        'TapFlow verwendet Open-Source-Bibliotheken unter MIT-, BSD- und Apache-2.0-Lizenzen. Eine vollständige Liste ist in der App unter Einstellungen → Über TapFlow abrufbar. Der Beleg-Scanner verwendet Googles ML Kit gemäß den <a href="https://developers.google.com/ml-kit/terms" target="_blank" rel="noopener">ML Kit Terms of Service</a> im on-device-Modus.',
    'agb.h12':           '12. Salvatorische Klausel',
    'agb.salv.p1':       'Unwirksame Klauseln berühren die Wirksamkeit der übrigen AGB nicht; an ihre Stelle tritt die gesetzliche Regelung.',
  },

  en: {
    /* Shared */
    'common.back':        'Back to homepage',
    'common.lang':        'EN',
    'common.footer.tag':  'Your numbers. Privately understood.',
    'common.footer.copy': '© 2026 TapFlow. All rights reserved.',
    'common.country':     'Germany',
    'common.cfg.email':   'Email:',
    'common.cfg.note':    '(hereinafter "Provider")',

    /* ── Legal Notice ── */
    'imp.title':      'Legal Notice',
    'imp.meta':       'Information pursuant to § 5 TMG (German Telemedia Act)',
    'imp.h1':         'Provider',
    'imp.h2':         'Contact',
    'imp.h3':         'Tax Information',
    'imp.tax.p1':     'Small business owner pursuant to § 19 para. 1 UStG (German VAT Act) — no VAT is charged and no VAT identification number is disclosed.',
    'imp.h4':         'Editorially responsible (§ 18 para. 2 MStV)',
    'imp.h5':         'Disclaimer',
    'imp.h5a':        'Liability for Content',
    'imp.disc.p1':    'As a service provider we are responsible for our own content under § 7 para. 1 TMG. Under §§ 8–10 TMG we are not obliged to monitor third-party information.',
    'imp.disc.p2':    'Upon becoming aware of legal violations we will remove the relevant content immediately.',
    'imp.h5b':        'Liability for Links',
    'imp.links.p1':   'Our website contains links to external third-party sites. Their operators are responsible for their content; no legal violations were apparent at the time of linking.',
    'imp.h5c':        'Copyright',
    'imp.copy.p1':    'Content created by the site operator is subject to German copyright law. Reproduction or distribution outside legal limits requires written consent.',
    'imp.h6':         'Dispute Resolution',
    'imp.dispute.p1': 'The European Commission provides an online dispute resolution platform:',
    'imp.dispute.p2': 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',

    /* ── Privacy Policy ── */
    'prv.title':       'Privacy Policy',
    'prv.meta':        'Last updated: July 2026 · In accordance with GDPR and TMG',
    'prv.h1':          '1. Data Controller',
    'prv.resp.p1':     'For any privacy-related questions, contact us at the email address above.',
    'prv.h2':          '2. Core Principle: Local Data Processing',
    'prv.gen.p1':      'TapFlow is a <strong>local-first app</strong>: all financial data (transactions, budgets, savings goals) is stored and processed exclusively on your device. There is no TapFlow server that accesses this data. This privacy policy covers the <strong>TapFlow website</strong> and describes data processing in the app.',
    'prv.h3':          '3. Website — Hosting & Server Logs',
    'prv.host.p1':     'When you visit this website, the hosting provider automatically stores the following data in server log files:',
    'prv.host.l1':     'IP address (anonymised shortly after)',
    'prv.host.l2':     'Date and time of access',
    'prv.host.l3':     'URL accessed and referrer',
    'prv.host.l4':     'Browser and operating system',
    'prv.host.l5':     'Data volume transferred, HTTP status code',
    'prv.host.p2':     '<strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest in operating and securing the website). <strong>Retention:</strong> typically 7–30 days; not merged with other data sources.',
    'prv.h4':          '4. Website — No Email Collection',
    'prv.wait.p1':     'This website does <strong>not collect any email addresses</strong> and contains no waitlist, newsletter or sign-up form. No personal contact data is processed via the website. Should a sign-up option be added in future, this policy will be updated beforehand and will name the service used.',
    'prv.wait.p2':     'Once activated, the following data will be processed:',
    'prv.wait.l1':     'Email address',
    'prv.wait.l2':     'Time of sign-up',
    'prv.wait.p3':     '<strong>Purpose:</strong> notification about the app launch. <strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent). <strong>Retention:</strong> until unsubscribed or launch completed. This policy will be updated before activation and will name the service used.',
    'prv.h5':          '5. Website — Cookies & Local Storage',
    'prv.cookie.p1':   'This website uses <strong>no tracking cookies</strong> and no analytics. Only technical preferences are stored in the browser\'s local storage (theme, language). This data never leaves your device and does not require consent (§ 25 para. 2 no. 2 TTDSG).',
    'prv.h6':          '6. App — Local Data Storage',
    'prv.app.p1':      'All data entered in the app (transactions, budgets, savings goals, user profile) is stored exclusively as JSON files in the OS-protected app directory on your device. <strong>No data is transferred to external servers.</strong>',
    'prv.h6a':         '6.1 Receipt Scanner (On-Device OCR)',
    'prv.ocr.p1':      'The receipt scanner uses Google ML Kit Text Recognition in <em>on-device</em> mode. Recognition runs entirely on your device; photos are not transmitted to Google or to us. See: <a href="https://developers.google.com/ml-kit/terms" target="_blank" rel="noopener">Google ML Kit Terms of Service</a>.',
    'prv.h6b':         '6.2 Biometric Authentication',
    'prv.bio.p1':      'Fingerprint data is managed exclusively by the Android Keystore (secure system area). TapFlow never has access to raw biometric data.',
    'prv.h6c':         '6.3 Home Screen Widget',
    'prv.widget.p1':   'The optional home screen widget displays budget and savings data. The app writes values to a shared App Group container — a device-local communication channel between the app and the widget extension. No data leaves the device.',
    'prv.h6d':         '6.4 Local Notifications',
    'prv.notif.p1':    'TapFlow sends budget alerts as local push notifications. Processing is entirely on-device; no data is transmitted to external notification services.',
    'prv.h6e':         '6.5 Export (Premium)',
    'prv.exp.p1':      'PDF reports and backup exports only leave your device when you actively share them via the OS share function. TapFlow does not store any copies on servers.',
    'prv.h6f':         '6.6 Premium Subscription',
    'prv.prem.p1':     'TapFlow Premium is <strong>planned but not yet available</strong> — no payment processing currently takes place. Once Premium launches, purchases will be processed entirely through the <strong>Google Play Store</strong>; TapFlow receives no payment data. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google\'s Privacy Policy</a> will then apply.',
    'prv.h7':          '7. Your Rights (Art. 15–22 GDPR)',
    'prv.rights.p1':   'You have the right at any time to:',
    'prv.rights.l1':   '<strong>Access</strong> your stored personal data (Art. 15)',
    'prv.rights.l2':   '<strong>Rectification</strong> of inaccurate data (Art. 16)',
    'prv.rights.l3':   '<strong>Erasure</strong> of your data (Art. 17)',
    'prv.rights.l4':   '<strong>Restriction</strong> of processing (Art. 18)',
    'prv.rights.l5':   '<strong>Data portability</strong> (Art. 20)',
    'prv.rights.l6':   '<strong>Object</strong> to processing (Art. 21)',
    'prv.rights.l7':   '<strong>Withdraw</strong> consent (Art. 7(3))',
    'prv.rights.p2':   'To exercise your rights, contact us at:',
    'prv.h8':          '8. Right to Lodge a Complaint',
    'prv.auth.p1':     'You may lodge a complaint with a data protection supervisory authority. The authority competent for Hesse, Germany is the <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener">Hessian Commissioner for Data Protection and Freedom of Information</a>.',
    'prv.h9':          '9. Google Play — Data Safety',
    'prv.datasafety.p1': 'TapFlow does <strong>not collect, store or share</strong> any personal data with external servers or third parties. In the Google Play Data Safety form, all fields are declared as "No data collected". Exception: purchases via Google Play Billing are processed by Google itself — this is handled by Google\'s standard Play Store disclosures.',
    'prv.datasafety.tbl': '<table class="legal-table"><thead><tr><th>Data category</th><th>Collected?</th><th>Shared?</th></tr></thead><tbody><tr><td>Financial data (transactions, budgets)</td><td>No — local only</td><td>No</td></tr><tr><td>Personal data (name, salary)</td><td>No — local only</td><td>No</td></tr><tr><td>Photos (receipt scanner)</td><td>No — on-device OCR, not stored</td><td>No</td></tr><tr><td>Device identifiers</td><td>No</td><td>No</td></tr><tr><td>Location data</td><td>No</td><td>No</td></tr><tr><td>Purchase data (Google Play Billing)</td><td>Google, not TapFlow</td><td>—</td></tr></tbody></table>',
    'prv.h10':          '10. Changes to this Policy',
    'prv.upd.p1':      'We will update this policy whenever legal or technical changes require it. The date at the top of this page reflects the current version.',

    /* ── Terms & Conditions ── */
    'agb.title':         'Terms and Conditions',
    'agb.meta':          'Last updated: July 2026 · TapFlow is currently entirely free — Premium is planned but not yet available.',
    'agb.h1':            '1. Scope and Provider',
    'agb.scope.p1':      'These Terms apply to all users of the <strong>TapFlow</strong> app and associated website. Provider:',
    'agb.scope.p2':      'Conflicting terms of the user are only accepted if the provider expressly agrees in writing.',
    'agb.h2':            '2. Services',
    'agb.h2a':           '2.1 Free Core App',
    'agb.free.p1':       'TapFlow is a personal finance app that operates entirely on your device. All data stays local. Core features (transactions, categories, budgets, savings goals, analytics, receipt scanner, biometric lock) are permanently free. <strong>TapFlow is currently entirely free</strong> — no paid features are offered and no payments are processed.',
    'agb.h2b':           '2.2 TapFlow Premium (planned)',
    'agb.prem.p1':       '<strong>Planned, not yet available:</strong> Once TapFlow Premium is introduced, the following features are intended to be unlocked for <strong>€4.99 / month</strong> (incl. any applicable taxes):',
    'agb.prem.l1':       'PDF monthly reports',
    'agb.prem.l2':       'Backup export and import',
    'agb.prem.l3':       'Future Premium features at no extra charge',
    'agb.prem.p2':       'Premium is intended to be offered exclusively through the <strong>Google Play Store</strong>. Payment, invoicing and subscription management will then be handled by Google under their own terms. Until launch, no costs are incurred.',
    'agb.h3':            '3. Prices and Payment',
    'agb.price.p1':      'Currently <strong>no payments</strong> are processed through TapFlow; the app is entirely free. Once Premium becomes available, the price is intended to be <strong>€4.99 / month</strong>, billed monthly in advance; price changes are announced at least 30 days in advance. These Terms will be updated accordingly before any paid features launch.',
    'agb.h4':            '4. Term and Cancellation',
    'agb.cancel.p1':     'The subscription runs month-to-month and renews automatically unless cancelled before the end of the billing period.',
    'agb.cancel.p2':     'Cancel any time in the Google Play Store under Subscriptions. Premium remains active until the end of the paid period. No minimum term.',
    'agb.h5':            '5. Right of Withdrawal',
    'agb.revoke.p1':     'Since Premium purchases are processed through the Google Play Store, Google\'s refund policy applies (Google Play Terms of Service). Google typically allows a refund within 48 hours of purchase.',
    'agb.revoke.p2':     'For any direct purchases outside the app stores:',
    'agb.revoke.box.title': 'Right of Withdrawal',
    'agb.revoke.box.text':  'You have the right to withdraw from this contract within 14 days without giving any reason. The withdrawal period begins on the date of conclusion of the contract. To exercise this right, notify us by email at',
    'agb.h6':            '6. Usage Rights',
    'agb.rights.p1':     'The provider grants a non-exclusive, non-transferable right to install and use the app on your own devices. Decompilation, reverse engineering, redistribution or commercial exploitation of the app itself are prohibited without written consent.',
    'agb.h7':            '7. Liability',
    'agb.liab.p1':       'The provider is liable without limitation for damages arising from injury to life, body or health, and for intentional or grossly negligent breaches of duty.',
    'agb.liab.p2':       'Otherwise liability is limited to foreseeable damages. TapFlow does not provide investment or tax advice; financial decisions based on app analytics are the user\'s own responsibility. German product liability law remains unaffected.',
    'agb.h8':            '8. Privacy',
    'agb.priv.p1':       'See our <a href="datenschutz.html">Privacy Policy</a> for details on data processing.',
    'agb.h9':            '9. Changes to these Terms',
    'agb.changes.p1':    'Changes will be communicated with at least 30 days\' notice by email or in-app. If the user does not object within 30 days, the amended Terms are deemed accepted.',
    'agb.h10':           '10. Governing Law',
    'agb.law.p1':        'German law applies, excluding the UN CISG. EU consumers retain protection under mandatory provisions of their country of residence. The place of jurisdiction for consumers is their place of residence.',
    'agb.h11':           '11. Open Source Notices',
    'agb.oss.p1':        'TapFlow uses open-source libraries under MIT, BSD and Apache 2.0 licences. A full list is available in the app under Settings → About TapFlow. The receipt scanner uses Google ML Kit pursuant to the <a href="https://developers.google.com/ml-kit/terms" target="_blank" rel="noopener">ML Kit Terms of Service</a> in on-device mode.',
    'agb.h12':           '12. Severability',
    'agb.salv.p1':       'If any provision of these Terms is invalid, the remaining provisions are unaffected. The invalid provision is replaced by the applicable statutory rule.',
  }
};

/* ═══════════════════════════════════════════════════════════════
   Runtime
   ═══════════════════════════════════════════════════════════════ */
(function () {
  /* ── Theme ── */
  let theme = localStorage.getItem('tf_site_theme') || 'dark';
  const themeBtn = document.getElementById('themeToggle');
  const iconSun  = document.getElementById('iconSun');
  const iconMoon = document.getElementById('iconMoon');

  function applyTheme(t) {
    document.body.setAttribute('data-theme', t);
    iconSun.style.display  = t === 'dark' ? '' : 'none';
    iconMoon.style.display = t === 'dark' ? 'none' : '';
  }
  applyTheme(theme);

  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('tf_site_theme', theme);
    applyTheme(theme);
  });

  /* ── Language ── */
  let lang = localStorage.getItem('tf_lang') || 'de';
  const langBtn   = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function t(key) {
    return (LEGAL_T[lang] && LEGAL_T[lang][key]) || (LEGAL_T['de'][key]) || key;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    langLabel.textContent = t('common.lang');

    document.querySelectorAll('[data-li18n]').forEach(el => {
      el.textContent = t(el.dataset.li18n);
    });
    document.querySelectorAll('[data-li18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.li18nHtml);
    });

    injectConfig();
  }

  langBtn.addEventListener('click', () => {
    lang = lang === 'de' ? 'en' : 'de';
    localStorage.setItem('tf_lang', lang);
    applyLang();
  });

  /* ── Config injection ── */
  function isPlaceholder(val) {
    return !val || (val.startsWith('[') && val.endsWith(']'));
  }

  function cfgSpan(field) {
    const val = (typeof TAPFLOW_OWNER !== 'undefined') ? (TAPFLOW_OWNER[field] || '') : '';
    if (isPlaceholder(val)) return `<em class="legal-placeholder">${val || '?'}</em>`;
    return val;
  }

  function injectConfig() {
    if (typeof TAPFLOW_OWNER === 'undefined') return;

    /* single field */
    document.querySelectorAll('[data-cfg]').forEach(el => {
      const val = TAPFLOW_OWNER[el.dataset.cfg] || '';
      el.textContent = val;
      el.className = isPlaceholder(val) ? 'legal-placeholder' : '';
    });

    /* address block */
    document.querySelectorAll('[data-cfg-block="address"]').forEach(box => {
      box.innerHTML = `
        <p>${cfgSpan('name')}</p>
        <p>${cfgSpan('street')}</p>
        <p>${cfgSpan('city')}</p>
        <p><span data-li18n="common.country">${t('common.country')}</span></p>`;
    });

    /* contact block */
    document.querySelectorAll('[data-cfg-block="contact"]').forEach(box => {
      let html = `<p><span data-li18n="common.cfg.email">${t('common.cfg.email')}</span> ${cfgSpan('email')}</p>`;
      if (TAPFLOW_OWNER.phone) html += `<p>Tel.: ${cfgSpan('phone')}</p>`;
      box.innerHTML = html;
    });

    /* address inline (for "responsible for content") */
    document.querySelectorAll('[data-cfg-block="address-inline"]').forEach(box => {
      box.innerHTML = `
        <p>${cfgSpan('name')}</p>
        <p>${cfgSpan('street')}, ${cfgSpan('city')}</p>`;
    });

    /* provider box (for AGB §1) */
    document.querySelectorAll('[data-cfg-block="provider"]').forEach(box => {
      box.innerHTML = `
        <p>${cfgSpan('name')}</p>
        <p>${cfgSpan('street')}</p>
        <p>${cfgSpan('city')}</p>
        <p><span data-li18n="common.country">${t('common.country')}</span></p>
        <p><span data-li18n="common.cfg.email">${t('common.cfg.email')}</span> ${cfgSpan('email')}</p>
        <p><span data-li18n="common.cfg.note">${t('common.cfg.note')}</span></p>`;
    });

    /* Widerruf box */
    document.querySelectorAll('[data-cfg-block="widerruf"]').forEach(box => {
      box.innerHTML = `
        <p><strong data-li18n="agb.revoke.box.title">${t('agb.revoke.box.title')}</strong></p>
        <p data-li18n-html="agb.revoke.box.text">${t('agb.revoke.box.text')}</p> ${cfgSpan('email')}.`;
    });
  }

  applyLang();
})();
