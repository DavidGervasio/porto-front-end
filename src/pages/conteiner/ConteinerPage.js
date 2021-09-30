import React, { useState, useEffect } from "react";
import "./ConteinerPage.css";
import api from "../../shared/services/api";
import { Link } from "react-router-dom";
import Menu from "../../shared/components/menu/Menu";

export default function Conteiner({ history }) {
  const [listaDeConteiners, setListaDeConteiners] = useState([]);

  async function listarConteiners() {
    const response = await api.get("conteiner", {
      headers: {
        //authorization: 'Bearer ' + localStorage.getItem('authorization')
      },
    });

    setListaDeConteiners(response.data);
  }

  async function deletarConteiner(idDoConteiner) {
    const response = await api.delete("conteiner/" + idDoConteiner, {
      headers: {
        //authorization: 'Bearer ' + localStorage.getItem('authorization')
      },
    });

    listarConteiners();
  }

  useEffect(() => {
    listarConteiners();
  }, []);

  return (
    <div id="pagina-conteiners">
      <div id="lista-conteiners">
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
            <div className="tipo-do-atributo">Cliente</div>
            <div className="tipo-do-atributo">Registro(id)</div>
            <div className="tipo-do-atributo">Número do conteiner</div>
            <div className="tipo-do-atributo">Tipo</div>
            <div className="tipo-do-atributo">Categoria</div>
            <div className="tipo-do-atributo">Status</div>
            

            <Link to="/criar-conteiner">
              <button className="add">ADICIONAR</button>
            </Link>
          </div>
          <div className="space"></div>
          {listaDeConteiners.map((conteiner) => (
            <div>
              <div className="bloco">
                <div className="atributo">{conteiner.cliente}</div>

                <div className="atributo">{conteiner.id}</div>

                <div className="atributo">{conteiner.numeroDoConteiner}</div>

                <div className="atributo">{conteiner.tipo}</div>

                <div className="atributo">{conteiner.categoria}</div>

                <div className="atributo">{conteiner.status}</div>

                <div>
                  <Link
                    to={{
                      pathname: "/editar-conteiner",
                      state: {
                        conteiner: conteiner,
                      },
                    }}
                  >
                    <button className="edita">EDITAR</button>
                  </Link>

                  <button
                    className="deletar"
                    onClick={(e) => deletarConteiner(conteiner.id)}
                  >
                    EXCLUIR
                  </button>
                </div>
              </div>
              <div className="space"></div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
