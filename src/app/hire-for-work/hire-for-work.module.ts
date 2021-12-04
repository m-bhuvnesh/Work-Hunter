import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireForWorkRoutingModule } from './hire-for-work-routing.module';
import { CompDetailsComponent } from './comp-details/comp-details.component';
import { PostWorkComponent } from './post-work/post-work.component';
import { HeaderPostComponent } from './header-post/header-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ApplicationComponent } from './application/application.component';


@NgModule({
  declarations: [
    CompDetailsComponent,
    PostWorkComponent,
    HeaderPostComponent,
    EditComponent,
    ApplicationComponent,
  
  ],
  imports: [
    CommonModule,
    HireForWorkRoutingModule,
    FormsModule, ReactiveFormsModule,
    
  ],
  exports:[
    HeaderPostComponent
  ]

})
export class HireForWorkModule { }
