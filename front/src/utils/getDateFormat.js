const getDateFormat = (date, type = 'dafault') => {
  const year = date.getFullYear();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  if (type === 'input') return `${year}-${month}-${day}`;
  return year + month + day;
};

export default getDateFormat;
