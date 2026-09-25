/* Retrokiosken – demoside. Alle varer og priser er oppdiktet. */

const KATEGORIER = {
  gb: 'Game Boy',
  gba: 'Game Boy Advance',
  ds: 'Nintendo DS',
  pokemon: 'Pokémon',
  konsoll: 'Håndholdte',
  tilbehor: 'Tilbehør',
};

// type: gb | gbc | gba | ds | konsoll-sp | konsoll-gba | konsoll-gbc | konsoll-ds | lader | etui
const PRODUKTER = [
  { id: 'pokemon-emerald', tittel: 'Pokémon Emerald', type: 'gba', kat: ['gba', 'pokemon'], pris: 899, stand: 'Veldig god', region: 'PAL', innhold: 'Løs kassett', farge: '#1f8a4c', label: 'EMERALD', nytt: true,
    tekst: 'Den mest komplette Pokémon-opplevelsen på GBA, med Battle Frontier og både Groudon og Kyogre. Lagringen er testet og fungerer, og klokkebatteriet er sjekket.' },
  { id: 'pokemon-firered', tittel: 'Pokémon FireRed', type: 'gba', kat: ['gba', 'pokemon'], pris: 749, stand: 'Veldig god', region: 'PAL', innhold: 'Løs kassett', farge: '#d6352b', label: 'FIRERED', nytt: true,
    tekst: 'Nyversjonen av den originale Kanto-reisen, med oppdatert grafikk og Sevii-øyene. Perfekt inngang for nye og gamle trenere.' },
  { id: 'pokemon-ruby', tittel: 'Pokémon Ruby', type: 'gba', kat: ['gba', 'pokemon'], pris: 649, stand: 'God', region: 'PAL', innhold: 'Løs kassett', farge: '#b0213a', label: 'RUBY', batteri: true,
    tekst: 'Hoenn-regionen fra 2003. Nytt klokkebatteri er montert, så bær, tidevann og hendelser fungerer som de skal.' },
  { id: 'pokemon-sapphire', tittel: 'Pokémon Sapphire', type: 'gba', kat: ['gba', 'pokemon'], pris: 649, stand: 'Veldig god', region: 'PAL', innhold: 'Løs kassett', farge: '#2456b8', label: 'SAPPHIRE', batteri: true,
    tekst: 'Søsterutgaven til Ruby, med Kyogre på omslaget. Nytt klokkebatteri montert og testet.' },
  { id: 'zelda-minish-cap', tittel: 'The Legend of Zelda: The Minish Cap', type: 'gba', kat: ['gba'], pris: 699, stand: 'Veldig god', region: 'PAL', innhold: 'Løs kassett', farge: '#3b7d2f', label: 'MINISH',
    tekst: 'Et av de mest sjarmerende Zelda-eventyrene – krymp Link og utforsk Hyrule fra et helt nytt perspektiv.' },
  { id: 'mario-kart-super-circuit', tittel: 'Mario Kart: Super Circuit', type: 'gba', kat: ['gba'], pris: 349, stand: 'God', region: 'PAL', innhold: 'Løs kassett', farge: '#e5801a', label: 'KART',
    tekst: 'Klassisk Mario Kart i lomma, med alle SNES-banene som bonus.' },
  { id: 'pokemon-crystal', tittel: 'Pokémon Crystal', type: 'gbc', kat: ['gb', 'pokemon'], pris: 1290, stand: 'Veldig god', region: 'PAL', innhold: 'Løs kassett', farge: '#6fc3df', label: 'CRYSTAL', batteri: true, nytt: true,
    tekst: 'Den gjennomsiktige blå kassetten mange samler på. Nytt lagringsbatteri er loddet inn, og spillet er testet fra start.' },
  { id: 'pokemon-gold', tittel: 'Pokémon Gold', type: 'gbc', kat: ['gb', 'pokemon'], pris: 690, stand: 'God', region: 'PAL', innhold: 'Løs kassett', farge: '#d4a017', label: 'GOLD', batteri: true,
    tekst: 'Johto og Kanto i ett spill. Nytt lagringsbatteri montert – lagrer og husker tiden igjen.' },
  { id: 'pokemon-yellow', tittel: 'Pokémon Yellow', type: 'gb', kat: ['gb', 'pokemon'], pris: 590, stand: 'Brukt', region: 'PAL', innhold: 'Løs kassett', farge: '#f2d024', label: 'YELLOW',
    tekst: 'Pikachu følger deg gjennom hele Kanto. Etiketten har tydelige bruksspor, men spillet og lagringen fungerer perfekt.' },
  { id: 'tetris', tittel: 'Tetris', type: 'gb', kat: ['gb'], pris: 99, stand: 'God', region: 'PAL', innhold: 'Løs kassett', farge: '#7a7a7a', label: 'TETRIS',
    tekst: 'Spillet som solgte Game Boy. Testet og rengjort.' },
  { id: 'pokemon-heartgold', tittel: 'Pokémon HeartGold – komplett', type: 'ds', kat: ['ds', 'pokemon'], pris: 1990, stand: 'Som ny', region: 'PAL', innhold: 'Eske, manual, spill', farge: '#c89b1c', label: 'HEARTGOLD', nytt: true,
    tekst: 'Komplett i eske med manual. Pokéwalker følger ikke med. Et av de mest ettertraktede DS-spillene.' },
  { id: 'pokemon-platinum', tittel: 'Pokémon Platinum', type: 'ds', kat: ['ds', 'pokemon'], pris: 899, stand: 'Veldig god', region: 'PAL', innhold: 'Løs kassett', farge: '#8a8f99', label: 'PLATINUM',
    tekst: 'Den definitive Sinnoh-utgaven med Distortion World og Battle Frontier.' },
  { id: 'gba-sp-ags-101', tittel: 'Game Boy Advance SP (AGS-101)', type: 'konsoll-sp', kat: ['konsoll', 'gba'], pris: 1490, stand: 'Veldig god', region: 'PAL', innhold: 'Konsoll + lader', farge: '#2b3b8f', label: '', nytt: true,
    tekst: 'Modellen med den lyse bakbelyste skjermen – den beste måten å spille GBA på. Nytt batteri og ny lader følger med.' },
  { id: 'gba-lilla', tittel: 'Game Boy Advance – lilla', type: 'konsoll-gba', kat: ['konsoll', 'gba'], pris: 990, stand: 'God', region: 'PAL', innhold: 'Kun konsoll', farge: '#4b3f9e', label: '',
    tekst: 'Den originale GBA-en i klassisk lilla. Alle knapper, lyd og skjerm er testet. Bruker 2 AA-batterier.' },
  { id: 'gbc-turkis', tittel: 'Game Boy Color – turkis', type: 'konsoll-gbc', kat: ['konsoll', 'gb'], pris: 1190, stand: 'Veldig god', region: 'PAL', innhold: 'Kun konsoll', farge: '#1a9aa0', label: '',
    tekst: 'Game Boy Color i turkis. Rengjort innvendig, kontaktene er vasket, og lyden er sterk og klar.' },
  { id: 'ds-lite', tittel: 'Nintendo DS Lite – hvit', type: 'konsoll-ds', kat: ['konsoll', 'ds'], pris: 790, stand: 'God', region: 'PAL', innhold: 'Konsoll + lader', farge: '#e9e9ec', label: '',
    tekst: 'Spiller både DS- og GBA-spill. Små riper på lokket, begge skjermer uten døde piksler.' },
  { id: 'lader-gba-sp', tittel: 'Lader til GBA SP / DS', type: 'lader', kat: ['tilbehor'], pris: 149, stand: 'Ny', region: '–', innhold: 'Lader', farge: '#1e2340', label: '',
    tekst: 'Ny lader som passer Game Boy Advance SP og den første Nintendo DS-en.' },
  { id: 'etui-kassetter', tittel: 'Oppbevaringsetui for 12 kassetter', type: 'etui', kat: ['tilbehor'], pris: 99, stand: 'Ny', region: '–', innhold: 'Etui', farge: '#d6352b', label: '',
    tekst: 'Hardt etui med plass til 12 GBA- eller Game Boy-kassetter. Holder kontaktene fri for støv.' },
];

