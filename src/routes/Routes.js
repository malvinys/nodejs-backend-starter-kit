import express from 'express';

import HomeController from '../controllers/HomeController.js';
import UsersController from '../controllers/UsersController.js';

const router = express.Router();
router.get('/', HomeController.HomeIndex);
router.get('/users', UsersController.UsersGetAll);
router.get('/users/detail/:id', UsersController.UsersGetById);
router.post('/users/create', UsersController.UsersCreate);
router.put('/users/update/:id', UsersController.UsersUpdate);
router.delete('/users/delete/:id', UsersController.UsersDelete);

export default router;
