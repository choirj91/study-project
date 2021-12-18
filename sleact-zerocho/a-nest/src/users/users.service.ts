import { HttpException, Injectable } from '@nestjs/common';
import { Users } from '../entities/Users';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {}

  getUser() {

  }

  async postUsers(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.findOne({where: {email}});
    if(!email) {
      throw new HttpException('이메일이 존재하지 않습니다', 400);
    }
    if(!nickname) {
      throw new HttpException('비밀번호가 존재하지 않습니다.', 400);
    }
    if( user) {
      throw new HttpException('이미 존재하는 사용자 입니다.', 400);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword
    });
    return 'what'
  }
}
