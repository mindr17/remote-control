import WebSocket, { WebSocketServer, createWebSocketStream } from 'ws';

const startBack = () => {
  const wss = new WebSocketServer({ port: 8081 });

  wss.on('connection', function connection(ws) {
    const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
    duplex.pipe(process.stdout);

    process.stdin.pipe(duplex);
  });
};
startBack();
