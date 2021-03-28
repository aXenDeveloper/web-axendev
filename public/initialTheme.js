(function () {
  const checkDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (checkDark && !localStorage.getItem('aXenDev_darkTheme_manual')) {
    document.body.classList.add('darkTheme');
  }

  if (localStorage.getItem('aXenDev_darkTheme')) {
    document.body.classList.add('darkTheme');
  }
})();
