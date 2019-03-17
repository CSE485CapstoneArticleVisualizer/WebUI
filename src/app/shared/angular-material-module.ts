import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule
} from '@angular/material';


@NgModule({
    imports: [
        MatAutocompleteModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule
    ],
    exports: [
        MatAutocompleteModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule
    ]
})
export class AngularMaterialModule { }
