/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
	DOMAIN: 'cookie-auth-example'
  }
}

module.exports = nextConfig
