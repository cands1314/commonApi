const Router = require('koa-router');

const router = new Router({ prefix: '/user' });

router.get('/', (ctx) => {
    ctx.body = 'hello user'
})

module.exports = router