import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistroService } from './registro.service'; // ajuste o caminho conforme seu projeto

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  RegistroForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: RegistroService) {
    this.RegistroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  
  onSubmit() {
    if (this.RegistroForm.valid && this.RegistroForm.value.senha === this.RegistroForm.value.confirmarSenha) {
      const dados = this.RegistroForm.value;
      this.registroService.criarUsuario(dados).subscribe({
        next: (res) => {
          console.log('Usuário criado com sucesso:', res);
        },
        error: (err) => {
          console.error('Erro ao criar usuário:', err);
        }
      });
    } else {
      
      console.warn('Formulário inválido!');
    }
  }
}