const kr = (n) => n.toLocaleString('nb-NO') + ',-';
const finn = (id) => PRODUKTER.find((p) => p.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/* ---------- Produktbilder (piksel-SVG, ingen offisielle bilder) ---------- */
function mork(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v * f));
  return `rgb(${c.join(',')})`;
}

function produktSvg(p) {
  const bg = '#fff4dc';
  const lbl = (x, y, w, h, size) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${p.farge}"/>
     <rect x="${x}" y="${y + h - 14}" width="${w}" height="14" fill="${mork(p.farge, 0.7)}"/>
     <text x="${x + w / 2}" y="${y + h / 2 - 2}" text-anchor="middle" font-family="Pixelify Sans, monospace" font-size="${size}" fill="#fff">${esc(p.label)}</text>`;
  let art = '';
  switch (p.type) {
    case 'gb':
    case 'gbc': {
      const body = p.type === 'gbc' && p.id === 'pokemon-crystal' ? 'rgba(111,195,223,0.55)' : '#c9c6c0';
      art = `<path d="M60 30H128L140 42V170H60Z" fill="${body}" stroke="#1e2340" stroke-width="3"/>
        <rect x="66" y="36" width="56" height="4" fill="#a19c95"/>
        ${lbl(70, 56, 60, 72, p.label.length > 7 ? 10 : 13)}
        <rect x="70" y="146" width="60" height="6" fill="#a19c95"/>`;
      break;
    }
    case 'gba':
      art = `<path d="M40 58H160V150H146L140 142H60L54 150H40Z" fill="#3a3a48" stroke="#1e2340" stroke-width="3"/>
        <rect x="46" y="64" width="108" height="6" fill="#55556a"/>
        ${lbl(56, 76, 88, 56, p.label.length > 7 ? 11 : 14)}`;
      break;
    case 'ds':
      art = `<path d="M62 50H138V150H70L62 142Z" fill="#2b2b33" stroke="#1e2340" stroke-width="3"/>
        ${lbl(70, 60, 60, 60, p.label.length > 7 ? 8.5 : 11)}
        <g fill="#c9a227">${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="${74 + i * 8}" y="132" width="5" height="12"/>`).join('')}</g>`;
      break;
    case 'konsoll-sp':
      art = `<rect x="52" y="38" width="96" height="62" rx="8" fill="${p.farge}" stroke="#1e2340" stroke-width="3"/>
        <rect x="66" y="48" width="68" height="44" fill="#1e2340"/><rect x="70" y="52" width="60" height="36" fill="#9bbc0f"/>
        <rect x="52" y="104" width="96" height="62" rx="8" fill="${mork(p.farge, 0.85)}" stroke="#1e2340" stroke-width="3"/>
        <rect x="66" y="124" width="18" height="6" fill="#1e2340"/><rect x="72" y="118" width="6" height="18" fill="#1e2340"/>
        <circle cx="124" cy="126" r="6" fill="#1e2340"/><circle cx="136" cy="118" r="6" fill="#1e2340"/>`;
      break;
    case 'konsoll-gba':
      art = `<path d="M30 80Q30 60 50 60H150Q170 60 170 80V132Q170 150 150 150H50Q30 150 30 132Z" fill="${p.farge}" stroke="#1e2340" stroke-width="3"/>
        <rect x="68" y="70" width="64" height="50" rx="3" fill="#1e2340"/><rect x="74" y="76" width="52" height="38" fill="#9bbc0f"/>
        <rect x="40" y="98" width="16" height="6" fill="#1e2340"/><rect x="45" y="93" width="6" height="16" fill="#1e2340"/>
        <circle cx="150" cy="104" r="5" fill="#1e2340"/><circle cx="160" cy="96" r="5" fill="#1e2340"/>`;
      break;
    case 'konsoll-gbc':
      art = `<path d="M62 26H138V150Q138 172 116 172H62Z" fill="${p.farge}" stroke="#1e2340" stroke-width="3"/>
        <rect x="70" y="36" width="60" height="56" rx="3" fill="#1e2340"/><rect x="78" y="42" width="44" height="42" fill="#9bbc0f"/>
        <rect x="72" y="118" width="18" height="6" fill="#1e2340"/><rect x="78" y="112" width="6" height="18" fill="#1e2340"/>
        <circle cx="112" cy="124" r="6" fill="#d6352b"/><circle cx="124" cy="114" r="6" fill="#d6352b"/>`;
      break;
    case 'konsoll-ds':
      art = `<rect x="50" y="30" width="100" height="68" rx="6" fill="${p.farge}" stroke="#1e2340" stroke-width="3"/>
        <rect x="68" y="40" width="64" height="48" fill="#1e2340"/><rect x="72" y="44" width="56" height="40" fill="#6fc3df"/>
        <rect x="50" y="102" width="100" height="68" rx="6" fill="${p.farge}" stroke="#1e2340" stroke-width="3"/>
        <rect x="72" y="112" width="56" height="44" fill="#1e2340"/><rect x="76" y="116" width="48" height="36" fill="#9bbc0f"/>
        <rect x="55" y="130" width="12" height="4" fill="#1e2340"/><rect x="59" y="126" width="4" height="12" fill="#1e2340"/>
        <circle cx="140" cy="128" r="3.5" fill="#1e2340"/><circle cx="140" cy="140" r="3.5" fill="#1e2340"/>`;
      break;
    case 'lader':
      art = `<rect x="70" y="50" width="60" height="60" rx="8" fill="${p.farge}" stroke="#1e2340" stroke-width="3"/>
        <rect x="84" y="36" width="8" height="16" fill="#8a8f99"/><rect x="108" y="36" width="8" height="16" fill="#8a8f99"/>
        <path d="M100 110V140Q100 160 120 160H150" fill="none" stroke="#1e2340" stroke-width="6"/>
        <rect x="148" y="152" width="16" height="16" rx="2" fill="#1e2340"/>
        <text x="100" y="86" text-anchor="middle" font-family="Pixelify Sans, monospace" font-size="16" fill="#f2b632">5V</text>`;
      break;
    case 'etui':
      art = `<rect x="36" y="54" width="128" height="96" rx="14" fill="${p.farge}" stroke="#1e2340" stroke-width="3"/>
        <rect x="36" y="96" width="128" height="8" fill="${mork(p.farge, 0.7)}"/>
        <rect x="92" y="90" width="16" height="20" rx="3" fill="#f2b632" stroke="#1e2340" stroke-width="2"/>`;
      break;
  }
  return `<svg viewBox="0 0 200 200" role="img" aria-label="${esc(p.tittel)}" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${bg}"/>
    <g fill="#e3d5b5" opacity="0.7">${Array.from({ length: 6 }, (_, i) => `<circle cx="${20 + i * 32}" cy="186" r="2"/>`).join('')}</g>
    ${art}</svg>`;
}

