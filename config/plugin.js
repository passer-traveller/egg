'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
// };
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
// 数据库连接插件
// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize',
// };
// mysql连接
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 这里关闭security的原因是不用每次动态的添加token，开发阶段很麻烦
// exports.security = {
//   enable: false,
// };

