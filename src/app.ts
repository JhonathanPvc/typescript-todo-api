import express, { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { Rotas } from './routes/rotas.enum';
import UsuarioRotas from './routes/Usuario.routes';

const app = express();

app.use(express.json());
app.use(Rotas.USUARIO, UsuarioRotas);

app.get(Rotas.SERVER_STATUS, (request: Request, response: Response) => {
  response
    .status(StatusCodes.OK)
    .send('Tudo certo! O servidor está funcionando.');
});

export default app;