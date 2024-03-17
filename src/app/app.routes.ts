import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { authDeactivate, authGuard, authGuardChild } from './auth.guard';

export const routes: Routes = [
    {path:'', component:HomeComponent},//http://localhost:4200/login
    {path:'profile',
    component:ProfileComponent,
    canActivateChild: [ authGuardChild],canActivate:[authGuard], canDeactivate: [authDeactivate],
     children: [
        {
            path:'view',
            component: ViewProfileComponent,
        },
        {
            path:'edit',
            component: EditProfileComponent
        }
     ]
    },
    {path:'contact/:id/:name', component:ContactComponent},
    {path:'about', component:AboutComponent},
    {path:'not-found', component:PageNotFoundComponent},
    {path:'**', redirectTo:'not-found'}
];


/**
 * 
 *  component profile   /profile
 *              - view profile /profile/view   /view
 *              - edit profile  /profile/edit
 *              - delete profile /profile/delete
 *              - change password
 * 
 * guards
 *  - guards also services
 */