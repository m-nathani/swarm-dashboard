import convict from 'convict';
import fs from 'fs';
import debug from 'debug';

const conf = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The ip address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 4000,
    env: 'PORT',
  },
  db: {
    doc: 'The host to connect db.',
    format: '*',
    default: 'https://swarmtest-2f2e0.firebaseio.com',
    env: 'DB_HOST',
  },
  serviceAccount: {
    "doc": "service account file path",
    "format": String,
    "default": "./swarmtest-2f2e0-firebase-adminsdk-gqn44-dac5f51f5b.json",
    env: 'SERVICE_ACCOUNT',
  }
});
const d = debug('kickstarter:conf');
const env = conf.get('env');
try {
  const path = `${__dirname}/${env}.json`;

  d('trying to access %s', path);
  fs.accessSync(path, fs.F_OK);

  conf.loadFile(path);
} catch (error) {
  d('file doesn\'t exist, loading defaults');
}

conf.validate({ strict: true });

export default conf;