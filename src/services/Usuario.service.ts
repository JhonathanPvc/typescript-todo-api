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

      try {
        const usuarioNovo = await this.prisma
          .usuario
          .create({
            data: usuario
          });
        return usuarioNovo;
      } catch (error) {
        throw new Error("Erro ao criar o usuário.");
      };
    };
  };

  async editarUsuario(usuario: Usuario) {
    const isUsuarioExiste = await this.prisma
      .usuario
      .findUnique({
        where: { id: usuario.id }
      });

    if (!isUsuarioExiste) {
      throw new Error(`Usuário ${usuario.id} - ${usuario.nome} não encontrado.`);
    } else {
      try {
        const usuarioEditado = await this.prisma
          .usuario
          .update({
            where: { id: usuario.id },
            data: usuario
          });
        return usuarioEditado;
      } catch (error) {
        throw new Error(`Erro ao editar o usuário ${usuario.id} - ${usuario.nome}.`);
      };
    };
  };

  async excluirUsuario(id: number) {
    const usuarioExistente = await this.prisma
      .usuario
      .findUnique({
        where: { id: id }
      });

    if (!usuarioExistente) {
      throw new Error(`Usuário ${id} não encontrado.`);
    } else {
      usuarioExistente.isAtivo = false;
      try {
        await this.prisma
          .usuario
          .update({
            where: { id: id },
            data: usuarioExistente
          });
      } catch (error) {
        throw new Error(`Erro ao excluir o usuário ${usuarioExistente.id} - ${usuarioExistente.nome}.`);
      };
    };
  };
};