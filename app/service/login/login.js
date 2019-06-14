'use strict';

const Service = require('egg').Service;

class loginService extends Service {
  // 登陆请求
  async loginAction(username, password) {
    const results = await this.app.mysql.get('login', { user: username, pwd: password });
    console.log('results --->> ', results);
    console.log('service login -------->>> ', username, password);
    return results;
  }
}

module.exports = loginService;
