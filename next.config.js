const path = require('path')
const env = require("./env")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ...env[process.env.MODE],
  },
  sassOptions: {
    prependData: `
    @import "@styles/color.scss";
    `,
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'pages'),
    ],
  },
  // 转译node_modules的依赖以兼容低端机的语法
  transpilePackages: ['ahooks', 'antd-mobile']
}

module.exports = nextConfig
