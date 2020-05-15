import { Injectable } from '@angular/core';
import {NGXLogger} from 'ngx-logger'
@Injectable({
    providedIn: 'root'
})
export class LoggingService {
constructor(private logService:NGXLogger){}

    logError(message: string, stack: string) {
      //  this.logService.error(message,stack);
        this.logService.error(message,stack);
    }
}