import admin from '../conf/init-firebase';

var db = admin.database();

const getStatistics = () => {
  return admin.database().ref('/stats').once('value').then(function(snapshot) {
    return snapshot.val();
  });
};

const postStatistics = (data) => {
  var postsRef = db.ref("/stats");
  return postsRef.push(data).then(function() {
    return "Data saved successfully.";
  }).catch(function(error) {
    return "Data could not be saved." + error;
  });
}

const postErrorLog = (data) => {
  var postsRef = db.ref("/error_log");
  return postsRef.push(data).then(function() {
    return "Data saved successfully.";
  }).catch(function(error) {
    return "Data could not be saved." + error;
  });
}

module.exports = {
  getStatistics: getStatistics,
  postStatistics: postStatistics,
  postErrorLog: postErrorLog
}