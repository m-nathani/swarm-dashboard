import * as admin from 'firebase-admin';
import conf from './../conf';

//Connet Firebase App.
var serviceAccount = require(conf.get('serviceAccount'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: conf.get('db')
});

export default admin;