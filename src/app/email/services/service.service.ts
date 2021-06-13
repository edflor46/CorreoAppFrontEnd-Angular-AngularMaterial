import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emails } from '../interfaces/correos.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  /* -------------------------------------------------------------------------- */
  /*                                 GET CORREOS                                */
  /* -------------------------------------------------------------------------- */

  getMails(page: number): Observable<Emails> {
    return this.http.get<Emails>(`${environment.url}?page=${page}`);
  }

  /* -------------------------------------------------------------------------- */
  /*                                  GET MAIL                                  */
  /* -------------------------------------------------------------------------- */

  getMail(id: string): Observable<Emails> {
    return this.http.get<any>(`${environment.url}/${id}`).pipe(
      map(resp => resp.correo)
    )
  }
}
