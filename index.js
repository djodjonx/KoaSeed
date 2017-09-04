var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var fs = require('fs')

var app = new Koa();
var router = new Router();

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
  .use(router.routes())
  
app.listen(3000);