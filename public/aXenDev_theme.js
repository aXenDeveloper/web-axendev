(function () {
  const checkDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (
    (checkDark && !localStorage.getItem('aXenDev_theme_manual')) ||
    localStorage.getItem('aXenDev_theme') === 'dark'
  ) {
    document.documentElement.setAttribute('theme', 'dark');
  }
})();
