import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

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

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

  findAll() {
    return this.recados;
  }

  findOnde(id: number) {
    const recado = this.recados.find((item) => item.id === +id);

    if (recado) return { recado };

    this.throwNotFoundError();
  }

  create(createRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const id = this.lastId;
    const novoRecado = {
      id,
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }

  update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const idRecadoExistente = this.recados.findIndex((item) => item.id === +id);
    if (idRecadoExistente < 0) {
      this.throwNotFoundError();
    }

    const recadoExistente = this.recados[idRecadoExistente];
    return (this.recados[idRecadoExistente] = {
      ...recadoExistente,
      ...updateRecadoDto,
    });
  }

  remove(id: number) {
    const idRecadoExistente = this.recados.findIndex((item) => item.id === id);
    if (idRecadoExistente < 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados.splice(idRecadoExistente, 1);
    return recado;
  }
}
