import Users from '../models/Users.js';

const UsersGetAll = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};

const UsersGetById = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const UsersCreate = async (req, res) => {
  try {
    await Users.create(req.body);
    res.json({
      message: 'Users Created',
    });
  } catch (err) {
    console.log(err);
  }
};

const UsersUpdate = async (req, res) => {
  try {
    await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Users Updated',
    });
  } catch (err) {
    console.log(err);
  }
};

const UsersDelete = async (req, res) => {
  try {
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Users Deleted',
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  UsersGetAll, UsersGetById, UsersCreate, UsersUpdate, UsersDelete,
};
