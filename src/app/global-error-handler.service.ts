import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './core/logger/logger.service';
import { ErrorService } from './core/error/error.service';
import { NotificationService } from './core/notification/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private logggingService: LoggingService,private errorService:ErrorService,
               private notificationService:NotificationService) { }
  
  handleError(error: Error | HttpErrorResponse) {
  

    let message:string= "";
    let stackTrace;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = this.errorService.getServerErrorMessage(error);
      stackTrace = this.errorService.getServerStack(error);
      this.notificationService.showError(message);
    } else {
      // Client Error
      message = this.errorService.getClientErrorMessage(error);
      this.notificationService.showError(message);
    }
    // Always log errors
    this.logggingService.logError(message, stackTrace);
   // console.error(error);
  }
}