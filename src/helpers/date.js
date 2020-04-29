
import { format } from 'date-fns'
import { es } from 'date-fns/esm/locale'

//Funcion para mayusculas a dia y mes
const capitalize = (str) =>{
  str = str.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    if (str[i].length > 3) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
  }
  return str.join(" ");
}


const formatDate = (str) =>{
  str = str.split("-");
  const frmStr = [str[2],str[1],str[0]];
  return new Date(`'${frmStr.join('-')}'`);
}

export const getFormattedDate = (date) => {
  const t = formatDate(date);
  const result = format(t, "cccc dd 'de' LLLL", {
   locale: es
  });
  return capitalize(result);
}

export const getToday = () => {
  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '-' + mm + '-' + yyyy;
}

export const getYesterday = (date) => {
  const yesterday = formatDate(date);
  yesterday.setDate(yesterday.getDate() - 1);

  var dd = yesterday.getDate();

  var mm = yesterday.getMonth() + 1;
  var yyyy = yesterday.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '-' + mm + '-' + yyyy;
}

export const getTomorrow = (date) => {
  const tomorrow = formatDate(date);
  tomorrow.setDate(tomorrow.getDate() + 1);

  var dd = tomorrow.getDate();

  var mm = tomorrow.getMonth() + 1;
  var yyyy = tomorrow.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '-' + mm + '-' + yyyy;
}

export default {
  getToday,
  getYesterday,
  getTomorrow,
  getFormattedDate
}