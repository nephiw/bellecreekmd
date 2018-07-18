import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CecPageRoutingModule } from './cec-page-routing.module';
import { CecPageComponent } from './cec-page.component';

@NgModule({
  imports: [
    CommonModule,
    CecPageRoutingModule
  ],
  declarations: [
    CecPageComponent
  ],
  entryComponents: [
    CecPageComponent
  ]
})
export class CecPageModule { }
