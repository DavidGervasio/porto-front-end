import React, { Component } from "react";
import "./EditarConteiner.css";
import api from "../../../shared/services/api";
var conteiner;

class CriarConteiner extends Component {
  state = {};

  //inicializa as variveis do state
  componentDidMount() {
    //setando defaut valores
    this.state.tipo = 20;
    this.state.categoria = "importação";
    this.state.status = "cheio";
  }

  //faz requisição ao servidor  passando os dados do conteiner
  handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("conteiner", {
      cliente: this.state.cliente,
      numeroDoConteiner: this.state.numeroDoConteiner,
      tipo: this.state.tipo,
      status: this.state.status,
      categoria: this.state.categoria,
    });
    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Constroi formulário
  render() {
    return (
      <form id="formulario" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="cliente"
          placeholder={"Digite o nome do cliente"}
          onChange={this.handleChange}
          value={this.state.cliente}
        />

        <input
          type="text"
          name="numeroDoConteiner"
          placeholder={"Digite o número do conteiner"}
          onChange={this.handleChange}
          value={this.state.numeroDoConteiner}
        />

        <select
          name="tipo"
          value={this.state.tipo}
          onChange={this.handleChange}
          type="select"
        >
          <option value={20} selected>
            20
          </option>
          <option value={40}>40</option>
        </select>

        <select
          name="status"
          value={this.state.status}
          onChange={this.handleChange}
          type="select"
        >
          <option value="cheio" selected>
            cheio
          </option>
          <option value="vazio">vazio</option>
        </select>

        <select
          name="categoria"
          value={this.state.categoria}
          onChange={this.handleChange}
          type="select"
        >
          <option value="importação" selected>
            importação
          </option>
          <option value="exportação">exportação</option>
        </select>
        <button type="submit">ENVIAR</button>
      </form>
    );
  }
}
export default CriarConteiner;
