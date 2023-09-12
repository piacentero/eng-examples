import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    HomepageComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
