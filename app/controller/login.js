'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, 11111111111111111111111111111111';
    await this.ctx.render('login/login.html');
  }
  // async success() {
  //   const { ctx } = this;
  //   // ctx.body = 'hi, 11111111111111111111111111111111';
  //   const results = {results:[{    "pwd": "admin",
  //   "id": 0,
  //   "user": "admin"}]}
  //   console.log('==================>> ', results);
  //   await this.ctx.render('login/loginSuccess.html', results);
  // }
  async login() {
    const { ctx } = this;
    console.log('controller login this ----->>> ', this.ctx.query);
    // let username = 'username';
    // let password = 'password';
    const { username, password } = this.ctx.query; // 获取用户入参
    // 调用service方法
    const userinfo = await ctx.service.login.login.loginAction(username, password);
    console.log('userinfo ------------------->> ', userinfo);
    // await this.ctx.render('/', userinfo);

    if (userinfo) {
      this.ctx.redirect('/');
    } else {
      return;
    }





















    // let { id } = this.ctx.params; // 获取路由参数
    // console.log('--->>> ', this)

    // console.log('this.ctx ------------->>> ', this.ctx );




    // let { username, password } = this.ctx.query; // 获取用户入参
    // console.log('--------->> ', username, password);

    // const results = await this.app.mysql.get('login', { user: username, pwd: password });
    // console.log('results --->> ', results );




    // const results = await this.app.mysql.select('login', { // 搜索 login 表
      // where: { user: username, pwd: password }, // WHERE 条件
      // columns: [ 'id' ], // 要查询的表字段
      // orders: [['created_at','desc'], ['id','desc']], // 排序方式
      // limit: 10, // 返回数据量
      // offset: 0, // 数据偏移量
    // });
    // const dataList = {
    //   list: [
    //       { id: 1, title: 'this is news 1', url: '/news/1' },
    //       { id: 2, title: 'this is news 2', url: '/news/2' },
    //   ]
    // };
    // await this.ctx.render('news/list.html', dataList);
    // 调用service方法
    // let info = await this.ctx.service.main.getInfo(options);
    // 拼装响应体
    // this.ctx.body = {
    //   code: 0,
    //   data: userinfo,
    // };
    // this.ctx.status = 200;
    // await this.ctx.render('login/loginSuccess.html', results);


    // const results = {results:[{    "pwd": "admin",
    // "id": 0,
    // "user": "admin"}]}
    // console.log('==================>> ', results);
    // await this.ctx.render('login/loginSuccess.html', results);


    // this.ctx.redirect('/loginSuccess');
  // }


    // console.log('user --->> ', username, password);
    // const { ctx } = this;
    // console.log('ctx --->> ', ctx);
    // const results = await this.app.mysql.select('login', { // 搜索 login 表
    //   where: { user: username, pwd: password }, // WHERE 条件
    //   columns: [ 'id' ], // 要查询的表字段
    //   // orders: [['created_at','desc'], ['id','desc']], // 排序方式
    //   // limit: 10, // 返回数据量
    //   // offset: 0, // 数据偏移量
    // });
    // console.log('results --->> ', results);
  }
}

module.exports = HomeController;
