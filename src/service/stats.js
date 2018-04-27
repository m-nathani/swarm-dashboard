import admin from '../conf/init-firebase';

var db = admin.database();

const getStatistics = () => {
  db.ref("/stats");
};

const postStatistics = (data) => {
  var postsRef = db.ref("/stats");
  postsRef.push().set(data);
}

const postErrorLog = (data) => {
  var postsRef = db.ref("/error_log");
  postsRef.push().set(data);
}

module.exports = {
  getStatistics: getStatistics,
  postStatistics: postStatistics,
  postErrorLog: postErrorLog
}