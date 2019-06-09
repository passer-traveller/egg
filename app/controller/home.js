'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(res) {
    // console.log('home -- res --->> ', res);
    // console.log('home -- this ---->>> ', this);
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;