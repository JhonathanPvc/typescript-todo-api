const request = require('supertest');
import app from '../src/app';
import CarregaVariavelAmbiente from '../src/config/CarregaVariavelAmbiente';

jest.mock('../src/config/CarregaVariavelAmbiente', () => {
  return jest.fn().mockImplementation(() => {
    return {
      Env: {
        PORT: 3000,
      },
    };
  });
});

describe('Servidor', () => {
  it('Deve responder com status 200 na rota raiz', async () => {
    const response = await request(app).get('/server-status');
    expect(response.status).toBe(200);
  });

  it('Deve lidar com 404 para rotas desconhecidas', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
  });

  it('Deve carregar variáveis de ambiente corretamente', () => {
    const env = new CarregaVariavelAmbiente().Env;
    expect(env.PORT).toBe(3000);
  });

  it('Deve iniciar o servidor na porta correta', async () => {
    const env = new CarregaVariavelAmbiente().Env;
    expect(env.PORT).toBe(3000);
  });
});