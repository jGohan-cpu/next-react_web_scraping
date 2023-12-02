/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        domains: ['us.shein.com', 'img.ltwebstatic.com']
    }
}

module.exports = nextConfig;