/* ---------- Pikselikoner ---------- */
const IKON = {
  check: 'M18 6h2v2h-2zM16 8h2v2h-2zM14 10h2v2h-2zM12 12h2v2h-2zM10 14h2v2h-2zM8 16h2v2H8zM6 14h2v2H6zM4 12h2v2H4z',
  truck: 'M2 6h12v10H2zM14 9h4l4 4v3h-8zM4 16h4v4H4zM16 16h4v4h-4z',
  shield: 'M6 2h12v2h2v8h-2v4h-2v2h-2v2h-4v-2H8v-2H6v-4H4V4h2zM10 10h2v2h-2zM12 8h2v2h-2zM8 8h2v2H8z',
  search: 'M6 2h8v2h2v2h2v8h-2v2h-2v2H6v-2H4v-2H2V6h2V4h2zM6 6v8h8V6zM16 16h2v2h-2zM18 18h2v2h-2zM20 20h2v2h-2z',
  spray: 'M8 8h8v14H8zM10 4h4v4h-4zM16 4h2v2h-2zM18 2h2v2h-2zM18 6h2v2h-2zM20 4h2v2h-2z',
  gamepad: 'M4 6h16v2h2v10h-4v-2H6v2H2V8h2zM6 10v2H4v2h2v2h2v-2h2v-2H8v-2zM16 10h2v2h-2zM14 12h2v2h-2z',
  save: 'M2 2h16l4 4v16H2zM6 4v6h10V4zM6 14v6h12v-6z',
};
const ikon = (n) => `<span class="pikselikon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" shape-rendering="crispEdges"><path d="${IKON[n]}"/></svg></span>`;

