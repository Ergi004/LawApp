import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    login(loginUser: LoginUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(res: Response): void;
    getProfile(req: any): any;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: number): Promise<import("./entities/user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): {
        data: string;
        message: string;
    };
    delete(id: number): Promise<void>;
}
