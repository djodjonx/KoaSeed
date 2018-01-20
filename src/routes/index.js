import Router from 'koa-router'
import fs from 'fs'

module.exports = (app) => {
    const router = new Router();

   fs.readdir(__dirname, (error, files) => {
       if (error) {
           throw error;
       } else {
           files.forEach((file) => {
               require(`${__dirname}/${file.substr(0, file.lastIndexOf('.'))}`)(router);
           });
       }
   });
  return router.routes()

}
