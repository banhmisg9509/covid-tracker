const formatDate = (date) => {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();

  m = m < 10 ? ('0' + m) : m;
  return y + '-' + m + '-' + d;
}

export const getNDaysAfter = (n) => {
  const date = new Date(new Date().getTime() + n * 86400000);
  return formatDate(date);
}

export const getNDaysBefore = (n) => {
  const date = new Date(new Date().getTime() - n * 86400000);
  return formatDate(date);
}
