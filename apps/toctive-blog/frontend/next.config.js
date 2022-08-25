// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    // domains: ['s3.envato.com', 'mir-s3-cdn-cf.behance.net'],
    allowFutureImage: true,
  }
};

module.exports = withNx(nextConfig);
