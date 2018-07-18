import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticesPageRoutingModule } from './notices-page-routing.module';
import { NoticesPageComponent } from './notices-page.component';

@NgModule({
  imports: [
    CommonModule,
    NoticesPageRoutingModule
  ],
  entryComponents: [
    NoticesPageComponent
  ],
  declarations: [
    NoticesPageComponent
  ],
  exports: [NoticesPageComponent]
})
export class NoticesPageModule { }
