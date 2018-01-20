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
app.listen(3000)
