const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { StatsWriterPlugin } = require('webpack-stats-plugin')
const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent')
const nextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },

  webpack5: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [4, 8, 16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'localhost',
      'cms.ibexion.de',
      'ibexion-strapi-image-upload-bucket.s3.eu-central-1.amazonaws.com',
      'https://docker-strapi-ibexion.3iondl2h16bmc.eu-central-1.cs.amazonlightsail.com',
    ],
  },

  async redirects() {
    return []
  },

  /*   webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCiAgentWebpackPlugin({
          stats: { excludeAssets: [/stats.json/] },
        })
      ),
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
    }
    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'stats.json',
        stats: {
          context: './', // optional, will improve readability of the paths
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
        },
      })
    )
    return config
  }, */
}
module.exports = withPlugins(
  [
    [withBundleAnalyzer],

    // your other plugins here
  ],
  nextConfig
)
