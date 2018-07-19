/*
 * app.js
 * Copyright (C) 2018 wsgzg <wsgzg@wsgzg-VirtualBox>
 *
 * Distributed under terms of the MIT license.
 */

const path = require('path');
const Koa = require('koa');
const convert = require('koa-convert');
const views = require('koa-views');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');

const config = require('./../config');
const routers = require('./routers/index');
const moecrowdsale = require('./utils/moecrowdsale_deploy')
const moecoin = require('./utils/moecoin_deploy')
const moefund = require('./utils/moefund_deploy')

var fs = require('fs')

const app = new Koa();

//session store config
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
};

app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}));

app.use(koaLogger());

app.use(bodyParser());

app.use(koaStatic(
  path.join(__dirname, './../static')
));

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);
console.log(`the server is start at port ${config.port}`);
