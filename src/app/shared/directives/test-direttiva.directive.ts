import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ecfTestDirettiva]'
})
export class TestDirettivaDirective implements AfterViewInit {

  constructor(
    private _elementRef: ElementRef<HTMLElement>
  ) { }

  ngAfterViewInit(): void {
    // console.log(this._elementRef.nativeElement.className);
  }

}
