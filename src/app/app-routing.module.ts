import { ToolDetailsComponent } from './tool-details/tool-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';
import { ToolsComponent } from './tools/tools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'scan' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tools', component: ToolsComponent},
  { path: 'tool/:id', component: ToolDetailsComponent },
  { path: 'scan', component: ScannerComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: 'dashboard' } // Handle all other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
