import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './services/auth.guard';
import { ComponentComponent } from './components/topics/component/component.component';
import { DecoratorsComponent } from './components/topics/decorators/decorators.component';
import { Directive } from '@angular/core';
import { DirectivesComponent } from './components/topics/directives/directives.component';
import { GetStartedComponent } from './components/topics/get-started/get-started.component';
import { InterceptionsComponent } from './components/topics/interceptions/interceptions.component';
import { IntroductionComponent } from './components/topics/introduction/introduction.component';
import { LifeCycleHooksComponent } from './components/topics/life-cycle-hooks/life-cycle-hooks.component';
import { ModulesComponent } from './components/topics/modules/modules.component';
import { PipesComponent } from './components/topics/pipes/pipes.component';
import { ServicesComponent } from './components/topics/services/services.component';
import { AngularFormsComponent } from './components/topics/angular-forms/angular-forms.component';

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
        path:'angular-topics',
        component:DashboardComponent,
        children:[
            {
                path:'components',
                component:ComponentComponent
            },
            {
                path:'decorators',
                component:DecoratorsComponent
            },
            {
                path:'directives',
                component: DirectivesComponent
            },
            {
                path:'get-started',
                component: GetStartedComponent
            },
            {
                path:'interceptions',
                component: InterceptionsComponent
            },
            {
                path:'introduction',
                component: IntroductionComponent
            },
            {
                path:'life-cycle-hooks',
                component: LifeCycleHooksComponent
            },
            {
                path:'modules',
                component: ModulesComponent
            },
            {
                path:'pipes',
                component: PipesComponent
            },
            {
                path:'services',
                component: ServicesComponent
            },
            {
                path:'forms',
                component: AngularFormsComponent
            }
        ]
    },
    {
        path:'**',
        redirectTo:'/login'
    }

];
