/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // If you serve images from local assets, they'll come from the public folder.
        // For remote images, use remotePatterns to allow only specific URL patterns.
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "drinkwrapped.fz1010.online",
                pathname: "/**",
            },
        ],
    },
}

module.exports = nextConfig
