import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

import { Usuario } from "../models/Usuario.model";

export class UsuarioService {
  prisma = new PrismaClient();

  async criarUsuario(usuario: Usuario) {
    const isUsuarioExiste = await this.prisma
      .usuario
      .findUnique({
        where: { email: usuario.email }
      });

    if (isUsuarioExiste) {
      throw new Error("Usuário com este email já existe.");
    } else {
      const senhaCriptografada = await bcrypt.hash(usuario.senha, 10);
      usuario.senha = senhaCriptografada;

      const usuarioNovo = await this.prisma
        .usuario
        .create({
          data: usuario
        });

      return usuarioNovo;
    };
  };
};