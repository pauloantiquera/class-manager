const ENVDEF = process.env.def || 'DEV';
const AppEnvConfig = require('./envConfig/');
const appRunner = require('./appRunner');

let appConfig = new AppEnvConfig(ENVDEF);

appRunner.run(appConfig);
