import { NgModule } from '@angular/core';
import { DropdownModule, SliderModule } from 'primeng/primeng';


@NgModule({
    imports: [
        DropdownModule,
        SliderModule
    ],
    exports: [
        DropdownModule,
        SliderModule
    ]
})
export class PrimeNGModule { }
