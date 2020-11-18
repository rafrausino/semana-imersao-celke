import Head from "next/head";

import { Container, Jumbotron } from "reactstrap";

import Menu from "../components/Menu";

function SobreEmpresa() {
  return (
    <>
      <Head>
        <title>Sobre Empresa - Celke</title>
        <meta name="description" content="Sobre a empresa..." />
      </Head>

      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
              background-color: #000;
              color: #fed136;
              padding-top: 100px;
              padding-bottom: 50;
              margin-bottom: 0rem !important;

            }
            `}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Sobre Empresa</h1>
        </Container>
      </Jumbotron>

      <Jumbotron>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Titulo</h2>
            <p className="lead pb-4">subtitulo</p>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
}

export default SobreEmpresa;
