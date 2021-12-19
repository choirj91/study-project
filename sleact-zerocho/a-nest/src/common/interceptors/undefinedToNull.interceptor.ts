import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

 @Injectable()
 export class undefinedToNullInterceptor implements NestInterceptor {
     intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
         // 컨트롤러 전 부분
        return next.handle().pipe(map((data) => ( {data, code: 'success'})));
        // return next.handle().pipe(map((data) => ( data === undefined ? null : data)));
     }
     
 }