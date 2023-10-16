import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:8080', // Substitua pelo URL da sua API
});

export const dadosApi = async () => {
  try {
    const response = await api.get('/endpoint'); // Substitua '/endpoint' pelo endpoint real da sua API
    return response.data;
  } catch (error) {
    throw error; // Você pode lidar com erros aqui ou deixá-los para serem tratados onde você chama esta função
  }
};

export default dadosApi;