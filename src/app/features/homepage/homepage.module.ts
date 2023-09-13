import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FormService } from './services/form.service';
import { environment } from '../../../environments/environment';

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
  ],
  providers: [
    // { provide: FormService, useFactory: () => environment.production ? new FormService() : new NewFormService() }
    // { provide: FormService, useClass: NewFormService },
    // { provide: 'KeyTest', useValue: 'Custom value' },
    { provide: 'KeyTest', useFactory: () => environment.production ? 'Custom value' : 'New custom value' },
    FormService
  ]
})
export class HomepageModule { }
