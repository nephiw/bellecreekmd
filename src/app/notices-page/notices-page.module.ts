import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { NoticesPageRoutingModule } from './notices-page-routing.module';
import { NoticesPageComponent } from './notices-page.component';
import { NoticeService } from './notice.service';
import { NoticeComponent } from './notice/notice.component';
import { NoticePageComponent } from './notice-page/notice-page.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    NoticesPageRoutingModule
  ],
  entryComponents: [
    NoticesPageComponent
  ],
  declarations: [
    NoticesPageComponent,
    NoticeComponent,
    NoticePageComponent
  ],
  exports: [
    NoticesPageComponent
  ],
  providers: [
    NoticeService
  ]
})
export class NoticesPageModule { }
