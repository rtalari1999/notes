import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'login', 
        component:LoginComponent
    },
    {
        path:'dashboard',
        canActivate:[authGuard],
        component: DashboardComponent
    },
    {
        path:'**',
        redirectTo:'/login'
    }

];
