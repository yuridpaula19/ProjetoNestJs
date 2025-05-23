import { Injectable } from '@nestjs/common';

@Injectable()
export class AlunoService {
  private alunos = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
  ];

  findAll() {
    return this.alunos;
  }

  findOne(id: number) {
    return this.alunos.find(aluno => aluno.id === id);
  }

  create(nome: string) {
    const id = this.alunos.length + 1;
    const novo = { id, nome };
    this.alunos.push(novo);
    return novo;
  }

  update(id: number, nome: string) {
    const aluno = this.findOne(id);
    if (aluno) {
      aluno.nome = nome;
      return aluno;
    }
    return null;
  }

  delete(id: number) {
    const index = this.alunos.findIndex(aluno => aluno.id === id);
    if (index >= 0) {
      const removido = this.alunos.splice(index, 1);
      return removido[0];
    }
    return null;
  }
}
