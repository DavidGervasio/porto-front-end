import React, { Component } from "react";
import "./EditarConteiner.css";
import api from "../../../shared/services/api";
var conteiner;

class EditarConteiner extends Component {
  state = {};

  //inicializa as variveis do state
  componentDidMount() {
    conteiner = this.props.location.state.conteiner;
    this.state.cliente = conteiner.cliente;
    this.state.numeroDoConteiner = conteiner.numeroDoConteiner;
    this.state.tipo = conteiner.tipo;
    this.state.categoria = conteiner.categoria;
    this.state.status = conteiner.status;
  }

  //faz requisição ao servidor  passando os dados do conteiner
  handleSubmit = async (e) => {
    e.preventDefault();

    await api.put("conteiner", {
      cliente: this.state.cliente,
      numeroDoConteiner: this.state.numeroDoConteiner,
      tipo: this.state.tipo,
      status: this.state.status,
      categoria: this.state.categoria,
      id: conteiner.id,
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
          placeholder={this.props.location.state.conteiner.cliente}
          onChange={this.handleChange}
          value={this.state.cliente}
        />

        <input
          type="text"
          name="numeroDoConteiner"
          placeholder={this.props.location.state.conteiner.numeroDoConteiner}
          onChange={this.handleChange}
          value={this.state.numeroDoConteiner}
        />

        <select
          name="tipo"
          value={this.state.tipo}
          onChange={this.handleChange}
          type="select"
        >
          <option value={this.props.location.state.conteiner.tipo} selected>
            {this.props.location.state.conteiner.tipo}
          </option>
          <option value={20}>20</option>
          <option value={40}>40</option>
        </select>

        <select
          name="status"
          value={this.state.status}
          onChange={this.handleChange}
          type="select"
        >
          <option value={this.props.location.state.conteiner.status} selected>
            {this.props.location.state.conteiner.status}
          </option>
          <option value="cheio">cheio</option>
          <option value="vazio">vazio</option>
        </select>

        <select
          name="categoria"
          value={this.state.categoria}
          onChange={this.handleChange}
          type="select"
        >
          <option
            value={this.props.location.state.conteiner.categoria}
            selected
          >
            {this.props.location.state.conteiner.categoria}
          </option>
          <option value="importação">importação</option>
          <option value="exportação">exportação</option>
        </select>
        <button type="submit">ENVIAR</button>
      </form>
    );
  }
}
export default EditarConteiner;
