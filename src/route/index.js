import compose from 'koa-compose';

// Import all routes
import stats from './stats';

export default () => compose([
  stats(),
]);
