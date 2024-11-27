const { override } = require('customize-cra')

// const devServerConfig = () => (config) => {
//     config.client = {
//         ...config.client,
//         overlay: {
//             errors: false,
//             warnings: false,
//             runtimeErrors: false,
//         },
//     }
//     config.onListening = function (server) {
//         const { compiler } = server
//         compiler.hooks.done.tap('done', (stats) => {
//             if (stats.hasErrors()) {
//                 console.error('Build failed with errors.')
//             } else {
//                 console.log('Build succeeded.')
//             }
//         })
//     }
//     return config
// }

// module.exports = {
//     webpack: override(),
//     devServer: overrideDevServer(devServerConfig()),
// }
module.exports = override()
