import { Sequelize, Model, DataTypes } from 'sequelize';

class User extends Model {
  public static initialize(sequelize: Sequelize): void {
    User.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        password_hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'users',
      },
    );
  }
}

export default User;
