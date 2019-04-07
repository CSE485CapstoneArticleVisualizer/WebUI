import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisComponent } from './vis/vis.component';

import { AngularMaterialModule } from './shared/angular-material-module';
import { PrimeNGModule } from './shared/primeng-module';
import { FilterComponent } from './filter/filter.component';

// import { GraphComponent } from './visuals/graph/graph.component';
// import { SHARED_VISUALS } from './visuals/shared';
import { D3Service, D3_DIRECTIVES } from './d3';
import { ForceDirectedGraphComponent } from './d3/force-directed-graph/force-directed-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisComponent,
    FilterComponent,
    // GraphComponent,
    // ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    ForceDirectedGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    PrimeNGModule,
    HttpClientModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
