import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ email, password }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({
            where: { email },
        });

        if (checkUserExists) {
            throw new AppError('Email address already used');
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            email,
            password: hashedPassword,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
