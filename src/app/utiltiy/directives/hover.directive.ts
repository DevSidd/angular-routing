import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
  @HostBinding('style.border') border: string = '';

  @HostListener('mouseover')
  onMouseOver() {
    console.log('Host of mouse over event captured');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
    this.border = '5px solid green';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('Host of mouse leave event captured');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
}
