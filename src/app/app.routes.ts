import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UserscreamComponent } from './userscream/userscream.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'userscream',component: UserscreamComponent}
];
