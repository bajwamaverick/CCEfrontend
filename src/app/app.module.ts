import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeploymentModule } from './deployment/deployment.module';
import { MessagestatisticsModule } from './messagestatistics/messagestatistics.module';
import { MessagetracingModule } from './messagetracing/messagetracing.module';
import { SolutionsModule } from './solutions/solutions.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OAuthModule } from './angular-oauth-oidc/angular-oauth-oidc.module';
import { BASE_URL } from './app.token'
import {WebHttpUrlEncodingCodec} from '../app/core/utilities/encoder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeploymentModule,
    MessagestatisticsModule,
    MessagetracingModule,
    SolutionsModule,
    SharedModule.forRoot(),
    CoreModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://www.localhoat:4200/api'],
        sendAccessToken: true
      }
    })
    
  ],
  providers: [
    // (useHash) ? { provide: LocationStrategy, useClass: HashLocationStrategy } : [],
    // {provide: AuthConfig, useValue: authConfig },
    // { provide: OAuthStorage, useValue: localStorage },
    // { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: BASE_URL, useValue: 'http://www.localhost:4200/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
