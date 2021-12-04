import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SelectSignupComponent } from './select-signup/select-signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/home', pathMatch:'full'},
  
  {path:'home', component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contect' , component:ContactComponent,pathMatch:'full'},
  {path:'signup', component:SignUpComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent,pathMatch:'full'},
  {path:'select', component:SelectSignupComponent},
  { path: 'hire-for-work', loadChildren: () => import('./hire-for-work/hire-for-work.module').then(m => m.HireForWorkModule)},
  { path: 'browse-work', loadChildren: () => import('./browse-work/browse-work.module').then(m => m.BrowseWorkModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
