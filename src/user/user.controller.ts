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
  getMenu(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'menu-user.html'));
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get('cadastrar')
  getForm(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'cadastrar-user.html'));
  }

  @Get('listar')
  getListarPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'listar-user.html'));
  }

  @Get('api/listar')
  async listarUsuariosApi(@Res() res: Response) {
    const users = await this.userService.findAll();
    res.json(users);
  }
}

