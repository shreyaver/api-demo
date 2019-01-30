const Hapi = require('hapi');
const routes = require('./src/routes/getPostsRoute.js');

const server = new Hapi.Server({
  port: 8081,
  host: '0.0.0.0',
});

server.route(routes);

module.exports = {
  server,
};
