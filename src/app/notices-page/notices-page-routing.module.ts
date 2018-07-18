import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticesPageComponent } from './notices-page.component';

const routes: Routes = [
  { path: '', component: NoticesPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticesPageRoutingModule { }
