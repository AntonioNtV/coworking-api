import { Router } from 'express';
import userRouter from './users.routes';
import sessionsRouter from './session.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.json({
        message: 'Hello World! 🌎',
    });
});

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
