const nextTranslate = require('next-translate');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://ips.axendev.net/contact',
        permanent: true
      },
      {
        source: '/forum',
        destination: 'https://ips.axendev.net',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      { source: '/contact', destination: 'https://ips.axendev.net/contact' },
      { source: '/forum', destination: 'https://ips.axendev.net' }
    ];
  },
  ...nextTranslate(),
  images: {
    domains: ['raw.githubusercontent.com', 'files.axendev.net']
  },
  future: {
    webpack5: true
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  }
});
