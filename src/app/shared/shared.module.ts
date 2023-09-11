import { NgModule } from '@angular/core';
import { TestDirettivaDirective } from './directives/test-direttiva.directive';
import { FormsModule } from '@angular/forms';
import { PermissionButtonDirective } from './directives/permission-button.directive';

@NgModule({
  declarations: [
    TestDirettivaDirective,
    PermissionButtonDirective
  ],
  exports: [
    TestDirettivaDirective,
    PermissionButtonDirective,
    FormsModule
  ]
})
export class SharedModule {

}
