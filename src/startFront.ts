import 'dotenv/config';
import { frontHttpServer } from './modules/frontHttpServer';

const FRONT_PORT: string = process.env.FRONT_PORT || '3000';

export const startFront = (): void => {
  frontHttpServer.listen(
    FRONT_PORT,
    () => console.log(
      `Frontend listening on port ${FRONT_PORT}\nOpen http://localhost:3000/ in browser (ctrl + mouseBtnLeft click on the address)`
    )
  );
};
