import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize: Sequelize.Sequelize): void {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'users',
    });
  }
}

export default User;
