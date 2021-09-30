import React, { useState, useEffect } from "react";
import "./MovimentacaoPage.css";
import api from "../../shared/services/api";
import { Link } from "react-router-dom";
import Menu from "../../shared/components/menu/Menu";
import FormataData from "../../shared/utility/FormataData";

export default function MovimentacaoPage({ history }) {
  const [listaDeMovimentacoes, setListaDeMovimentacoes] = useState([]);

  async function listarMovimentacoes() {
    const response = await api.get("movimentacoes", {
      headers: {
        //authorization: 'Bearer ' + localStorage.getItem('authorization')
      },
    });
    console.log("PONTO 01");

    setListaDeMovimentacoes(response.data);
  }

  async function deletarMovimentacao(idDaMovimentacao) {
    const response = await api.delete("movimentacoes/" + idDaMovimentacao, {
      headers: {
        //authorization: 'Bearer ' + localStorage.getItem('authorization')
      },
    });

    listarMovimentacoes();
  }

  useEffect(() => {
    listarMovimentacoes();
  }, []);

  return (
    <div id="pagina-movimentacoes">
      <div id="lista-movimentacoes">
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
          <div id="cabecalho">
            <div className="tipo-do-atributo">Id da movimentação</div>
            <div className="tipo-do-atributo">Regitro(Id) do conteiner</div>
            <div className="tipo-do-atributo">Tipo de movimentação</div>
            <div className="tipo-do-atributo">Data e hora de inicio</div>
            <div className="tipo-do-atributo">Data e hora de fim</div>
            <div className="box"></div>

            <Link to="/criar-movimentacao">
              <button className="add">ADICIONAR</button>
            </Link>
          </div>
          <div className="space"></div>
          {listaDeMovimentacoes.map((movimentacao) => (
            <div>
              <div className="bloco">
                <div className="atributo">{movimentacao.id}</div>

                <div className="atributo">{movimentacao.idConteiner}</div>

                <div className="atributo">
                  {movimentacao.tipoDeMovimentacao}
                </div>

                <div className="atributo">
                  {FormataData.getDiaMesAno(movimentacao.dataEHoraDoInicio) +"-"+ FormataData.getHoraMinuto(movimentacao.dataEHoraDoInicio)}
                </div>

                <div className="atributo">
                  {FormataData.getDiaMesAno(movimentacao.dataEHoraDoFim) +"-"+ FormataData.getHoraMinuto(movimentacao.dataEHoraDoFim)}
                </div>

                <button
                  className="deletar"
                  onClick={(e) => deletarMovimentacao(movimentacao.id)}
                >
                  EXCLUIR
                </button>
                <Link
                  to={{
                    pathname: "/editar-movimentacao",
                    state: {
                      movimentacao: movimentacao,
                    },
                  }}
                >
                  <button className="edita">EDITAR</button>
                </Link>
              </div>
              <div className="space"></div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

/*{
    "id": 11,
    "idConteiner": 3,
    "tipodeMovimentacao": "descarga",
    "dataEHoraDoInicio": "2021-09-20T13:49:38.154+00:00",
    "dataEHoraDoFim": "2021-09-20T13:49:38.154+00:00"
  },*/
