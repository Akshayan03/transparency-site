// Applies a saved light/dark choice before first paint (kept external so the CSP needs no inline script).
try {
  var t = JSON.parse(localStorage.getItem('transparency.settings') || '{}').theme;
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
} catch (e) {}
