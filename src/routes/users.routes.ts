import { Router } from 'express';
import { parseISO } from 'date-fns';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ email, password });

    delete user.password;

    return response.json(user);
});

userRouter.put('/', ensureAuthenticated, async (request, response) => {
    const { username, birthday, cpf, address } = request.body;
    const { id } = request.user;

    const updateUser = new UpdateUserService();

    const parsedDate = parseISO(birthday);

    const user = await updateUser.execute({
        username,
        birthday: parsedDate,
        cpf,
        address,
        id,
    });

    delete user.password;

    return response.json(user);
});

export default userRouter;
