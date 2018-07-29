import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CecPageRoutingModule } from './cec-page-routing.module';
import { CecPageComponent } from './cec-page.component';
import { NextMeetingComponent } from './next-meeting/next-meeting.component';

@NgModule({
  imports: [
    CommonModule,
    CecPageRoutingModule
  ],
  declarations: [
    CecPageComponent,
    NextMeetingComponent
  ],
  entryComponents: [
    CecPageComponent
  ]
})
export class CecPageModule { }
