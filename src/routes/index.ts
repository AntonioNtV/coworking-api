import { Router } from 'express';
import userRouter from './users.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.json({
        message: 'Hello World! 🌎',
    });
});

routes.use('/users', userRouter);

export default routes;
