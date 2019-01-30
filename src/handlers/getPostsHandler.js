const helperFunc = require('../../src/helpers/getPostsHelper.js');

module.exports = async (request, h) => {
  return h.response(await helperFunc());
};
