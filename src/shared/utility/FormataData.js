//Formata a data para exibição
//import moment from 'moment';
module.exports = {
  getDiaMesAno(dataString) {
    let data = new Date(dataString);
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    //"2021-09-20T13:49:38.154+00:00"

    //manter sempre doi digitos no campo de dia e mês
    if (dia < 10) {
      dia = "0" + dia;
    }
    if (mes < 10) {
      mes = "0" + mes;
    }
    //return moment( data).format('MM/DD/YYYY');
    return dia + "/" + mes + "/" + ano;
  },
  //"2021-09-20T13:49:38.154+00:00" - Converte sem alteração de fuso horario
  getHoraMinuto(dataString) {
    var strA = dataString.split("T")
    var strB = strA[1].split(".")
    var strC = strB[0].split(":")
    let hora = strC[0];
    let minuto = strC[1];

    return hora + ":" + minuto;
  },
  //formato de saida  //"2021-09-20T13:49:38.154+00:00"
  concatenaDataeHora(data, hora) {
    var dataeHoraConcatenadas = "";

    var dataSplit = data.split("/");

    dataeHoraConcatenadas = dataeHoraConcatenadas.concat(dataSplit[2]);
    dataeHoraConcatenadas = dataeHoraConcatenadas.concat("-");
    dataeHoraConcatenadas = dataeHoraConcatenadas.concat(dataSplit[1]);
    dataeHoraConcatenadas = dataeHoraConcatenadas.concat("-");
    dataeHoraConcatenadas = dataeHoraConcatenadas.concat(dataSplit[0]);
    dataeHoraConcatenadas = dataeHoraConcatenadas.concat("T");
    dataeHoraConcatenadas = dataeHoraConcatenadas.concat(hora);
    dataeHoraConcatenadas = dataeHoraConcatenadas.concat(":38.154+00:00");

    return dataeHoraConcatenadas;
  },
};
