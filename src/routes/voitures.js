import models from '../models'

module.exports = (router) => {
  router.prefix('/voitures')
  router
    // .post('/', async function (ctx) {
    //   const voitures = await storage.getItem('voitures') || []
    //   voitures.push(ctx.request.body)
    //   await storage.setItem('voitures', voitures);
    //   await storage.persist()
    //   ctx.body = ctx.request.body
    // })

    .get('/', async function (ctx) {
      console.log(ctx)
      ctx.body = models.voiture
    })

    .get('/marque', async function (ctx) {
      ctx.body = 'Peugeot'
    })

    // TODO: prendre l'url
}
