import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { BottomNavigatorComponent } from './bottom-navigator/bottom-navigator.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    BottomNavigatorComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
