import { NgModule } from '@angular/core';
import { TestDirettivaDirective } from './directives/test-direttiva.directive';
import { FormsModule } from '@angular/forms';
import { PermissionButtonDirective } from './directives/permission-button.directive';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TestDirettivaDirective,
    PermissionButtonDirective,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestDirettivaDirective,
    PermissionButtonDirective,
    CardComponent,
    FormsModule
  ]
})
export class SharedModule {

}
