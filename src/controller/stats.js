import stats from '../service/stats';
import admin from '../conf/init-firebase';

export const getStats = (ctx) => {
  ctx.body = { stats: stats.getStatistics(), time: Date.now() };
};

export const postStats = (ctx) => {
  const body = ctx.request.body;
  ctx.type = 'text/plain';
  stats.postStatistics(body);
  ctx.body = "Data saved successfully.";
};

export const postErrorLog = (ctx) => {
  const body = ctx.request.body;
  ctx.type = 'text/plain';
  stats.postErrorLog(body);
  ctx.body = "Data saved successfully.";
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /stats';
};
