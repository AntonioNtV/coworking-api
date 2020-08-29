import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateWorkstationService from '../services/CreateWorkstationService';

const workstationRouter = Router();

workstationRouter.use(ensureAuthenticated);
workstationRouter.post('/', async (request, response) => {
    const { name, description } = request.body;

    const createWorkstation = new CreateWorkstationService();

    const workstation = await createWorkstation.execute({ name, description });

    return response.json(workstation);
});

export default workstationRouter;
