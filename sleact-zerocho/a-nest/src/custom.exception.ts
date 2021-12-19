import { HttpException } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  realError: unknown;
  isLogging: boolean;

  constructor(
    status: number,
    response: { name: string; message: string },
    realError?: unknown,
    isLogging: boolean = true
  ) {
    super({ error: response }, status);

    this.realError = realError;
    this.isLogging = isLogging;
  }
}
