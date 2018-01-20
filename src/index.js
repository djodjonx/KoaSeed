import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import fs from 'fs'
import cors from 'kcors'
import axios from 'axios'
import parser from 'url-parse'
import queryString from 'query-string'

require('dotenv').config()

const app = new Koa()

app
  .use(bodyParser())
  .use(cors())
  .use(async (ctx, next) => {
    const parseUrl = parser(ctx.request.url)
    const querys = queryString.parse(parseUrl.query)
    querys.api_key = process.env.GIPHY_API_KEY
    querys.limit = 2
    ctx.request.url = `http://api.giphy.com/v1${parseUrl.pathname}?${queryString.stringify(querys)}`

    await next()
    
    delete ctx.body.meta
    delete ctx.body.pagination
  })
  .use(async (ctx, next) => {
    try {
      const res = (await axios.get(ctx.request.url)).data
      ctx.body = res
    } catch (e) {
      throw new Error(e)
    }
    await next()
  })

app.listen(3000)
