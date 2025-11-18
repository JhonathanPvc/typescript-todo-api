export class Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataCriacao: Date;
  dataEdicao?: Date;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    dataCriacao: Date,
    dataEdicao: Date
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataCriacao = dataCriacao;
    this.dataEdicao = dataEdicao;
  };
};