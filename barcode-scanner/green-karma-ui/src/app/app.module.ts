import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { RecycleComponent } from './recycle/recycle.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerComponent,
    AboutComponent,
    SearchComponent,
    RecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarecodeScannerLivestreamModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
