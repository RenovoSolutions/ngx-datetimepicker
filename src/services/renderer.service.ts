import { Injectable, PLATFORM_ID, Inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class Renderer2 {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object
    ) {

    }

    invokeElementMethod(eleRef: ElementRef, method: string):void {
        if (isPlatformBrowser(this.platformId)) {
            eleRef.nativeElement[method]();
        }
    }
}
