import {Aurelia} from 'aurelia-framework'
import environment from './environment';
//import * as r from 'aurelia-typescript-plugin';

export function configure(aurelia: Aurelia) {
let pluginConfig = { ns: ['translation','nav', 'common']};

  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-typescript-plugin', pluginConfig)
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
