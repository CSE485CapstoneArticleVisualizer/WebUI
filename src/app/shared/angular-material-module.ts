import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
    imports: [
        MatAutocompleteModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatAutocompleteModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule,
        MatProgressSpinnerModule
    ]
})
export class AngularMaterialModule { }
