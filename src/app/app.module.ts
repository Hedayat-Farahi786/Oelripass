import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { BottomNavigatorComponent } from './bottom-navigator/bottom-navigator.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToolDetailsComponent } from './tool-details/tool-details.component';
import { ToolsComponent } from './tools/tools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    BottomNavigatorComponent,
    TopbarComponent,
    ToolDetailsComponent,
    ToolsComponent,
    DashboardComponent,
    CompareComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
