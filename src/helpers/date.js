const getFormattedUrlDate = (date) => {
  const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const mm = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  const yyyy = date.getFullYear();
  return dd + '-' + mm + '-' + yyyy;
}

const formatDate = (str) =>{
  str = str.split("-");
  const frmStr = [str[2],str[1],str[0]];
  //TE ODIO SAFARI ME HACES ESCRIBIR CODIGO DEMAS
  const date = new Date(frmStr.join('-').replace(/-/g, "/"));
  return date;
}

export const getFormattedDate = (date) => {
  const f = formatDate(date);
  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
  const text = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()];
  return text;
}

export const getToday = () => {
  const today = new Date();
  return getFormattedUrlDate(today);
}

export const getYesterday = (date) => {
  const yesterday = formatDate(date);
  yesterday.setDate(yesterday.getDate() - 1);
  return getFormattedUrlDate(yesterday);
}

export const getTomorrow = (date) => {
  const tomorrow = formatDate(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return getFormattedUrlDate(tomorrow);
}

export const checkIfDateIsBeforeToday = (date) =>{
  const today = new Date().setHours(0,0,0,0);
  const formatedDate = formatDate(date);
  if(formatedDate === today || formatedDate >= today)
  return true;

  return false;
}

export default {
  getToday,
  getYesterday,
  getTomorrow,
  getFormattedDate,
  checkIfDateIsBeforeToday
}