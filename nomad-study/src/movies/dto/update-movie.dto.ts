import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialType -- 모두 선택사항으로 반환
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
