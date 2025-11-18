export class Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataCriacao: Date;
  dataEdicao?: Date;
  isAtivo: boolean;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    dataCriacao: Date,
    dataEdicao: Date,
    isAtivo: boolean
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataCriacao = dataCriacao;
    this.dataEdicao = dataEdicao;
    this.isAtivo = isAtivo;
  };
};