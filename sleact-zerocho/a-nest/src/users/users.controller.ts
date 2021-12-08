import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { undefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';

@UseInterceptors(undefinedToNullInterceptor)
@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary: 'asdf'})
  @Get()
  getUsers(@User() user) {
    // return user;
    console.log('asdfasdf')
    return 'user';
  }
  
  @ApiOperation({summary: '회원가입'})
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }

  @Post('login')
  logIn() {

  }

  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', {httpOnly: true});
    res.send('ok');
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
