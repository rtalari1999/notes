import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},//http://localhost:4200/login
    {path:'profile', component:ProfileComponent},
    {path:'contact/:id/:name', component:ContactComponent},
    {path:'about', component:AboutComponent},
    {path:'not-found', component:PageNotFoundComponent},
    {path:'**', redirectTo:'not-found'}
];
