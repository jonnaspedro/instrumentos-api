import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let instrumentos = [
  { id: 1, nome: "Violão", tipo: "Cordas", preco: 800 },
  { id: 2, nome: "Bateria", tipo: "Percussão", preco: 2500 },
  { id: 3, nome: "Flauta", tipo: "Sopro", preco: 300 },
];

const nextId = () =>
  instrumentos.length ? Math.max(...instrumentos.map(i => i.id)) + 1 : 1;

app.get('/instrumentos', (req, res) => res.json(instrumentos));

app.get('/instrumentos/filtro/:precoMax', (req, res) => {
  const precoMax = parseFloat(req.params.precoMax);
  if (isNaN(precoMax)) return res.status(400).json({ erro: 'precoMax inválido' });
  const resultado = instrumentos.filter(i => Number(i.preco) <= precoMax);
  res.json(resultado);
});

app.get('/instrumentos/quantidade', (req, res) => res.json({ total: instrumentos.length }));

app.get('/instrumentos/primeiro', (req, res) => {
  if (!instrumentos.length) return res.status(404).json({ erro: 'Nenhum instrumento cadastrado' });
  res.json(instrumentos[0]);
});

app.get('/instrumentos/ultimo', (req, res) => {
  if (!instrumentos.length) return res.status(404).json({ erro: 'Nenhum instrumento cadastrado' });
  res.json(instrumentos[instrumentos.length - 1]);
});

app.post('/instrumentos/lote', (req, res) => {
  const lista = req.body;
  if (!Array.isArray(lista)) return res.status(400).json({ erro: 'Envie um array de instrumentos' });

  const novos = lista.map(item => {
    const novo = { id: nextId(), ...item, preco: item.preco !== undefined ? Number(item.preco) : item.preco };
    instrumentos.push(novo);
    return novo;
  });

  res.status(201).json(novos);
});

app.get('/instrumentos/estatisticas', (req, res) => {
  if (!instrumentos.length) return res.json({ total: 0, soma: 0, mediaPreco: 0, menorPreco: 0, maiorPreco: 0 });

  const total = instrumentos.length;
  const precos = instrumentos.map(i => Number(i.preco));
  const soma = precos.reduce((s, p) => s + p, 0);
  const media = soma / total;
  const menor = Math.min(...precos);
  const maior = Math.max(...precos);

  res.json({
    total,
    soma,
    mediaPreco: Number(media.toFixed(2)),
    menorPreco: menor,
    maiorPreco: maior
  });
});

app.get('/instrumentos/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ erro: 'ID inválido' });
  const inst = instrumentos.find(i => i.id === id);
  if (!inst) return res.status(404).json({ erro: 'Instrumento não encontrado' });
  res.json(inst);
});

app.post('/instrumentos', (req, res) => {
  const { nome, tipo, preco } = req.body;
  if (!nome || !tipo || preco === undefined) {
    return res.status(400).json({ erro: 'Campos obrigatórios: nome, tipo, preco' });
  }

  const novo = { id: nextId(), nome, tipo, preco: Number(preco) };
  instrumentos.push(novo);
  res.status(201).json(novo);
});

app.put('/instrumentos/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ erro: 'ID inválido' });

  const index = instrumentos.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Instrumento não encontrado' });

  instrumentos[index] = { ...instrumentos[index], ...req.body, id };
  res.json(instrumentos[index]);
});

app.delete('/instrumentos/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ erro: 'ID inválido' });

  const index = instrumentos.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Instrumento não encontrado' });

  instrumentos.splice(index, 1);
  res.json({ mensagem: 'Instrumento removido' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API de Instrumentos rodando em http://localhost:${PORT}`));