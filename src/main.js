const Koa = require('koa');
const { APP_PORT } = require('../config/config.default.js')
const app = new Koa();

app.use((ctx, next) => {
    ctx.body = 'hello world, restart'
})

app.listen(APP_PORT, () => {
    console.log(`server is running at localhost:${APP_PORT}`);
})