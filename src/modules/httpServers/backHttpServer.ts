import 'dotenv/config';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { checkEndpoint, handleHttpErrors } from '../httpHelpers';

export const backHttpServer = createServer(async (
  req: IncomingMessage, res: ServerResponse
  ): Promise<void> => {
    try {
    
    checkEndpoint(req);

    const reqMetodUppercased: string = req.method;
    const reqMetod: string = reqMetodUppercased.toLowerCase();

   
  } catch(err) {
    try {
      handleHttpErrors(err, res);
    } catch(err) {
      console.error(err);
    }
  }
});
