'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async description(){
    const { ctx } = this;
    console.log(ctx);
  }
}

module.exports = HomeController;
