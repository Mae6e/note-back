import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from '../entities/note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Get(':id')
   findOne(@Param('id') id: string):Promise<Note>  {
    return this.notesService.findOne(+id);
  }

  @Post()
  create(@Body() note: Note): Promise<Note> {
    return this.notesService.create(note);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: Partial<Note>)  {
    return this.notesService.update(+id,updateData);
 }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.notesService.remove(+id);
  }
}