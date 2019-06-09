/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559547296540_2415';

  // add your middleware config here
  config.middleware = [];

  // view文件配置
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // 添加news的配置项
  // exports.news = {
  //   pageSize: 5,
  //   serverUrl: 'https://hacker-news.firebaseio.com/v0',
  // };

  // // sequelize  mysql配置
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   database: 'test',
  //   username: 'root',
  //   password: 'root',
  // };
  // mysql配置
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // // 请求头产地CSRF
  // module.exports = {
  //   security: {
  //     csrf: {
  //       headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
  //     },
  //   },
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
