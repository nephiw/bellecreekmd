import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticesPageComponent } from './notices-page.component';
import { NoticePageComponent } from './notice-page/notice-page.component';

const routes: Routes = [
  { path: '', component: NoticesPageComponent },
  { path: ':path', component: NoticePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticesPageRoutingModule { }
