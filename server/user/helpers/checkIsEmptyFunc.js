const { checkIsEmpty } = require("../utils/authMethods");

function checkIsEmptyFunc(req, res, next) {
  const { errorObj } = res.locals;

  let inComingData = req.body;

  for (let key in inComingData) {
    if (checkIsEmpty(inComingData[key])) {
      errorObj[key] = `${key} cannot be empty`;
    }
  }
  next();
}

module.exports = checkIsEmptyFunc;
