import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuserpermission } from './userpermission.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserpermissionService {

  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getUserPermissions(userName: string): Observable<Iuserpermission[]> {
    const url = `${this.baseUrl}/${userName}`;
    return this.httpClient.get<Iuserpermission[]>(url);
  }
}
