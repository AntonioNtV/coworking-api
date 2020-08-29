import { getRepository } from 'typeorm';
import Workstation from '../models/Workstation';

interface Request {
    name: string;
    description: string;
}

class CreateWorkstationService {
    public async execute({ name, description }: Request): Promise<Workstation> {
        const workstationRepository = getRepository(Workstation);

        const workstation = workstationRepository.create({
            name,
            description,
        });

        await workstationRepository.save(workstation);

        return workstation;
    }
}

export default CreateWorkstationService;
