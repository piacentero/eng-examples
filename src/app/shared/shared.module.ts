import { NgModule } from '@angular/core';
import { TestDirettivaDirective } from './directives/test-direttiva.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionButtonDirective } from './directives/permission-button.directive';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';

const bootstrapModules = [
  AlertModule,
  BsDatepickerModule,
  TabsModule
];

@NgModule({
  declarations: [
    TestDirettivaDirective,
    PermissionButtonDirective,
    CardComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...bootstrapModules,
    CardComponent,
    TableComponent,
    TestDirettivaDirective,
    PermissionButtonDirective
  ]
})
export class SharedModule {

}
