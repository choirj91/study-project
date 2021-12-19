import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class CustomBadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    console.log('BadRequestException :', exception);
    const status = exception.getStatus();
    const response = host.switchToHttp().getResponse<Response>();
    const { message } = exception.getResponse() as { statusCode: number; message: string | string[]; error: string };

    return response.status(status).json({
      error: {
        name: exception.name,
        message: Array.isArray(message) ? message[0] : message
      }
    });
  }
}

@Catch(HttpException)
export class CustomHttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('HttpException :', exception);
    const status = exception.getStatus();
    const response = host.switchToHttp().getResponse<Response>();
    const exceptionResponse = exception.getResponse();

    return response.status(status).json(exceptionResponse);
  }
}

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    console.log('exception :', error);
    const response = host.switchToHttp().getResponse<Response>();

    const errorObj = {
      error: {
        name: 'INTERNAL_SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR'
      }
    };

    return response.status(500).json(errorObj);
  }
}
