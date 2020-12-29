import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Usuario} from '../models/usuario.model';

interface DataUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<DataUsers>(`${this.url}/users`)
      .pipe(
        map( (users: DataUsers) => users.data )
      );
  }
}
