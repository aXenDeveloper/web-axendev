const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['raw.githubusercontent.com', 'files.axendev.net']
  },
  future: {
    webpack5: true
  }
};
