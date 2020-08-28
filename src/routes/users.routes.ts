import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.post('/', (request, response) => {
    const { email, password } = request.body;

    const createUser = new CreateUserService();

    const user = createUser.execute({ email, password });

    return response.json(user);
});

export default userRouter;
