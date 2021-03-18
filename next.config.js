const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['axendev.net', 'raw.githubusercontent.com']
  }
};
