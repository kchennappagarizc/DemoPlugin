import {Aurelia} from 'aurelia-framework'
import environment from './environment';
//import * as r from 'aurelia-typescript-plugin';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-typescript-plugin')
    .feature('resources');

    //aurelia.use.plugin('aurelia-typescript-plugin');
  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
