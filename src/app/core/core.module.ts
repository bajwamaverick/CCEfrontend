import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpTokenInterceptor} from './interceptors/http.token.interceptor';
import {LoggerService} from './logger/logger.service';
import {UserMock} from './mocks/user.mock';
import {OAuthService} from './oauth/auth.service';
import {UserService} from './singleton/user.service';
import {base64UrlEncode} from './utilities/base64-helper';

import {UrlHelperService} from './utilities/urlhelper.service';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  providers:[UserService,LoggerService,OAuthService,UrlHelperService],
  exports:[HeaderComponent, FooterComponent]
  
})
export class CoreModule { }
