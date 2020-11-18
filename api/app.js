const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const { response } = require("express");

require("./models/home");
const Home = mongoose.model("Home");

require("./models/contato");
const Contato = mongoose.model("Contato");

const app = express();

app.use(express.json());

app.use((rep, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*")
    res.header("Acces-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Acces-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

mongoose
  .connect("mongodb://localhost/celke", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o DB MongoDB realizado com sucesso!");
  })
  .catch((err) => {
    console.log(
      "Erro: Conexão com o DB MongoDB não realizado com sucesso: " + err
    );
  });

app.get("/", (req, res) => {
  res.json({ name: "Renan " });
});

app.get("/home", async (req, res) => {
  await Home.findOne({})
    .then((home) => {
      return res.json({
        error: false,
        home,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum resgistro encontrado!",
      });
    });
});

app.post("/home", async (req, res) => {
  const dados = {
    topTitulo: "Temos a solução que a sua empresa precisa!",
    topSubtitulo:
      "This is a simple hero unit, a simple Jumbtron-style component for celling extra attetion to featured content or information.",
    topTextoBtn: "ENTRE EM CONTATO",
    topLinkBtn: "http://localhost:3000/",

    serTitulo: "Serviços",
    serSubtitulo: "Featured content or information",
    serUmTitulo: "Serviço 1",
    serUmIcone: "code",
    serUmDesc:
      "Donec sed odio dui. Etiam porta sem malesuada magna mollis eusimod. Nullam id dolor id nibh ultricies at eros. Praesent comodo cursus magna.",
    serDoisIcone: "laptop-code",
    serDoisTitulo: "Serviço 2",
    serDoisDesc:
      "Donec sed odio dui. Etiam porta sem malesuada magna mollis eusimod. Nullam id dolor id nibh ultricies at eros. Praesent comodo cursus magna.",
    serTresIcone: "mobile-alt",
    serTresTitulo: "Serviço 3",
    serTresDesc:
      "Donec sed odio dui. Etiam porta sem malesuada magna mollis eusimod. Nullam id dolor id nibh ultricies at eros. Praesent comodo cursus magna.",
  };

  const homeExiste = await Home.findOne({});
  if (homeExiste) {
    return res.status(400).json({
      err: true,
      message: "Erro: A página home já possui um registro!",
    });
  }

  await Home.create(dados, (err) => {
    if (err)
      return res.status(400).json({
        err: true,
        message: "Erro: Conteúdo da página home não cadastrado com sucesso!",
      });
  });

  return res.json({
    err: false,
    message: "Conteúdo da página home cadastrado com sucesso!",
  });
});

app.post("/contato", async (req, res) => {

  await sleep(300);

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
  
  await Contato.create(req.body, (err) => {
    if (err) return res.status(400).json({
        error: true,
        message: "Erro: Mensagem de contato não cadastrada com sucesso!",
      });
  });

  return res.json({
    error: false,
    message: "Mensagem de contato cadastrado com sucesso!",
  });
});

app.listen(8080, () => {
  console.log("Servidor iniciando na porta 8080: http://localhost:8080");
});
