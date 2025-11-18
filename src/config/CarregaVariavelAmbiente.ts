import dotenv from 'dotenv';

import { EnvKeys } from '../enum/EnvKeys.enum';
import { IEnv } from '../interfaces/IEnv.interface';

dotenv.config();

export default class CarregaVariavelAmbiente {
  public readonly Env: IEnv;

  constructor() {
    this.Env = {
      NODE_ENV: this.getString(EnvKeys.NODE_ENV),
      LOG_LEVEL: this.getString(EnvKeys.LOG_LEVEL),
      PORT: this.getNumber(EnvKeys.PORT),
      DATABASE_URL: this.getString(EnvKeys.DATABASE_URL),
    };
  }

  private getString(key: EnvKeys): string {
    const value = process.env[key];

    if (!value) {
      throw new Error(`Erro ao carregar a variavel ${key}. Valor não definido.`);
    };

    return value;
  };

  private getNumber(key: EnvKeys): number {
    const value = process.env[key];

    if (!value) {
      throw new Error(`Erro ao carregar a variavel ${key}. Valor não definido.`);
    };

    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      throw new Error(`Erro ao carregar a variavel ${key}. Valor não é um número válido.`);
    };

    return numberValue;
  };

  public getVariaveis(): string {
    return JSON.stringify(this.Env, null, 2);
  };
};