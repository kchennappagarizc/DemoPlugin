import { I18N, BaseI18N } from 'aurelia-i18n';

export class App {
  static inject = [I18N];

  public i18n: I18N;
  constructor(i18n:I18N) {
    this.i18n=i18n;
  }
  message = 'Hello World!';
  dt = new Date();
  cost = 12345.67;
}
