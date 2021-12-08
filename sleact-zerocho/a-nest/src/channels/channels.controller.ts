import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { query } from 'express';
import { ChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) { }
  @Get()
  getAllChannels() {

  }

  @Post()
  creaateChannel() {

  }

  @Get(':name')
  getSpecificChannel() {

  }

  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':name/chats')
  postChat(@Body() body) {

  }

  @Get(':name/members')
  getAllMembers() {
    
  }

  @Post(':name/members')
  inviteMembers() {
    
  }

}
