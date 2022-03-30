/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/addBot',
        destination: 'https://discord.com/api/oauth2/authorize?client_id=953747018579341402&permissions=1024&scope=bot',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
