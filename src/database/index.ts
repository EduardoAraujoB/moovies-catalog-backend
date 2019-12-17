import { Sequelize } from 'sequelize';

import User from '../app/models/User';
import Moovie from '../app/models/Moovie';

import databaseConfig from '../config/database';

const models = [User, Moovie];

class Database {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.initialize(this.connection));
  }
}

export default new Database();
