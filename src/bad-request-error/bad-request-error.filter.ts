import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BadRequestError } from 'src/errors/index';

@Catch(BadRequestError)
export class BadRequestErrorFilter implements ExceptionFilter {
  catch(exception: BadRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(400).json({
      statusCode: 400,
      message: exception.message
    })
  }
}
