import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive ({
    selector: '[hr]'
})

export class HrDirective implements OnInit{

    constructor(private elemento: ElementRef) { }

    ngOnInit() : void {
        this.elemento.nativeElement.style.height = '1px';
        this.elemento.nativeElement.style.backgroundColor = 'black';
    }
}