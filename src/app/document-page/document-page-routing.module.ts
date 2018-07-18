import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentPageComponent } from './document-page.component';

const routes: Routes = [
  { path: '', component: DocumentPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentPageRoutingModule { }
