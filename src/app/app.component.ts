import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './core/oauth/auth.service';

import {Event,Router,NavigationStart,NavigationEnd,NavigationCancel,NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isAuthenticated: Observable<boolean>;
  isDoneLoading: Observable<boolean>;
  canActivateProtectedRoutes: Observable<boolean>;
  showLoadingProperty:boolean = true;
  constructor (
    private authService: AuthService,private router:Router,private httpclient:HttpClient
  ) {
    this.router.events.subscribe((routerEvent:Event) =>
    {
      if( routerEvent instanceof NavigationStart) {
      this.showLoadingProperty = true;
      }
      if( routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
         ) {
        this.showLoadingProperty = false;
        }

    } );
    this.isAuthenticated = this.authService.isAuthenticated$;
    this.isDoneLoading = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes = this.authService.canActivateProtectedRoutes$;

    this.authService.runInitialLoginSequence();
    
  }

  throwError(){
    throw new Error('My Pretty Error');
  }

  throwHttpError(){
    this.httpclient.get('urlhere').subscribe();
  }

  
}
