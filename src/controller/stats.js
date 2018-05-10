import * as Stats from '../service/stats';
import admin from '../conf/init-firebase';

export const getStats = async (ctx) => {
  var result = await Stats.getStatistics();
  ctx.body = { stats: result, time: Date.now() };
};

export const postStats = async (ctx) => {
  var result = await Stats.postStatistics(ctx.request.body);
  ctx.type = 'text/plain';
  ctx.body = result;
};

export const postErrorLog = async (ctx) => {
  var result = await Stats.postErrorLog(ctx.request.body);
  ctx.type = 'text/plain';
  ctx.body = result;
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /stats';
};