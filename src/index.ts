import 'dotenv/config';
import { startFront } from './startFront';
import { WebSocketServer, createWebSocketStream } from 'ws';
import { commands } from './modules/commands';

startFront();

const BACK_PORT: string = process.env.BACK_PORT || '8080';

const startBack = (): void => {
  const wss = new WebSocketServer({ port: Number(BACK_PORT) });
  console.log(`Hello! Websocket server has started on port ${BACK_PORT}!`);
  
  wss.on('headers', (headers: string[]) => {
    console.log(headers);
  });

  wss.on('connection', async (ws) => {
    const duplex = createWebSocketStream(ws, { 
      encoding: 'utf8',
      decodeStrings: false,
    });
    
    console.log(
      `New client connected!\nDuplex stream created with encoding: 'utf8', decodeStrings: false,\n`
    );
    
    for await (const chunk of duplex) {
      try {
        console.log(`Recieved: ${chunk}`);
        const [operationName, ...args] = chunk.split(' ');
        const operation = commands[operationName];
        await operation(duplex, args);
      } catch (err) {
        console.error(err);
      }
    }

    ws.on('close', () => {
      duplex.destroy();
    })
  });
};
startBack();
