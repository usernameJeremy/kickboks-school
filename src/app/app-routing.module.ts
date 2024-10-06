import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TeamComponent } from './team/team.component';
import { GallerijComponent } from './gallerij/gallerij.component';
import { AdminComponent } from './admin/admin.component';
import {InstellingenComponent} from './instellingen/instellingen.component'
import { authGuard } from './auth/auth.gaurd';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'meetTheTeam', component: TeamComponent },
  { path: 'gallery', component: GallerijComponent },
  { path: 'admin', component: AdminComponent}, 
  { path: 'instellingen', component: InstellingenComponent, canActivate: [authGuard]}, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
