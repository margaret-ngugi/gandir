/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
   
    webpack: (
        config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      config.plugins = [...config.plugins,
        new webpack.DefinePlugin({
          '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
        })
      ]
    
      return config
    },
  }
