import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Conteiner from "./pages/conteiner/ConteinerPage";
import Movimentacao from "./pages/movimentacao/MovimentacaoPage";
import Relatorio from "./pages/relatorio/RelatorioPage";

import CriarConteiner from "./pages/conteiner/components/CriarConteiner";
import EditarConteiner from "./pages/conteiner/components/EditarConteiner";
import CriarMovimentacao from "./pages/movimentacao/components/CriarMovimentacao";
import EditarMovimentacao from "./pages/movimentacao/components/EditarMovimentacao";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Conteiner} />
      <Route path="/movimentacao" exact component={Movimentacao} />
      <Route path="/relatorio" exact component={Relatorio} />
      <Route path="/criar-conteiner" exact component={CriarConteiner} />
      <Route path="/editar-conteiner" exact component={EditarConteiner} />
      <Route path="/criar-movimentacao" exact component={CriarMovimentacao} />
      <Route path="/editar-movimentacao" exact component={EditarMovimentacao} />
    </BrowserRouter>
  );
}
