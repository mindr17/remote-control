import WebSocket, { WebSocketServer, createWebSocketStream } from 'ws';

const startBack = () => {
  // const ws = new WebSocket(`ws://localhost:${backPort}`);

  // const wss = new WebSocketServer({ port: backPort });

  // wss.on('connection', function connection(ws) {
  //   ws.on('message', function message(data) {
  //     console.log('received: %s', data);
  //   });

  //   ws.send('something');
  // });

  
  // const ws = new WebSocket('wss://localhost:8080/');
  
  const wss = new WebSocketServer({ port: 8081 });


  wss.on('connection', function connection(ws) {
    
    const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
    duplex.pipe(process.stdout);

    process.stdin.pipe(duplex);

    // console.log('Connected!');
    // ws.send('Connected!');
    
    // ws.on('message', function message(data) {
    //   console.log('received: %s', data);
    // });
  });

  // const ws = new WebSocket('wss://websocket-echo.com/');
  // const ws = new WebSocket('ws://localhost/');

  // const ws = new WebSocketServer({ port: 8080 });
  
  // const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
  
  // duplex.pipe(process.stdout);
  // process.stdin.pipe(duplex);
};
startBack();
