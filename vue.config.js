module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://zuodengnishi.beautycms.com/mobile_api/v1',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }
    },

}