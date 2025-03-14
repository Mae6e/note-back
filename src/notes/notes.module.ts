import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesService } from './notes.service';
import { Note } from '../entities/note.entity';
import { NotesController } from './notes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers:[NotesController],
  providers: [NotesService],
  exports: [NotesService],
})
export class NotesModule {}