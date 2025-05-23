import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { join } from 'path';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get('cadastrar')
  getForm(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'cadastrar-user.html'));
  }
}

