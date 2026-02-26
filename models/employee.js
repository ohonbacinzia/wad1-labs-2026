'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const appStore = {

  store: new JsonStore('./models/employee.json', { employee: {} }),
  collection: 'employee',


  getempInfo() {
    return this.store.findAll(this.collection);
  },

};

export default appStore;
