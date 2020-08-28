import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

const userRouter = Router();

userRouter.post('/', (request, response) => {
    const { email, password } = request.body;

    const userRepository = getRepository(User);
});

export default userRouter;
