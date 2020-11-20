module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3091/', //你要访问的服务器域名
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}