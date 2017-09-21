const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs')
const cors = require('kcors');

const app = new Koa();
const router = new Router();

const filename = './voitures'
const voitures = JSON.parse(fs.readFileSync(filename))

router.post('/voitures', async function (ctx) {
	voitures.push(ctx.request.body)
  fs.writeFile(filename, JSON.stringify(voitures))
  ctx.body = ctx.request.body
});

router.get('/voitures', function (ctx) {
  ctx.body = voitures
});


app
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  
app.listen(3000);
