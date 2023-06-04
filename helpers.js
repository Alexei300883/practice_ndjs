const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const handlerRandomNumber = (min, max) => {
  const res = Math.random() * (max - min) + min;
  return Math.floor(res);
};

module.exports = { months, handlerRandomNumber };
