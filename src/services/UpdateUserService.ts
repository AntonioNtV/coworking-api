import { getRepository } from 'typeorm';
import { startOfDay } from 'date-fns';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
    username: string;
    cpf: string;
    birthday: Date;
    address: string;
    id: string;
}

class UpdateUserService {
    public async execute({
        username,
        cpf,
        birthday,
        address,
        id,
    }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: {
                id,
            },
        });

        if (!user) {
            throw new AppError(
                'Only authenticated users can change avatar',
                401,
            );
        }

        user.address = address;
        user.username = username;
        user.birthday = startOfDay(birthday);
        user.cpf = cpf;

        await userRepository.save(user);

        return user;
    }
}

export default UpdateUserService;
