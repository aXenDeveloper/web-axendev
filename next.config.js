const nextTranslate = require('next-translate');

module.exports = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://ips.axendev.net/contact',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [{ source: '/contact', destination: 'https://ips.axendev.net/contact' }];
  },
  ...nextTranslate(),
  images: {
    domains: ['raw.githubusercontent.com', 'files.axendev.net']
  },
  future: {
    webpack5: true
  }
};
