import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


// ...existing code...
onSubmit() {
  if (this.LoginForm.valid) {
    const { email, senha } = this.LoginForm.value;
    this.loginService.login(email, senha).subscribe({
      next: (usuario) => {
        if (usuario && usuario.nome) {
          localStorage.setItem('username', usuario.nome);
          window.location.href = '/userscream';
        }
      },
      error: (err) => {
        if (err.status === 401) {
          alert('Usuário ou senha inválidos');
        } else {
          console.log(err)
          alert('Erro ao verificar login');
        }
      }
    });
  } else {
    alert('Formulário inválido');
  }
}
// ...existing code...

}
