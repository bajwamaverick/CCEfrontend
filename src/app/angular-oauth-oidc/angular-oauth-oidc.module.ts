import { OAuthStorage, OAuthLogger } from '../core/oauth/types';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OAuthService } from '../core/oauth/auth.service';
import { UrlHelperService } from '../core/utilities/urlhelper.service';

import { OAuthModuleConfig } from '../core/oauth/outh.module.config';
import {
  OAuthResourceServerErrorHandler,
  OAuthNoopResourceServerErrorHandler
} from '../core/interceptors/resource-server-error-handler';
import { DefaultOAuthInterceptor } from '../core/interceptors/default-oauth.interceptor';
import { ValidationHandler } from '../core/token/tokenvalidationhandler';
import { NullValidationHandler } from '../core/token/null-validation-handler';
import { createDefaultLogger, createDefaultStorage } from '../core/factories/factories';
import {
  HashHandler,
  DefaultHashHandler
} from '../core/token/hash-handler';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class OAuthModule {
  static forRoot(
    config: OAuthModuleConfig = null,
    validationHandlerClass = NullValidationHandler
  ): ModuleWithProviders<OAuthModule> {
    return {
      ngModule: OAuthModule,
      providers: [
        OAuthService,
        UrlHelperService,
        { provide: OAuthLogger, useFactory: createDefaultLogger },
        { provide: OAuthStorage, useFactory: createDefaultStorage },
        { provide: ValidationHandler, useClass: validationHandlerClass },
        { provide: HashHandler, useClass: DefaultHashHandler },
        {
          provide: OAuthResourceServerErrorHandler,
          useClass: OAuthNoopResourceServerErrorHandler
        },
        { provide: OAuthModuleConfig, useValue: config },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DefaultOAuthInterceptor,
          multi: true
        }
      ]
    };
  }
}
