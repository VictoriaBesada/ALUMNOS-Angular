import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive ({
    selector: '[heading]'
})

export class HeadingDirective implements OnInit{

    constructor(private elemento: ElementRef) { }

    ngOnInit() : void {
        this.elemento.nativeElement.style.fontSize = '20px';
        this.elemento.nativeElement.style.textAlign = 'center';
        this.elemento.nativeElement.style.fontWeight = '500';
        this.elemento.nativeElement.style.color = 'black'; 
        this.elemento.nativeElement.style.color = 'black'; 

    }
}