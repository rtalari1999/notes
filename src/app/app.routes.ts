import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'register',
        component:RegisterComponent,
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'landing-page',
        component:HomeComponent,
        canActivate:[authenticationGuard]
    },
    {
        path:'**',
        redirectTo:'login'
    },
    

];
