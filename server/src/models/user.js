import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const User = sequelize.define('Users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activationToken: {
    type: DataTypes.STRING,
  }
},
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export default User;