import { NgModule } from '@angular/core';
import { TestDirettivaDirective } from './directives/test-direttiva.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionButtonDirective } from './directives/permission-button.directive';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';

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
    TestDirettivaDirective,
    PermissionButtonDirective,
    CardComponent,
    TableComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {

}
