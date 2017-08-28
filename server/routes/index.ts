import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';

import { BaseRoute } from './route';

export class IndexRoute extends BaseRoute {
  constructor() {
    super();
  }

  public static create(router: Router) {
    console.log('[IndexRoute::create] Creating index route.');

    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    })
  }

  private index(req: Request, res: Response, next: NextFunction) {
    this.title = 'Home | PowerBI Embeded';
    let options: Object = {
      'message': 'Welcome to the PowerBI Embeded'
    };
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  }
}
