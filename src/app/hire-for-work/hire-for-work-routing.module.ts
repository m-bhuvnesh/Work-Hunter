import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ApplicationComponent } from './application/application.component';
import { CompDetailsComponent } from './comp-details/comp-details.component';
import { EditComponent } from './edit/edit.component';
import { PostWorkComponent } from './post-work/post-work.component';


const routes: Routes = [
  
{path: 'post',component:PostWorkComponent, pathMatch:'full'},
{path:'deshboard',component:CompDetailsComponent},
{path:'edit/:post_id',component:EditComponent},
{path:'application',component:ApplicationComponent},
{path:'logout', component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireForWorkRoutingModule { }
