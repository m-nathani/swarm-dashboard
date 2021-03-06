import Koa from 'koa';
import debug from 'debug';
import cors from '@koa/cors';

import bodyParser from 'koa-bodyparser';
import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';

import requestMiddleware from './middleware/request';
import errorMiddleware from './middleware/error';

import routeMiddleware from './route';

import conf from './conf';

const app = new Koa();
const d = debug('kickstarter:root');

//Register CORS middleware
app.use(cors())

// Register middleware
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());

// Registers routes via middleware
app.use(bodyParser())
app.use(routeMiddleware());

d('current environment: %s', conf.get('env'));
d('server started at port: %d', conf.get('port'));
app.listen(conf.get('port'));
