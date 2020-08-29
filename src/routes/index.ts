import { Router } from 'express';
import userRouter from './users.routes';
import sessionsRouter from './session.routes';
import workstationRouter from './workstation.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.json({
        message: 'Hello World! 🌎',
    });
});

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/workstations', workstationRouter);

export default routes;
