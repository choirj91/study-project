import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('query') query) {
    return `We are searching for a movie with a title: ${query}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movie: CreateMovieDto) {
    console.log('movie', movie);
    return this.moviesService.create(movie);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.delete(movieId);
  }

  @Patch(':id')
  update(@Param('id') movieId: string, @Body() movie: UpdateMovieDto) {
    return this.moviesService.update(movieId, movie);
  }
}
