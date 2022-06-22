import 'dotenv/config';
import { startFront } from './startFront';
import { WebSocketServer, createWebSocketStream } from 'ws';
import { commands } from './modules/commands';

startFront();

const BACK_PORT: string = process.env.BACK_PORT || '8080';

const startBack = (): void => {
  const wss = new WebSocketServer({ port: Number(BACK_PORT) });
  process.stdout.write(`Hello! Websocket server has started on port ${BACK_PORT}!\n`);

  wss.on('connection', async (ws) => {
    process.stdout.write(`New client connected!\n`);
    const duplex = createWebSocketStream(ws, { 
      encoding: 'utf8',
      decodeStrings: false,
    });

    for await (const chunk of duplex) {
      try {
        const [operationName, ...args] = chunk.split(' ');
        const operation = commands[operationName];
        await operation(args);
        duplex.write('123 asiodn asd');
        // ws.send('123asd asdasd as das dsad');
      } catch (err) {
        console.error(err);
      }
    }
    // duplex.pipe(process.stdout);
    // process.stdin.pipe(duplex);
  });
};
startBack();
