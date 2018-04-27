import Router from 'koa-router';
import Errors from 'boom';
import compose from 'koa-compose';

import * as Ctrl from '../controller/stats';

const router = new Router({
  prefix: '/stats',
});

router.get('/', Ctrl.getStats);
router.post('/', Ctrl.postStats);
router.post('/error', Ctrl.postErrorLog);

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
