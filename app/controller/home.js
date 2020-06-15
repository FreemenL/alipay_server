'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async description(){
    const { ctx } = this;
    console.log('ctx.request.body :>> ', ctx.request.body);
    ctx.body={
      code:0,
      request:ctx.request.body
    }
    
  }
}

module.exports = HomeController;
