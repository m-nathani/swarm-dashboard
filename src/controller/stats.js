import stats from '../service/stats';
import admin from '../conf/init-firebase';

export const getStats = async (ctx) => {
  var result = await stats.getStatistics();
  ctx.body = { stats: result, time: Date.now() };
};

export const postStats = async (ctx) => {
  var result = await stats.postStatistics(ctx.request.body);
  ctx.type = 'text/plain';
  ctx.body = result;
};

export const postErrorLog = async (ctx) => {
  var result = await stats.postErrorLog(ctx.request.body);
  ctx.type = 'text/plain';
  ctx.body = result;
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /stats';
};
