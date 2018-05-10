import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';

import * as Ctrl from '../controller/stats';

const router = new Router({
  prefix: '/node',
});

router.get('/stats', Ctrl.getStats);
router.post('/stats', Ctrl.postStats);
router.post('/log', Ctrl.postErrorLog);
router.put('/', Ctrl.put);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  throw: true,
  notImplemented: () => new Errors.notImplemented(),
  methodNotAllowed: () => new Errors.methodNotAllowed(),
});

export default () => compose([
  routes,
  allowedMethods,
]);
