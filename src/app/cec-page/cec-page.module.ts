import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import * as moment from 'moment';

import { CecPageRoutingModule } from './cec-page-routing.module';
import { CecPageComponent } from './cec-page.component';
import { NextMeetingComponent } from './next-meeting';
import { MinutesCalendarComponent } from './minutes-calendar';
import { MinutesPageComponent } from './minutes-page';
import { MinutesService } from './minutes.service';
import { MomentPipe } from './moment';
import { MinutesYearSelectorComponent } from './minutes-year-selector/minutes-year-selector.component';

@NgModule({
  imports: [
    CommonModule,
    CecPageRoutingModule,
    MarkdownModule.forChild()
  ],
  declarations: [
    CecPageComponent,
    NextMeetingComponent,
    MinutesCalendarComponent,
    MinutesPageComponent,
    MomentPipe,
    MinutesYearSelectorComponent
  ],
  entryComponents: [
    CecPageComponent
  ],
  providers: [
    MinutesService,
    { provide: 'moment', useValue: moment },
  ]
})
export class CecPageModule { }
