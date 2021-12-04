import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseWorkRoutingModule } from './browse-work-routing.module';
import { FlDetailsComponent } from './fl-details/fl-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppliedComponent } from './applied/applied.component';

@NgModule({
  declarations: [
    FlDetailsComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    AppliedComponent
  ],
  imports: [
    CommonModule,
    BrowseWorkRoutingModule,
    FormsModule, ReactiveFormsModule,
    
  ]
})
export class BrowseWorkModule { }
