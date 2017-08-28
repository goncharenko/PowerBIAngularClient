import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import { IndexRoute } from './routes/index';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.api();
  }

  private api(): void {

  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use('/', express.static(__dirname + './../dist'));
    this.app.use('/scripts', express.static(__dirname + './../node_modules'));

    this.app.use(morgan('dev'));
  }

  private routes(): void {
    let router: express.Router;
    router = express.Router();

    IndexRoute.create(router);
    this.app.use('/', router);
  }
}

export default new App().app;
