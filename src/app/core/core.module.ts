import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Auth} from './guard/auth.guard';
import {HttpTokenInterceptor} from './interceptors/http.token.interceptor';
import {LoggerService} from './logger/logger.service';
import {UserMock} from './mocks/user.mock';
import {AuthService} from './oauth/auth.service';
import {UserService} from './singleton/user.service';


@NgModule({
  declarations: [HeaderComponent, FooterComponent,Auth],
  imports: [
    CommonModule
  ],
  providers:[UserService,LoggerService,AuthService]
  
})
export class CoreModule { }
