import * as Koa from "koa";

export default class App {
  private readonly app = new Koa();
  constructor() {
    this.middleware();
    this.route();
    this.startApp();
  }

  public startApp() {
    return this.app;
  }

  private middleware() {}

  private route() {}
}
