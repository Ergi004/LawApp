import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async register(createUser: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create({ ...createUser });
    return this.usersRepository.save(newUser);
  }

  async login(loginCredentials: LoginUserDto) {
    const existingUsers = await this.usersRepository.find();
    const loggedUser = existingUsers.find(
      (user) =>
        loginCredentials.email === user.email &&
        loginCredentials.password === user.password,
    );
    const payload = { sub: loggedUser.id, user_name: loggedUser.user_name };
    console.log(payload);
    if (!loggedUser) throw new UnauthorizedException('Invalid Credentials');

    return { access_token: this.jwtService.signAsync(payload) };
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
