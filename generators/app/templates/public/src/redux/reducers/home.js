
let data = require('../store/data');

let reducer = (state = data.home, action) => {

  const {type, payload} = action;

  switch (type) {
    default:
      return state;
  }
};

module.exports = reducer;

