import { Sequelize, Model, DataTypes } from 'sequelize';

import User from './User';

class Moovie extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public release!: Date;
  public readonly user_id: number;
  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        release: {
          type: DataTypes.DATE,
        },
        user_id: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
      },
    );
    this.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Moovie;
