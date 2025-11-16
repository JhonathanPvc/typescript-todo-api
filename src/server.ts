import express from 'express';
import CarregaVariavelAmbiente from './config/CarregaVariavelAmbiente';

const app = express();
const env = new CarregaVariavelAmbiente().Env;

const PORT = env.PORT;

app.use(express.json());

app.get('/server-status', (req, res) => {
  res.send('Tudo bem! O servidor está funcionando.');
});

app.listen(PORT, () => {
  console.log(`\nVariáveis de ambiente carregadas: ${new CarregaVariavelAmbiente().getVariaveis()}`);
  console.log(`\nServidor rodando na porta ${PORT}`);
});