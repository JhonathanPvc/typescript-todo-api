import app from './app';
import CarregaVariavelAmbiente from './config/CarregaVariavelAmbiente';

const env = new CarregaVariavelAmbiente().Env;
const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});