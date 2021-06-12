import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emails } from '../interfaces/correos.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  /* -------------------------------------------------------------------------- */
  /*                                 GET CORREOS                                */
  /* -------------------------------------------------------------------------- */

  getMails(page:number): Observable<Emails> {
    return this.http
      .get<Emails>(`${environment.url}?page=${page}`);
  }

 
}