/* ---------- Handlekurv (demo, lagres bare i denne nettleseren) ---------- */
function lesKurv() {
  try { return JSON.parse(localStorage.getItem('rk-kurv') || '[]'); } catch { return []; }
}
function lagreKurv(k) {
  try { localStorage.setItem('rk-kurv', JSON.stringify(k)); } catch { /* privat modus o.l. */ }
}
function oppdaterKurvTeller() {
  const n = lesKurv().length;
  document.querySelectorAll('.kurv-antall').forEach((el) => { el.textContent = n; el.hidden = n === 0; });
}
function leggIKurv(id) {
  const k = lesKurv(); k.push(id); lagreKurv(k);
  oppdaterKurvTeller();
  toast(`«${finn(id).tittel}» er lagt i handlekurven. (Demo – ingen ekte kjøp.)`);
}
let toastTimer;
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
  t.textContent = msg; t.classList.add('vis');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('vis'), 3200);
}

/* ---------- Felles header / footer ---------- */
const SIDE = document.body.dataset.side;
function header() {
  const lenker = [
    ['spill.html', 'Alle varer', 'spill'],
    ['spill.html?k=gb', 'Game Boy'], ['spill.html?k=gba', 'GBA'], ['spill.html?k=ds', 'DS'],
    ['spill.html?k=pokemon', 'Pokémon'], ['spill.html?k=konsoll', 'Konsoller'], ['spill.html?k=tilbehor', 'Tilbehør'],
  ];
  const q = new URLSearchParams(location.search).get('k');
  const nav = lenker.map(([href, navn]) => {
    const aktiv = SIDE === 'spill' && ((href.includes('?k=') && href.endsWith('=' + q)) || (!href.includes('?') && !q));
    return `<a href="${href}"${aktiv ? ' aria-current="page"' : ''}>${navn}</a>`;
  }).join('');
  return `
  <div class="demo">Demoside – ikke en ekte butikk. Varer og priser er oppdiktet.</div>
  <div class="kunngjoring" id="kunngjoring">Alle spill er testet og garantert ekte</div>
  <header class="header">
    <div class="wrap header__inner">
      <button class="ikonknapp meny-knapp" aria-label="Meny" aria-expanded="false" aria-controls="hovedmeny">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg></button>
      <a class="header__logo" href="index.html"><img src="assets/retrokiosken-logo.svg" alt="Retrokiosken – til forsiden" width="475" height="96"></a>
      <nav id="hovedmeny" aria-label="Hovedmeny">${nav}</nav>
      <div class="header__handling">
        <a class="ikonknapp" href="spill.html" aria-label="Søk"><svg viewBox="0 0 24 24" fill="currentColor" shape-rendering="crispEdges"><path d="${IKON.search}"/></svg></a>
        <button class="ikonknapp kurv-knapp" aria-label="Handlekurv">
          <svg viewBox="0 0 24 24" fill="currentColor" shape-rendering="crispEdges"><path d="M1 3h4l1 3h16l-3 9H8l-3-10H1zM8 18h3v3H8zM16 18h3v3h-3z"/></svg>
          <span class="kurv-antall" hidden>0</span></button>
      </div>
    </div>
  </header>`;
}
function footer() {
  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div><img src="assets/retrokiosken-logo-mork.svg" alt="Retrokiosken" width="475" height="96">
          <p>Originale retrospill og håndholdte konsoller – sjekket for ekthet, rengjort og testet før de sendes.</p></div>
        <div><h3>Butikken</h3><ul>
          <li><a href="spill.html">Alle varer</a></li><li><a href="spill.html?k=pokemon">Pokémon</a></li>
          <li><a href="spill.html?k=konsoll">Konsoller</a></li><li><a href="index.html#slik-tester-vi">Slik tester vi</a></li></ul></div>
        <div><h3>Kundeservice</h3><ul>
          <li><a href="#" data-demo>Frakt og levering</a></li><li><a href="#" data-demo>Retur og angrerett</a></li>
          <li><a href="#" data-demo>Kontakt oss</a></li><li><a href="#" data-demo>Personvern</a></li></ul></div>
      </div>
      <div class="footer__bunn"><span>© ${new Date().getFullYear()} Retrokiosken · Demo</span>
        <span>Nintendo, Game Boy og Pokémon er varemerker som tilhører sine eiere.</span></div>
    </div>
  </footer>`;
}

/* ---------- Produktkort ---------- */
function kort(p) {
  const merker = [];
  if (p.nytt) merker.push('<span class="merke merke--rod">Nyhet</span>');
  if (p.batteri) merker.push('<span class="merke merke--gul">Nytt batteri</span>');
  if (p.innhold.startsWith('Eske')) merker.push('<span class="merke">Komplett</span>');
  const plattform = KATEGORIER[p.kat.find((k) => k !== 'pokemon')] || '';
  return `<li><article class="kort">
    <a class="kort__bilde" href="produkt.html?id=${p.id}" tabindex="-1" aria-hidden="true">${produktSvg(p)}
      <span class="kort__merker">${merker.join('')}</span></a>
    <div class="kort__info">
      <a class="kort__tittel" href="produkt.html?id=${p.id}">${esc(p.tittel)}</a>
      <span class="kort__meta">${plattform} · ${p.stand}</span>
      <span class="pris">${kr(p.pris)}</span>
    </div></article></li>`;
}

/* ---------- Sider ---------- */
function forside() {
  const nye = PRODUKTER.filter((p) => p.nytt).concat(PRODUKTER.filter((p) => !p.nytt)).slice(0, 8);
  document.getElementById('nytt').innerHTML = nye.map(kort).join('');
  document.querySelectorAll('[data-antall]').forEach((el) => {
    const n = PRODUKTER.filter((p) => p.kat.includes(el.dataset.antall)).length;
    el.textContent = `${n} varer`;
  });
  const form = document.getElementById('nyhetsbrev');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = form.querySelector('input'); const svar = document.getElementById('nb-svar');
    if (!inp.value.trim() || !inp.checkValidity()) { svar.textContent = 'Skriv inn en gyldig e-postadresse.'; inp.focus(); return; }
    svar.textContent = 'Takk! (Demo – ingen e-post er lagret eller sendt.)'; form.reset();
  });
}

function kolleksjon() {
  const params = new URLSearchParams(location.search);
  let k = params.get('k');
  if (k && !KATEGORIER[k]) k = null;
  const tittel = document.getElementById('kol-tittel');
  const filtre = document.getElementById('filtre');
  const grid = document.getElementById('grid');
  const antall = document.getElementById('antall');
  const sort = document.getElementById('sorter');
  if ([...sort.options].some((o) => o.value === params.get('sort'))) sort.value = params.get('sort');

  filtre.innerHTML = [['', 'Alle']].concat(Object.entries(KATEGORIER))
    .map(([id, navn]) => `<button class="filter" data-k="${id}" aria-pressed="${(k || '') === id}">${navn}</button>`).join('');

  function tegn() {
    let liste = PRODUKTER.filter((p) => !k || p.kat.includes(k));
    if (sort.value === 'pris-opp') liste = [...liste].sort((a, b) => a.pris - b.pris);
    if (sort.value === 'pris-ned') liste = [...liste].sort((a, b) => b.pris - a.pris);
    if (sort.value === 'nyest') liste = [...liste].sort((a, b) => (b.nytt ? 1 : 0) - (a.nytt ? 1 : 0));
    grid.innerHTML = liste.map(kort).join('');
    antall.textContent = `${liste.length} ${liste.length === 1 ? 'vare' : 'varer'}`;
    tittel.textContent = k ? KATEGORIER[k] : 'Alle varer';
    document.title = `${tittel.textContent} – Retrokiosken (demo)`;
    filtre.querySelectorAll('.filter').forEach((b) => b.setAttribute('aria-pressed', String((k || '') === b.dataset.k)));
  }
  filtre.addEventListener('click', (e) => {
    const b = e.target.closest('.filter'); if (!b) return;
    k = b.dataset.k || null;
    history.replaceState(null, '', k ? `?k=${k}` : location.pathname);
    tegn();
  });
  sort.addEventListener('change', tegn);
  tegn();
}

function produktside() {
  const p = finn(new URLSearchParams(location.search).get('id')) || PRODUKTER[0];
  document.title = `${p.tittel} – Retrokiosken (demo)`;
  const hoved = p.kat.find((x) => x !== 'pokemon');
  const erSpill = ['gb', 'gbc', 'gba', 'ds'].includes(p.type);
  const sjekk = erSpill
    ? ['Sjekket at kassetten er ekte (kretskort og etikett)', 'Testet på original maskinvare', p.batteri ? 'Nytt lagringsbatteri montert' : 'Lagring testet', 'Kontakter rengjort']
    : p.type.startsWith('konsoll')
      ? ['Alle knapper, lyd og skjerm testet', 'Rengjort innvendig og utvendig', 'Batteri/strøm testet']
      : ['Ny vare', 'Kontrollert før sending'];
  document.getElementById('produkt').innerHTML = `
    <nav class="brodsmuler" aria-label="Brødsmuler"><a href="index.html">Forside</a> / <a href="spill.html?k=${hoved}">${KATEGORIER[hoved]}</a> / ${esc(p.tittel)}</nav>
    <div class="produkt">
      <div class="produkt__bilde">${produktSvg(p)}</div>
      <div>
        <div class="kort__merker" style="position:static;flex-direction:row;flex-wrap:wrap">${p.nytt ? '<span class="merke merke--rod">Nyhet</span>' : ''}${p.batteri ? '<span class="merke merke--gul">Nytt batteri</span>' : ''}${p.kat.includes('pokemon') ? '<span class="merke">Pokémon</span>' : ''}</div>
        <h1>${esc(p.tittel)}</h1>
        <div class="produkt__meta">${KATEGORIER[hoved]}</div>
        <p class="pris pris--stor">${kr(p.pris)}</p>
        <div class="lager">På lager – 1 stk. (bildet viser en illustrasjon)</div>
        <button class="knapp knapp--bred" id="kjop">Legg i handlekurven</button>
        <dl class="egenskaper">
          <div><dt>Stand</dt><dd>${p.stand}</dd></div>
          <div><dt>Region</dt><dd>${p.region}</dd></div>
          <div><dt>Innhold</dt><dd>${p.innhold}</dd></div>
        </dl>
        <ul class="sjekkliste"><li style="display:block"><h2>Testet av Retrokiosken</h2></li>${sjekk.map((s) => `<li>${s}</li>`).join('')}</ul>
        <div class="beskrivelse"><p>${esc(p.tekst)}</p></div>
      </div>
    </div>`;
  document.getElementById('kjop').addEventListener('click', () => leggIKurv(p.id));
  const relaterte = PRODUKTER.filter((x) => x.id !== p.id && x.kat.includes(hoved)).slice(0, 4);
  document.getElementById('relaterte').innerHTML = relaterte.map(kort).join('');
}

/* ---------- Oppstart ---------- */
document.getElementById('topp').innerHTML = header();
document.getElementById('bunn').innerHTML = footer();
oppdaterKurvTeller();

const menyKnapp = document.querySelector('.meny-knapp');
menyKnapp.addEventListener('click', () => {
  const nav = document.getElementById('hovedmeny');
  const apen = nav.classList.toggle('apen');
  menyKnapp.setAttribute('aria-expanded', String(apen));
});
document.querySelector('.kurv-knapp').addEventListener('click', () => {
  const n = lesKurv().length;
  toast(n ? `${n} ${n === 1 ? 'vare' : 'varer'} i handlekurven. Kassen settes opp i Shopify – dette er bare en demo.` : 'Handlekurven er tom.');
});
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-demo]')) { e.preventDefault(); toast('Denne siden kommer i den ekte butikken.'); }
});

const meldinger = ['Alle spill er testet og garantert ekte', 'Rask levering med Posten og PostNord', 'Spesialister på Game Boy, GBA og Pokémon'];
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let i = 0;
  setInterval(() => { i = (i + 1) % meldinger.length; document.getElementById('kunngjoring').textContent = meldinger[i]; }, 4000);
}

if (SIDE === 'forside') forside();
if (SIDE === 'spill') kolleksjon();
if (SIDE === 'produkt') produktside();
