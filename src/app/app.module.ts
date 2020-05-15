
import { NgModule,ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeploymentModule } from './deployment/deployment.module';
import { MessagestatisticsModule } from './messagestatistics/messagestatistics.module';
import { MessagetracingModule } from './messagetracing/messagetracing.module';
import { SolutionsModule } from './solutions/solutions.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BASE_URL } from './app.token'
import {WebHttpUrlEncodingCodec} from '../app/core/utilities/encoder';
import { GlobalErrorHandler } from './global-error-handler.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServerErrorInterceptor } from './server-error.interceptor.service';
import {LoggerModule} from 'ngx-logger';
import {environment} from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DeploymentModule,
    MessagestatisticsModule,
    MessagetracingModule,
    SolutionsModule,
    SharedModule.forRoot(),
    CoreModule.forRoot(),
    MatSnackBarModule,
    BrowserAnimationsModule,
    LoggerModule.forRoot(environment.logging),
   ],
  providers: [
    // (useHash) ? { provide: LocationStrategy, useClass: HashLocationStrategy } : [],
    // {provide: AuthConfig, useValue: authConfig },
    // { provide: OAuthStorage, useValue: localStorage },
    // { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: BASE_URL, useValue: 'http://www.localhost:4200/api'
   },
   { provide: ErrorHandler, useClass: GlobalErrorHandler },
   { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
