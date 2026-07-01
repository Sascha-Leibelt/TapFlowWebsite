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
    'imp.tax.p1':     'Das Gewerbe befindet sich derzeit in Anmeldung. Bis dahin wird TapFlow privat und ohne Einnahmen betrieben — es werden keine Umsätze erzielt und keine Umsatzsteuer berechnet. Nach der Gewerbeanmeldung wird voraussichtlich die Kleinunternehmerregelung gemäß § 19 Abs. 1 UStG in Anspruch genommen; auch dann wird keine Umsatzsteuer ausgewiesen und keine Umsatzsteuer-Identifikationsnummer geführt. Dieses Impressum wird mit der Gewerbeanmeldung entsprechend aktualisiert.',
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
    'prv.gen.p1':      'TapFlow ist eine <strong>lokal-first App</strong>: Alle Finanzdaten (Transaktionen, Budgets, Sparziele, Belege) werden ausschließlich auf deinem Gerät gespeichert und verarbeitet. Es gibt keinen TapFlow-Server, der auf diese Inhalte zugreift. <strong>Einzige Ausnahme</strong> ist die Abo-Verwaltung: Für die (künftige) Premium-Funktion bindet die App den Dienst <strong>RevenueCat</strong> ein, der bereits beim App-Start eine Verbindung herstellt und dabei technische Geräte- und Nutzungsdaten verarbeitet (siehe Abschnitt 6.6). Diese Datenschutzerklärung beschreibt die Datenverarbeitung auf der Website und in der App.',
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
    'prv.h6f':         '6.6 Premium-Abo & Abo-Verwaltung (RevenueCat)',
    'prv.prem.p1':     'TapFlow Premium ist <strong>geplant, aber noch nicht buchbar</strong>. Für die Verwaltung und Prüfung von Abos setzt die App den Dienst <strong>RevenueCat</strong> (RevenueCat, Inc., 1050 Sansome Street, San Francisco, CA 94111, USA) ein. Die RevenueCat-SDK wird <strong>bereits beim Start der App</strong> initialisiert und verbindet sich mit Servern von RevenueCat in den <strong>USA</strong>. Dabei werden verarbeitet: eine pseudonyme App-Nutzer-ID, Geräteinformationen (Gerätemodell, Betriebssystem, Sprache/Region), die IP-Adresse sowie – sobald Käufe möglich sind – der Kauf- und Abo-Status. Die eigentliche Zahlung läuft über den <strong>Google Play Store</strong>; TapFlow erhält keine Zahlungs- oder Kreditkartendaten. <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahmen) und lit. f (berechtigtes Interesse an einer funktionierenden Abo-Verwaltung). <strong>Übermittlung in die USA</strong> auf Grundlage der Auftragsverarbeitung und der EU-Standardvertragsklauseln von RevenueCat. Es gelten ergänzend die <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">Datenschutzerklärung von RevenueCat</a> und die <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">von Google</a>. <strong>Speicherdauer &amp; Löschung:</strong> Deine bei RevenueCat gespeicherten Daten bleiben bis zur Löschung erhalten. Eine formlose E-Mail an die oben genannte Kontaktadresse genügt – wir löschen deinen RevenueCat-Datensatz anschließend über das RevenueCat-Dashboard.',
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
    'prv.datasafety.p1': 'Die eigentlichen Inhalte (Transaktionen, Budgets, Belege, Profil) werden <strong>ausschließlich lokal</strong> verarbeitet und nicht an Server übermittelt. Über die Abo-Verwaltung <strong>RevenueCat</strong> (siehe 6.6) werden jedoch Kauf-/Abo-Daten sowie eine App-/Geräte-Kennung erhoben und im Auftrag von TapFlow durch RevenueCat (USA) verarbeitet. Im Google Play Data Safety Formular sind diese beiden Kategorien als <em>„erhoben"</em> deklariert (Zweck: App-Funktionalität); die Übertragung erfolgt verschlüsselt, und eine Löschung ist auf Anfrage möglich. Alle übrigen Kategorien (Finanzinhalte, Name/Gehalt, Fotos, Standort) sind mit <em>„keine Daten erhoben"</em> angegeben.',
    'prv.datasafety.tbl': '<table class="legal-table"><thead><tr><th>Datenkategorie</th><th>Erhoben?</th><th>Empfänger</th></tr></thead><tbody><tr><td>Finanzdaten (Transaktionen, Budgets, Belege)</td><td>Nein — nur lokal</td><td>—</td></tr><tr><td>Personendaten (Name, Gehalt)</td><td>Nein — nur lokal</td><td>—</td></tr><tr><td>Fotos (Beleg-Scanner)</td><td>Nein — on-device OCR, kein Speichern</td><td>—</td></tr><tr><td>Standortdaten</td><td>Nein</td><td>—</td></tr><tr><td>App-/Geräte-Kennung (RevenueCat App-Nutzer-ID)</td><td>Ja — via RevenueCat</td><td>RevenueCat (Auftragsverarbeiter, USA)</td></tr><tr><td>Kauf-/Abo-Daten (RevenueCat)</td><td>Ja — via RevenueCat</td><td>RevenueCat (Auftragsverarbeiter, USA)</td></tr><tr><td>Zahlungsdaten (Google Play Billing)</td><td>Google, nicht TapFlow</td><td>Google</td></tr></tbody></table>',
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
    'imp.tax.p1':     'The business is currently in the process of being registered. Until then, TapFlow is operated privately and without income — no revenue is generated and no VAT is charged. After registration, the small-business scheme under § 19 para. 1 UStG (German VAT Act) is expected to be used; even then, no VAT will be charged and no VAT identification number will be disclosed. This legal notice will be updated once the business is registered.',
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
    'prv.gen.p1':      'TapFlow is a <strong>local-first app</strong>: all financial data (transactions, budgets, savings goals, receipts) is stored and processed exclusively on your device. There is no TapFlow server that accesses this content. The <strong>only exception</strong> is subscription management: for the (upcoming) Premium feature the app integrates the service <strong>RevenueCat</strong>, which establishes a connection as soon as the app starts and processes technical device and usage data (see section 6.6). This privacy policy covers data processing both on the website and in the app.',
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
    'prv.h6f':         '6.6 Premium Subscription & Subscription Management (RevenueCat)',
    'prv.prem.p1':     'TapFlow Premium is <strong>planned but not yet purchasable</strong>. To manage and verify subscriptions, the app uses the service <strong>RevenueCat</strong> (RevenueCat, Inc., 1050 Sansome Street, San Francisco, CA 94111, USA). The RevenueCat SDK is initialised <strong>as soon as the app starts</strong> and connects to RevenueCat servers in the <strong>USA</strong>. In doing so it processes: a pseudonymous app user ID, device information (device model, operating system, language/region), the IP address and — once purchases are possible — purchase and subscription status. The actual payment runs through the <strong>Google Play Store</strong>; TapFlow receives no payment or card data. <strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract or pre-contractual steps) and (f) (legitimate interest in functioning subscription management). <strong>Transfer to the USA</strong> is based on data processing terms and the EU Standard Contractual Clauses provided by RevenueCat. The <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">RevenueCat Privacy Policy</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google\'s Privacy Policy</a> also apply. <strong>Retention &amp; deletion:</strong> your data stored at RevenueCat is retained until deletion. A short email to the contact address above is enough — we then delete your RevenueCat record via the RevenueCat dashboard.',
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
    'prv.datasafety.p1': 'The actual content (transactions, budgets, receipts, profile) is processed <strong>exclusively locally</strong> and is not transmitted to any server. However, the subscription service <strong>RevenueCat</strong> (see 6.6) collects purchase/subscription data and an app/device identifier, processed by RevenueCat (USA) on TapFlow\'s behalf. In the Google Play Data Safety form these two categories are declared as <em>"collected"</em> (purpose: app functionality); transfer is encrypted, and deletion is available on request. All other categories (financial content, name/salary, photos, location) are declared as <em>"no data collected"</em>.',
    'prv.datasafety.tbl': '<table class="legal-table"><thead><tr><th>Data category</th><th>Collected?</th><th>Recipient</th></tr></thead><tbody><tr><td>Financial data (transactions, budgets, receipts)</td><td>No — local only</td><td>—</td></tr><tr><td>Personal data (name, salary)</td><td>No — local only</td><td>—</td></tr><tr><td>Photos (receipt scanner)</td><td>No — on-device OCR, not stored</td><td>—</td></tr><tr><td>Location data</td><td>No</td><td>—</td></tr><tr><td>App/device identifier (RevenueCat app user ID)</td><td>Yes — via RevenueCat</td><td>RevenueCat (processor, USA)</td></tr><tr><td>Purchase/subscription data (RevenueCat)</td><td>Yes — via RevenueCat</td><td>RevenueCat (processor, USA)</td></tr><tr><td>Payment data (Google Play Billing)</td><td>Google, not TapFlow</td><td>Google</td></tr></tbody></table>',
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
