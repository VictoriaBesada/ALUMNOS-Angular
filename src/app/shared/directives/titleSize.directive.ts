import { Directive, ElementRef } from "@angular/core";

@Directive ({
    selector: '[titleSize]'
})

export class TitleSizeDirective{

    constructor(private elemento: ElementRef) {
        elemento.nativeElement.style.fontSize = '20px';
    }
}