const addDays = require("date-fns/addDays");
const result = (days) => {
  return addDays(new Date("22-7-2020"), days);
};

module.exports = result;
