import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'parent', component:ParentComponent},
    {path:'child', component:ChildComponent}
];
