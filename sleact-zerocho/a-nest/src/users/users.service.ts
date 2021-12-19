import { HttpException, Injectable } from '@nestjs/common';
import { Users } from '../entities/Users';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { CustomHttpException } from '../custom.exception';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { ChannelMembers } from 'src/entities/ChannelMembers';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(WorkspaceMembers) private workspacesMebersRepository: Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers) private channelMambersRepository: Repository<ChannelMembers>
  ) {}

  async getUser() {}

  async postUsers(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!email) {
      throw new CustomHttpException(404, { name: 'resource error', message: `이메일이 존재하지 않습니다` });
    }
    if (!nickname) {
      throw new CustomHttpException(404, { name: 'resource error', message: `비밀번호가 존재하지 않습니다.` });
    }
    if (user) {
      throw new CustomHttpException(404, { name: 'resource error', message: `이미 존재하는 사용자 입니다.` });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const resultUser = await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword
    });

    await this.workspacesMebersRepository.save({
      UserId: resultUser.id,
      WorkspaceId: 1
    });

    // 3가지 방법 존재
    // const channelMember = new ChannelMembers(); // 1
    const channelMember = this.channelMambersRepository.create(); // 2
    channelMember.UserId = resultUser.id;
    channelMember.ChannelId = 1;
    await this.channelMambersRepository.save(channelMember); // 3
    // await this.channelMambersRepository.save({
    //   UserId: resultUser.id,
    //   ChannelId: 1
    // });

    return resultUser;
  }
}
