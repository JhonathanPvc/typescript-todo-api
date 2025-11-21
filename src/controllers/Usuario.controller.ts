import { Request, Response } from "express";

import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';
import { UsuarioService } from "../services/Usuario.service";

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

  async editarUsuario(request: Request, response: Response) {
    try {
      const usuario = request.body;
      const usuarioEditado = await this.usuarioService.editarUsuario(usuario);

      response
        .status(StatusCodes.OK)
        .json(usuarioEditado);
    } catch (error) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: (error as Error).message });
    };
  };

  async excluirUsuario(request: Request, response: Response) {
    try {
      const { id } = request.body;
      await this.usuarioService.excluirUsuario(id);

      response
        .status(StatusCodes.OK)
        .json({ message: `Usuario com o id ${id} excluido com sucesso!` });
    } catch (error) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: (error as Error).message });

    };
  };
};