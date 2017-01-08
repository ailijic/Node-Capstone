'use strict';

// create a new "async" function so we can use the "await" keyword
let printPublicGists = (() => {
  var _ref = _asyncToGenerator(function* () {
    // "await" resolution or rejection of the promise
    // use try/catch for error handling
    try {
      var gists = yield get('https://api.github.com/gists/public');

      // now you can write this like syncronous code!
      gists.forEach(function (gist) {
        console.log(gist.description);
      });
    } catch (e) {
      // promise was rejected and we can handle errors with try/catch!
    }
  });

  return function printPublicGists() {
    return _ref.apply(this, arguments);
  };
})();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// promise returning function
function get(url) {
  return new Promise(function (resolve, reject) {
    (0, _request2.default)({
      method: 'GET',
      url: url,
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, function (err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

printPublicGists();
