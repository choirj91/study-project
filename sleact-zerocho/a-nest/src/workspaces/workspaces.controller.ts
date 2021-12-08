import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { get } from 'http';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  getMyWorkspaces() {

  }

  @Post()
  createWorkspace() {

  }

  @Get(':url/members')
  getAllMembersFromWorkspace() {

  }

  @Post(':url/members')
  inviteMembersToWorkspace() {

  }

  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {

  }

  @Get(':url/members/:id')
  getMemberInfoInworkspace() {

  }
}
