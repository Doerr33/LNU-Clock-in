const webSocket = require('ws');
/**
 * Create WebSocket
 */

//const wss = new webSocket('wss://echo.websocket.org/', {
//  origin: 'https://websocket.org'
//});

//握手完成 ws是WebSocket的一个实例
wss.on('connection', function connection(ws) {
    console.log(ws.upgradeReq.url);
    //const location = url.parse(ws.upgradeReq.url, true);
    // You might use location.query.access_token to authenticate or share sessions
    // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

    //发生错误
    ws.on('error', function incoming(message) {
        console.log('error: %s', message);
    });

    //断开连接
    ws.on('close', function incoming(message) {
        console.log('close: %s', message);
    });

    //收到消息
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send('something123');
    });

    //发送消息
    ws.send('something');
});