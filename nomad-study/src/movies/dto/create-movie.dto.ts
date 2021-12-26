import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true }) // 배열의 모든 요소를 하나씩 검사
  readonly genres: string[];
}
