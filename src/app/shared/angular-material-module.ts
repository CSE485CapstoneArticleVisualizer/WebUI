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
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule
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
        MatCardModule,
        MatTabsModule,
        MatListModule,
        MatBadgeModule
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
        MatCardModule,
        MatTabsModule,
        MatListModule,
        MatBadgeModule
    ]
})
export class AngularMaterialModule { }
