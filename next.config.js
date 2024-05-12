/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    images: {
        domains: ["utfs.io"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
