import { AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ecfTestDirettiva]'
})
export class TestDirettivaDirective implements AfterViewInit, OnChanges {

  @Input() hover: boolean;

  @Output() handleHover: EventEmitter<boolean> = new EventEmitter();

  // @HostBinding('style.width.px') width: number;
  @HostBinding('class.btn-danger') isDanger: boolean = true;
  @HostBinding('class.btn-warning') isWarning: boolean = false;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _renderer: Renderer2
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!changes['hover'].currentValue) {
      this._renderer.removeClass(this._elementRef.nativeElement, 'btn-danger');
      this._renderer.addClass(this._elementRef.nativeElement, 'btn-info');
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement, 'btn-info');
      this._renderer.addClass(this._elementRef.nativeElement, 'btn-danger');
    }
  }

  ngAfterViewInit(): void {
    // this.width = this._elementRef.nativeElement.offsetWidth;
    // console.log(this._elementRef.nativeElement.className);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    // this._renderer.removeClass(this._elementRef.nativeElement, 'btn-danger');
    // this._renderer.addClass(this._elementRef.nativeElement, 'btn-info');
    this.handleHover.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    // this._renderer.removeClass(this._elementRef.nativeElement, 'btn-info');
    // this._renderer.addClass(this._elementRef.nativeElement, 'btn-danger');
    this.handleHover.emit(false);
  }

  @HostListener('click') onMouseClick(): void {
    // this.width += 50;
    const oldWidth: number = this._elementRef.nativeElement.offsetWidth;
    // this._renderer.setStyle(this._elementRef.nativeElement, 'width', `${oldWidth + 50}px`);
    this.isWarning = !this.isWarning;
    this.isDanger = !this.isDanger;
  }

}
