import { EnvKeys } from '../../src/enum/EnvKeys.enum';
import CarregaVariavelAmbiente from './../../src/config/CarregaVariavelAmbiente';

describe('CarregaVariavelAmbiente', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('construtor', () => {
    it('Deve carregar as variáveis de ambiente com sucesso', () => {
      process.env[EnvKeys.NODE_ENV] = 'development';
      process.env[EnvKeys.LOG_LEVEL] = 'info';
      process.env[EnvKeys.PORT] = '3000';
      process.env[EnvKeys.DATABASE_URL] = 'sqlite::memory:';

      const loader = new CarregaVariavelAmbiente();

      expect(loader.Env.NODE_ENV).toBe('development');
      expect(loader.Env.LOG_LEVEL).toBe('info');
      expect(loader.Env.PORT).toBe(3000);
      expect(loader.Env.DATABASE_URL).toBe('sqlite::memory:');
    });

    it('Deve lançar erro para PORT inválido', () => {
      process.env[EnvKeys.NODE_ENV] = 'development';
      process.env[EnvKeys.LOG_LEVEL] = 'info';
      process.env[EnvKeys.PORT] = 'invalid';
      process.env[EnvKeys.DATABASE_URL] = 'sqlite::memory:';

      expect(() => new CarregaVariavelAmbiente()).toThrow('Erro ao carregar a variavel PORT. Valor não é um número válido.');
    });
  });

  describe('getVariaveis', () => {
    it('Deve retornar string JSON do Env', () => {
      process.env[EnvKeys.NODE_ENV] = 'development';
      process.env[EnvKeys.LOG_LEVEL] = 'info';
      process.env[EnvKeys.PORT] = '3000';
      process.env[EnvKeys.DATABASE_URL] = 'sqlite::memory:';

      const loader = new CarregaVariavelAmbiente();
      const result = loader.getVariaveis();

      expect(result).toBe(JSON.stringify(loader.Env, null, 2));
    });

    it('Deve lançar um erro se a variável de ambiente não estiver definida', () => {
      const originalEnv = process.env;

      process.env = { ...originalEnv };
      delete process.env.NODE_ENV;

      expect(() => new CarregaVariavelAmbiente()).toThrow('Erro ao carregar a variavel NODE_ENV. Valor não definido.');

      process.env = originalEnv;
    });

    it('Não Deve lançar se a variável de ambiente estiver definida', () => {
      const originalEnv = process.env;
      process.env = { ...originalEnv, NODE_ENV: 'test' };

      expect(() => new CarregaVariavelAmbiente()).not.toThrow();

      process.env = originalEnv;
    });
  });
});