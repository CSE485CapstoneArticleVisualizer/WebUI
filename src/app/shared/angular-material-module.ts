import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatCardModule
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
        MatProgressSpinnerModule,
        MatCardModule
    ],
    exports: [
        MatAutocompleteModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatCardModule
    ]
})
export class AngularMaterialModule { }
