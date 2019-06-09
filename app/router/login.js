'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/login', controller.login.index);
  router.get('/loginAction', controller.login.login);
  router.get('/loginSuccess', controller.login.success);
};