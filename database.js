'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// database.js
//// Create interface to database

start();
function start() {
  'use strict';

  let getJsonObj = (() => {
    var _ref = _asyncToGenerator(function* () {
      const JsonString = fsp.readFile('cal-data.json', 'utf8');
      return JSON.parse((yield JsonString));
    });

    return function getJsonObj() {
      return _ref.apply(this, arguments);
    };
  })();

  const fsp = require('fs-promise');

  const methods = {
    getJ: getJsonObj
  };
  module.exports = methods;

  getJsonObj().then(obj => {
    console.log(obj);
  });
  // END OF MODULE
}
