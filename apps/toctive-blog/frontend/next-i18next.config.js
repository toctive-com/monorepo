const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ar',
    locales: ['en', 'ar'],
  },
  localePath: path.resolve(__dirname,
    process.env.NEXT_PUBLIC_IS_DEVELOPMENT === 'true'
      ? './apps/toctive-blog/frontend/public/locales'
      : '../../../public/locales'
  ),
};