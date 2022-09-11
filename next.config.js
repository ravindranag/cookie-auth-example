/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
	DOMAIN: 'cookie-auth-example.ml'
  }
}

module.exports = nextConfig
