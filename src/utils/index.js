const formatDate = (date) => {
  let [m, d, y] = date.toLocaleDateString().split('/');

  m = m.length < 2 ? ('0' + +m) : m;
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