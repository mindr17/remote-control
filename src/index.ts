import { Buffer } from 'buffer';
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


    // const buf = Buffer.from('hello world', 'utf8');

    // console.log(buf.toString('hex'));
    // // Prints: 68656c6c6f20776f726c64
    // console.log(buf.toString('base64'));

    // duplex.write(buf.toString('base64'));
    // duplex.write(buf.toString('hex'));

    // const msg = Buffer.from("Hello World").toString('base64')
    // duplex.write(msg);

    // const buff = new Buffer.from(JSON.stringify(newConfigFile, null, 2));
    // const base64Config = buff.toString("base64");

    for await (const chunk of duplex) {
      try {
        const [operationName, ...args] = chunk.split(' ');
        const operation = commands[operationName];
        await operation(duplex, args);
      } catch (err) {
        console.error(err);
      }
    }

    ws.on('close', () => {
      duplex.destroy()
    })
  });
};
startBack();
