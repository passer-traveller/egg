'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
    // const { ctx } = this;
    // ctx.body = 'hi, 11111111111111111111111111111111';
    await this.ctx.render('login/login.html');
  }
}

module.exports = HomeController;