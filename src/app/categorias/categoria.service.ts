import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: AuthHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categoria`;
  }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.categoriasUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
