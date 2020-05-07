import { HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpHandler, HttpEvent, HttpRequest, HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { tap, catchError } from "rxjs/operators";
//import { ErrorObservable } from "rxjs/observable/ErrorObservable";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  constructor(private http: HttpClient){
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddTokenInterceptor - ${req.url}`);
    const accesstoken = localStorage.getItem("access_token");
    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders:{
        Authorization : `Bearer ${accesstoken}`
      }
    });
    
    return next.handle(jsonReq);
  }
  
}
