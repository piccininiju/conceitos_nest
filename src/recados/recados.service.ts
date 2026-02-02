import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Recado de teste',
      de: 'Juliana',
      para: 'Ariel',
      lido: false,
      data: new Date(),
    },
  ];

  findAll() {
    return this.recados;
  }

  findOnde(id: string) {
    return this.recados.find((item) => item.id === +id);
  }

  create(body: any) {
    this.lastId++;
    const id = this.lastId;
    const novoRecado = {
      id,
      ...body,
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }

  update(id: string, body: any) {
    const idRecadoExistente = this.recados.findIndex((item) => item.id === +id);

    if (idRecadoExistente >= 0) {
      const recadoExistente = this.recados[idRecadoExistente];
      return (this.recados[idRecadoExistente] = {
        ...recadoExistente,
        ...body,
      });
    }
  }

  remove(id: string) {
    const idRecadoExistente = this.recados.findIndex((item) => item.id === +id);

    if (idRecadoExistente >= 0) {
      this.recados.splice(idRecadoExistente, 1);
    }
  }
}
