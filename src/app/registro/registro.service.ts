import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { 


  }

  getRegistro() {
    return this.http.get('http://localhost:3000/usuarios');
  }

  criarUsuario(dados: any) {
  return this.http.post('http://localhost:3000/usuarios', dados);
  }

  
}


