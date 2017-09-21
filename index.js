const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs')
const cors = require('kcors');
const storage = require('node-persist');

const app = new Koa();
const router = new Router();

storage.initSync();

router.post('/voitures', async function (ctx) {
  const voitures = await storage.getItem('voitures') || []
	voitures.push(ctx.request.body)
  await storage.setItem('voitures', voitures);
  await storage.persist()
  ctx.body = ctx.request.body
});

router.get('/voitures', async function (ctx) {
  const voitures = await storage.getItem('voitures') || []
  ctx.body = voitures
});


app
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  
app.listen(3000);
