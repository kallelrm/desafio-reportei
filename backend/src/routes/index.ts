import { Router } from 'express';
import fetch from 'node-fetch';

const routes = Router();

routes.get('/', async (req, res) => {
  const response = await (await fetch('http://instagram.com/kallel_fm?__a=1')).json()
  console.log(response)
});

export default routes;