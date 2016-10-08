'use strict'

const ENVDEF = process.env.def || 'dev';
const AppEnvConfig = require('./envConfig/appEnvConfig');
const appRunner = require('./appRunner');

const classModuleConfig = require('./modules/class/api'); 

let appConfig = new AppEnvConfig(ENVDEF);

global.expressApp = appConfig.createExpressApp();
global.dbContext = appConfig.createDbContext();

classModuleConfig();

appRunner.run(expressApp);
