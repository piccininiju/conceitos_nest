import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from '../recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from '../pessoas/pessoas.module';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teste_debug')
class TesteDebug {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: '1234',
      entities: [TesteDebug], //carrega entidades sem precisar especifica-las
      synchronize: true, //sincroniza com o BD, não deve ser usado em prod
      logging: true,
    }),
    RecadosModule,
    PessoasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
