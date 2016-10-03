'use strict'

const ENVDEF = process.env.def || 'dev';
const AppEnvConfig = require('./envConfig/appEnvConfig');
const appRunner = require('./appRunner');

let appConfig = new AppEnvConfig(ENVDEF);
// let dbContext = appConfig.createDbContext();


appRunner.run(appConfig);
