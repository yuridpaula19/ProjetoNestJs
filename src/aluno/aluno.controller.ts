import { Controller, Get, Post, Body, Param, Put, Delete, Render, ParseIntPipe } from '@nestjs/common';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  @Render('aluno/list') // Renderiza a lista de alunos
  findAll() {
    return { alunos: this.alunoService.findAll() };
  }

  @Get('new')
  @Render('aluno/new') // Renderiza o formulário de novo aluno
  new() {
    return {};
  }

  @Post()
  create(@Body('nome') nome: string) {
    this.alunoService.create(nome);
    return { message: 'Aluno criado com sucesso!' };
  }

  @Get(':id/edit')
  @Render('aluno/edit') // Renderiza o formulário de edição
  edit(@Param('id', ParseIntPipe) id: number) {
    const aluno = this.alunoService.findOne(id);
    return { aluno };
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body('nome') nome: string) {
    this.alunoService.update(id, nome);
    return { message: 'Aluno atualizado com sucesso!' };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.alunoService.delete(id);
    return { message: 'Aluno deletado com sucesso!' };
  }
}
