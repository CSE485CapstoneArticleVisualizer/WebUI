import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisComponent } from './vis/vis.component';

import { AngularMaterialModule } from './shared/angular-material-module';
import { PrimeNGModule } from './shared/primeng-module';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
