import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnhover]'
})
export class OnhoverDirective {

  constructor(private rend: Renderer2, private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.rend.addClass(this.element.nativeElement, 'mat-elevation-z20');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.rend.removeClass(this.element.nativeElement, 'mat-elevation-z20');
  }

}
