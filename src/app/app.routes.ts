import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './guards/auth.service';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path: 'user',component:UsersComponent, canActivate:[authGuard], children:[{
        path:'profile', component: ProfileComponent, children:[{
            path:'about', component:AboutComponent
        }]
    }]},
    {path:'contact', component:ContactComponent, canActivate:[authGuard]},
    {path:'about', component:AboutComponent, canActivate:[authGuard]},
    {path:'page-not-found', component:PageNotFoundComponent},
    {path:'**', redirectTo:'page-not-found'},
];
