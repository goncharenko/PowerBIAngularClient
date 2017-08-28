import { NextFunction, Request, Response } from 'express';

export class BaseRoute {
  protected title: string;
  private scripts: string[];

  constructor() {
    this.title = 'PowerBI Embeded';
    this.scripts = [];
  }

  public addScript(src: string): BaseRoute {
    this.scripts.push(src);
    return this;
  }
}
