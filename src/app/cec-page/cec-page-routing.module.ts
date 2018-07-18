import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CecPageComponent } from './cec-page.component';

const routes: Routes = [
  { path: '', component: CecPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CecPageRoutingModule { }
