'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, 11111111111111111111111111111111';
    await this.ctx.render('blog/blog.html');
  }
}

module.exports = BlogController;
