import { Router, Request, Response } from 'express';
import {
    getUsersController,
    getUserByIdController,
    createUserController,
    updateUserController
} from '../controllers/users.controllers'
import {
    validateUser
  } from '../utils/validations/users.validations.custom';
  
// New Router instance
const router = Router();

// Users routes
router.get('/', (req: Request, res: Response) => {
    return getUsersController(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    return getUserByIdController(req, res)
});

router.post(
    '/', // path
    validateUser, // middleware
    createUserController // controller
);
router.put(
    '/:id', // path
    validateUser, // middleware
    updateUserController // controller
);
// router.delete('/:id', deleteUserController);

export default router;