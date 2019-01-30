const handlerFunc = require('../handlers/getPostsHandler.js');

module.exports = [{
  method: 'GET',
  path: '/posts',
  handler: handlerFunc,
}];
