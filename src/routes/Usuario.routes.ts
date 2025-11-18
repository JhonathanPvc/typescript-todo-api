import { Router } from 'express';

import { UsuarioController } from '../controllers/Usuario.controller';
import { Rotas } from './rotas.enum';

const UsuarioRotas = Router();
const usuarioController = new UsuarioController();

UsuarioRotas.post(Rotas.CRIAR, usuarioController.criarUsuario.bind(usuarioController));

export default UsuarioRotas;