const dotenv = require('dotenv')

dotenv.config({path: './.env', debug: true});

// console.log(process.env.APP_PORT);
// process 进程
// env 环境变量 
module.exports = process.env;