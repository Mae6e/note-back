import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from '../entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  findAll(): Promise<Note[]> {
    return this.notesRepository.find({order: {created_at: 'DESC'}});
  }

  findOne(id: number) {
    return this.notesRepository.findOneOrFail({ where: { id } });
  }

  create(note: Note): Promise<Note> {
    return this.notesRepository.save(note);
  }

  update(id: number, updateData:Partial<Note>): Promise<any> {
    return this.notesRepository.save({
      id,
      title : updateData.title
  });
  }

  async remove(id: number): Promise<void> {
    await this.notesRepository.delete(id);
  }
}