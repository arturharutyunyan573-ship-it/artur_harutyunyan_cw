import { Router } from 'express';
import * as usersController from '../controllers/users.js';
import validation from '../middlewares/validation.js';
import schema from '../middlewares/schemas/users.schema.js';

const router = Router();

router.post(
    '/register',
    validation(schema.register),
    usersController.register
);

export default router;