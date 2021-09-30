import React, { Component } from "react";
import "./EditarMovimentacao.css";
import api from "../../../shared/services/api";
import FormataData from "../../../shared/utility/FormataData";
var movimentacao;
const date = new Date(); //"2015-06-26";

class EditarMovimentacao extends Component {
  state = {};

  /*  {
    "id": 41,
    "idConteiner": 39,
    "tipodeMovimentacao": "embarque",
    "dataEHoraDoInicio": "2021-09-20T13:49:38.154+00:00",
    "dataEHoraDoFim": "2021-09-20T13:49:38.154+00:00"
  } */

  //inicializa as variveis do state
  componentDidMount() {
    //default valor
    this.state.tipoDeMovimentacao = "embarque";

    this.setState({});
  }

  //const [startDate, setStartDate] = useState(new Date());
  //faz requisição ao servidor  passando os dados do conteiner
  handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("movimentacoes", {
      idConteiner: this.state.idConteiner,
      tipoDeMovimentacao: this.state.tipoDeMovimentacao,
      dataEHoraDoInicio: FormataData.concatenaDataeHora(
        this.state.dataDeInicio,
        this.state.horaDeInicio
      ),
      dataEHoraDoFim: FormataData.concatenaDataeHora(
        this.state.dataDeFim,
        this.state.horaDeFim
      ),
      id: this.state.id,
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
          name="idConteiner"
          placeholder={"Digite o id do conteiner"}
          onChange={this.handleChange}
          value={this.state.idConteiner}
        />
        <select
          name="tipoDeMovimentacao"
          value={this.state.tipoDeMovimentacao}
          onChange={this.handleChange}
          type="select"
        >
          <option value="embarque" selected>
            embarque
          </option>
          <option value="descarga">descarga</option>
          <option value="embarque">embarque</option>
          <option value="gate in">gate in</option>
          <option value="gate out">gate out</option>
          <option value="reposicionamento">reposicionamento</option>
          <option value="pesagem">pesagem</option>
          <option value="scanner">scanner</option>
        </select>

        <div className="dataHora">
          <div>
            <a>Data de inicio</a>
            <input
              type="text"
              name="dataDeInicio"
              placeholder={"DIA/MES/ANO EX: 20/10/2021"}
              onChange={this.handleChange}
              value={this.state.dataDeInicio}
            />
          </div>
          <div>
            <a>Hora de inicio</a>
            <input
              type="text"
              name="horaDeInicio"
              placeholder={"HH:MM"}
              onChange={this.handleChange}
              value={this.state.horaDeInicio}
            />
          </div>
        </div>
        <div className="dataHora">
          <div>
            <a>Data de fim</a>
            <input
              type="text"
              name="dataDeFim"
              placeholder={"DIA/MES/ANO EX: 20/10/2021"}
              onChange={this.handleChange}
              value={this.state.dataDeFim}
            />
          </div>
          <div>
            <a>Hora de fim</a>
            <input
              type="text"
              name="horaDeFim"
              placeholder={"HH:MM"}
              onChange={this.handleChange}
              value={this.state.horaDeFim}
            />
          </div>
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    );
  }
}
export default EditarMovimentacao;
//metodo utilizado para retorna uma data para renderização equanto a data e setatas
function garatinUmaData(data) {
  if (data == undefined) {
    return "2021-09-20T13:49:38.154Z";
  } else {
    return data;
  }
}
