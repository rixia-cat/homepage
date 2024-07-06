/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.ctfassets.net",
                port:"",
                pathname:"/**",
            }
        ]
    }
};

export default nextConfig;
