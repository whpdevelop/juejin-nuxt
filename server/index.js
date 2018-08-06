/* 
    node 代理服务器 获取豆瓣api
*/

var express = require('express');
var request = require('request');
var app = express();

// 处理跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

let proxyUrl = 'https://timeline-merger-ms.juejin.im'
app.use('/', (req, res) => {
    let url = proxyUrl + req.url;
    // res.send(url)
    let obj = {
        url: url,
        // headers: {
        //     Referer: 'https://m.douban.com/'
        // }
    }
    request(obj, (err, response, body) => {
        res.send(body)
    })
})
app.listen(process.env.PORT || 3008);
