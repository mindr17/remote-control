import 'dotenv/config';
import { frontHttpServer } from './modules/httpServers/frontHttpServer';

const FRONT_PORT: string = process.env.FRONT_PORT || '3000';

const main = (): void => {
  frontHttpServer.listen(
    FRONT_PORT,
    () => console.log(`Frontend listening on port ${FRONT_PORT}\nOpen http://localhost:3000/ in browser (ctrl + mouseBtnLeft click on the address)`)
  );
};
main();
