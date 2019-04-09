module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target: 'http://127.0.0.1:8888',// 这里设置调用的域名和端口号，需要http,注意不是https!
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api' //这边如果为空的话，那么发送到后端的请求是没有/api这个前缀的
                }
            },
            '/ms':{
                target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
                changeOrigin: true
            }
        }
    }
}