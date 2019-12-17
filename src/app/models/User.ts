import { Sequelize, Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public password_hash!: string;
  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.VIRTUAL,
        },
        password_hash: {
          type: DataTypes.STRING,
        },
      },
      {
        hooks: {
          beforeSave: async (user): Promise<void> => {
            user.password_hash = await bcrypt.hash(user.password, 8);
          },
        },
        sequelize,
      },
    );
  }

  checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
