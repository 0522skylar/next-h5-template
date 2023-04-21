const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
    @import "@styles/color.scss";
    `,
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'pages'),
    ],
  },
}

module.exports = nextConfig
