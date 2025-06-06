import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.post<any>('http://localhost:3000/login', { email, senha });
  }
}