/* Quick config — update these for your real links/colors/brand */ 
const CONFIG = {
  brand: 'Firstcoin',
  pump: 'https://pump.fun',
  twitter: 'https://x.com/firstcoinonpump',
  telegram: 'https://t.me/firstcoin',
  youtube: 'https://www.youtube.com/watch?v=BLwiPThwQ4c',
  coins: [
    'Firstcoin (FIRST) — the first coin to send on Pump.fun',
    'Bitcoin (BTC)','Ethereum (ETH)','Solana (SOL)','Dogecoin (DOGE)','Cardano (ADA)',
    'Ripple (XRP)','Litecoin (LTC)','Chainlink (LINK)','Avalanche (AVAX)',
    'Polkadot (DOT)','TRON (TRX)','Shiba Inu (SHIB)','Pepe (PEPE)','Bonk (BONK)',
    'Sui (SUI)','Aptos (APT)'
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Brand + year
  document.getElementById('brandName').textContent = CONFIG.brand;
  document.getElementById('year').textContent = new Date().getFullYear();
  // Links
  document.getElementById('pumpLink').href = CONFIG.pump;
  document.getElementById('pumpLink2').href = CONFIG.pump;
  const t = document.getElementById('twitterLink');
  const g = document.getElementById('telegramLink');
  const y = document.getElementById('youtubeLink');
  t.href = CONFIG.twitter; t.textContent = CONFIG.twitter.replace('https://','');
  g.href = CONFIG.telegram; g.textContent = CONFIG.telegram.replace('https://','');
  y.href = CONFIG.youtube; y.textContent = CONFIG.youtube.replace('https://','');

  // Build ticker (duplicated for seamless loop)
  const track = document.getElementById('tickerTrack');
  const items = CONFIG.coins.concat(CONFIG.coins);
  track.innerHTML = items.map(c => `<span class="item"><span class="dot"></span>${c}</span>`).join('');

  // Exhaust particles
  const exhaust = document.getElementById('exhaust');
  for (let i = 0; i < 10; i++) {
    const s = document.createElement('span');
    s.style.animationDelay = (i * 0.08) + 's';
    exhaust.appendChild(s);
  }

  // Launch controls
  const ignite = () => document.body.classList.add('launching');
  document.getElementById('igniteBtn').addEventListener('click', ignite);
  document.getElementById('launchBtn').addEventListener('click', ignite);
  document.getElementById('igniteAgain').addEventListener('click', () => {
    document.body.classList.remove('launching');
    // restart animation shortly after to replay
    setTimeout(() => document.body.classList.add('launching'), 50);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
