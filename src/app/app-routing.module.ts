import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';
import { DeauthGuard } from './guards/deauth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: InicioComponent
    },
    {
        path: 'iniciar-sesion',
        component: LoginComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
        canDeactivate: [DeauthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}