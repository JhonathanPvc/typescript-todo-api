import app from './app';
import CarregaVariavelAmbiente from './config/CarregaVariavelAmbiente';

const env = new CarregaVariavelAmbiente().Env;
const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`\nVariaveis de ambiente carregadascom sucesso: ${JSON.stringify(env, null, 2)}`);
  console.log(`\nServidor rodando na porta ${PORT}`);
});