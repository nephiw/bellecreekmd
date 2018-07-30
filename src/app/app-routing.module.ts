import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact',  loadChildren: './contact-page/contact-page.module#ContactPageModule' },
  { path: 'contact.html', redirectTo: 'contact' },
  { path: 'document', loadChildren: './document-page/document-page.module#DocumentPageModule' },
  { path: 'document.html', redirectTo: 'document' },
  { path: 'cec',      loadChildren: './cec-page/cec-page.module#CecPageModule' },
  { path: 'cec.html', redirectTo: 'cec' },
  { path: 'notices',   loadChildren: './notices-page/notices-page.module#NoticesPageModule' },
  { path: 'notices.html', redirectTo: 'notice' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
