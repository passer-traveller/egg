'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/', controller.home.index);
//   router.get('/news', controller.news.list);
//   router.get('/login', controller.login.login);
// };
module.exports = app => {
  require('./router/home')(app);
  require('./router/news')(app);
  require('./router/login')(app);
};
