import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AppliedComponent } from './applied/applied.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlDetailsComponent } from './fl-details/fl-details.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'fldetails/:post_id',component:FlDetailsComponent},
  {path:'viewpost',component:DashboardComponent},
  {path:'menu', component:MenuComponent},
  {path:'logout',component:HomeComponent},
  {path:'applied', component:AppliedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseWorkRoutingModule { }
