import { Request, Response } from "express";

import { UsuarioService } from "../services/Usuario.service";
import { StatusCodes } from './../../node_modules/http-status-codes/build/es/status-codes';

export class UsuarioController {
  usuarioService = new UsuarioService();

  async criarUsuario(request: Request, response: Response) {
    try {
      const usuario = request.body;
      const usuarioCriado = await this.usuarioService.criarUsuario(usuario);

      response
        .status(StatusCodes.CREATED)
        .json(usuarioCriado);
    } catch (error) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: (error as Error).message });
    };
  };
};