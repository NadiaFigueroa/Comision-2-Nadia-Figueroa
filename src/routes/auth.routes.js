import { Router } from 'express';
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from '../controllers/user.controllers.js';
import {
  loginUserValidations,
  createUserValidations,
} from '../models/validations/user-validation.js';

const authRouter = Router();

authRouter.post('/login', loginUserValidations, ctrlLoginUser);
authRouter.post('/register', createUserValidations, ctrlCreateUser);

export { authRouter };
