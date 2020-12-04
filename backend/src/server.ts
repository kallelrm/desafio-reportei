import express from 'express';

import routes from './routes';

const server = express();

server.use(routes)

server.listen(3333, (): void => {
  console.log('server listening on port 3333')
});