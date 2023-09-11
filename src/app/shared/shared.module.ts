import { NgModule } from '@angular/core';
import { TestDirettivaDirective } from './directives/test-direttiva.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestDirettivaDirective
  ],
  exports: [
    TestDirettivaDirective,
    FormsModule
  ]
})
export class SharedModule {

}
