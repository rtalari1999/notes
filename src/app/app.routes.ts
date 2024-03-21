import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

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
        component:LandingPageComponent,
        canActivate:[authenticationGuard],
        children:[
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'filter/:name/:brand',
                component: FilterProductComponent
            }
        ]
    },
    {
        path:'**',
        redirectTo:'login'
    },
    

];
