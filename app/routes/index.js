const user_routes = require('./user_routes');
const authentication_routes = require('./authentication_routes');

module.exports = (router) => {
    user_routes.routes(router);
    authentication_routes.routes(router);
};
