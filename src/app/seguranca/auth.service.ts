import { environment } from './../../environments/environment';
import { JwtHelper } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper) {
      this.carregarToken();
      this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    }

  login(usuario: string, senha: string): Promise<void> {
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    const headers = new Headers();
    headers.append('Authorization', 'Basic YW5ndWxhcjp0ZXN0ZTEyMw==');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.oauthTokenUrl, body, {headers, withCredentials: true})
      .toPromise()
      .then(response => {
        console.log(response);
        this.armazenarToken(response.json().access_token);
      })
      .catch(response => {
        console.log(response);
        if (response.status === 400) {
          const responseJson = response.json();
          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida');
          }
        }

        return Promise.reject(response);
      });
  }

  obterNovoAccessToken(): Promise<void> {
    const body = 'grant_type=refresh_token';
    const headers = new Headers();
    headers.append('Authorization', 'Basic YW5ndWxhcjp0ZXN0ZTEyMw==');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.oauthTokenUrl, body, {headers, withCredentials: true})
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);
        console.log('Novo access token criado!');
        return Promise.resolve(null);
      }).catch(response => {
        console.error('Erro ao renovar token', response);
        return Promise.resolve(null);
      });
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload &&   this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles: string[]) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }
}