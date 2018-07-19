import { Component } from '@angular/core';
import { NoticeService } from './notice.service';
import { Notice } from './notice';

@Component({
  selector: 'bc-notices-page',
  templateUrl: './notices-page.component.html',
  styleUrls: ['./notices-page.component.less']
})
export class NoticesPageComponent {
  public notices: Notice[];

  constructor(private noticeService: NoticeService) {
    this.fetchNotices();
  }

  private async fetchNotices(): Promise<Notice[]> {
    try {
      this.notices = await this.noticeService.getNotices();
      return this.notices;
    } catch(error) {
      return [];
    }
  }
}
