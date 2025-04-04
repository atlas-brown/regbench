const createFunctionStream = require('./createFunctionStream');
const flatMap = require('./flatmap');


const flatMapStream = (e_cb_fn) => {
    return createFunctionStream((chunk, cb_result) => {
            return flatMap(e_cb_fn, chunk, cb_result);
    });
}

module.exports = flatMapStream;
