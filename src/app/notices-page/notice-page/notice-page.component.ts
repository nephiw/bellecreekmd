import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';
import { ActivatedRoute } from '@angular/router';
import { Notice } from '../notice';

@Component({
  selector: 'bc-notice-page',
  templateUrl: './notice-page.component.html',
  styleUrls: ['./notice-page.component.less']
})
export class NoticePageComponent implements OnInit {
  public filePath: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noticeService: NoticeService
  ) { }

  ngOnInit() {
    const { path } = this.activatedRoute.snapshot.params;
    this.noticeService.getNoticeByPath(path).then((notice: Notice) => {
      this.filePath = notice.file;
    });
  }
}
