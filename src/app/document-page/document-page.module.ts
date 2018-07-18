import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentPageRoutingModule } from './document-page-routing.module';
import { DocumentPageComponent } from './document-page.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentPageRoutingModule
  ],
  declarations: [
    DocumentPageComponent
  ],
  entryComponents: [
    DocumentPageComponent
  ]
})
export class DocumentPageModule { }
