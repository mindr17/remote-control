import 'dotenv/config';
import { frontHttpServer } from './modules/httpServers/frontHttpServer';
import { backHttpServer } from './modules/httpServers/backHttpServer';

const BACK_PORT: string = process.env.BACK_PORT || '8081';
const FRONT_PORT: string = process.env.FRONT_PORT || '3000';

const main = (): void => {
  backHttpServer.listen(
    BACK_PORT,
    () => console.log(`Backend listening on port ${BACK_PORT}`)
    );
    
  frontHttpServer.listen(
    FRONT_PORT,
    () => console.log(`Frontend listening on port ${FRONT_PORT}\nOpen http://localhost:3000/ in browser (ctrl + mouseBtnLeft click on the address)`)
  );
};
main();
