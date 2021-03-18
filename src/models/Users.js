import { Sequelize } from 'sequelize';

import Database from '../configs/Database.js';

const { DataTypes } = Sequelize;

const Users = Database.define('users', {
  username: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
});

export default Users;
