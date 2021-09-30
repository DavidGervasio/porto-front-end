import React, { useState, useEffect } from "react";
import "./RelatorioPage.css";
import api from "../../shared/services/api";

import Menu from "../../shared/components/menu/Menu";
import FormataData from "../../shared/utility/FormataData";

export default function RelatorioPage({ history }) {
  const [listaDeRelatorios, setListaDeRealatorios] = useState([]);
  const [cliente, setCliente] = useState("");
  const [tipoDeMovimentacao, setTipoDeMovimentacao] = useState("embarque");
  const [somaImpotacao, setSomaImportacao] = useState(0);
  const [somaExportacao, setSomaExpostacao] = useState(0);

  async function buscarRealatorios() {
    const response = await api.get(
      "movimentacoes/cliente?nomeDoCliente=" +
        cliente +
        "&tipoDeMovimentacao=" +
        tipoDeMovimentacao,
      {
        headers: {
          //authorization: 'Bearer ' + localStorage.getItem('authorization')
        },
      }
    );
    somarImpotacao(response.data, setSomaImportacao);
    somarExportacao(response.data, setSomaExpostacao);
    setListaDeRealatorios(response.data);
  }

  useEffect(() => {
    // buscarRealatorios();
  }, []);

  return (
    <div id="pagina-relatorios">
      <div id="lista-relatorios">
        <ul>
          <Menu
            history={history}
            pathName1={"/"}
            name1={"CONTEINERS"}
            pathName2={"/movimentacao"}
            name2={"MOVIMENTAÇÕES"}
            pathName3={"/relatorio"}
            name3={"RELATÓRIOS"}
          />
          <div className="space"></div>

          <div id="cabecalho-de-busca">
            <div className="box"></div>
            <input
              type="text-para-busca"
              placeholder={" Digite o nome do cliente"}
              onChange={(e) => {
                setCliente(e.target.value);
              }}
              value={cliente}
            />

            <select
              value={tipoDeMovimentacao}
              onChange={(e) => {
                setTipoDeMovimentacao(e.target.value);
              }}
              type="select-para-busca"
            >
              <option value="embarque">embarque</option>
              <option value="descarga">descarga</option>
              <option value="embarque">embarque</option>
              <option value="gate in">gate in</option>
              <option value="gate out">gate out</option>
              <option value="reposicionamento">reposicionamento</option>
              <option value="pesagem">pesagem</option>
              <option value="scanner">scanner</option>
            </select>

            <button className="buscar" onClick={(e) => buscarRealatorios()}>
              BUSCAR
            </button>
          </div>
          <div className="space"></div>
          <div id="cabecalho">
            <div className="tipo-do-atributo">Cliente</div>
            <div className="tipo-do-atributo">Data e hora de inicio</div>
            <div className="tipo-do-atributo">Data e hora de fim</div>
            <div className="tipo-do-atributo">Tipo de movimentação</div>
            <div className="tipo-do-atributo">Registro(Id)</div>
            <div className="tipo-do-atributo">Cetegoria</div>
          </div>
          <div className="space"></div>
          {listaDeRelatorios.map((relatorio) => (
            <div>
              <div className="bloco-relatorio">
                <div className="atributo">{relatorio[0]}</div>

                <div className="atributo">
                  {FormataData.getDiaMesAno(relatorio[1]) +
                    "-" +
                    FormataData.getHoraMinuto(relatorio[1])}
                </div>

                <div className="atributo">
                  {FormataData.getDiaMesAno(relatorio[2]) +
                    "-" +
                    FormataData.getHoraMinuto(relatorio[2])}
                </div>

                <div className="atributo">{relatorio[3]}</div>

                <div className="atributo">{relatorio[4]}</div>

                <div className="atributo">{relatorio[5]}</div>
              </div>
              <div className="space"></div>
            </div>
          ))}

          <div className="soma">
            <div className="box"></div>
            <a>SOMA DE IMPORTAÇAO: {somaImpotacao} </a>
            <a>SOMA DE IMPORTAÇAO: {somaExportacao} </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
//recebe uma lista de relatorio e uma função para setar a soma de importções
function somarImpotacao(listaDeRelatorios, setSomaImportacao) {
  var soma = 0;
  listaDeRelatorios.forEach(function (relatorio, i) {
    if (relatorio[5] == "importação") {
      soma++;
    }
  });
  setSomaImportacao(soma);
}
//recebe uma lista de relatorios e uma função para setar a soma de exportações
function somarExportacao(listaDeRelatorios, setSomaExpostacao) {
  var soma = 0;

  listaDeRelatorios.forEach(function (relatorio, i) {
    if (relatorio[5] == "exportação") {
      soma++;
    }
  });
  setSomaExpostacao(soma);
}
