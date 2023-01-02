/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader']
        });

        return config;
    },
    images: {
        domains: ['images.ctfassets.net']
    }
};

module.exports = nextConfig;
