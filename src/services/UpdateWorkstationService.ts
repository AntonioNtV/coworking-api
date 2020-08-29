import { getRepository } from 'typeorm';
import Workstation from '../models/Workstation';
import AppError from '../errors/AppError';

interface Request {
    name: string;
    description: string;
    id: string;
}

class UpdateWorkstationService {
    public async execute({
        name,
        description,
        id,
    }: Request): Promise<Workstation> {
        const workstationRepository = getRepository(Workstation);

        const workstation = await workstationRepository.findOne({
            where: {
                id,
            },
        });

        if (!workstation) {
            throw new AppError(
                'Its only possible to update a workstation that exists',
            );
        }

        workstation.name = name;
        workstation.description = description;

        await workstationRepository.save(workstation);

        return workstation;
    }
}

export default UpdateWorkstationService;
