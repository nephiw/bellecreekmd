import { Component, OnInit, Input } from '@angular/core';
import { Notice } from '../notice';

@Component({
  selector: 'bc-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.less']
})
export class NoticeComponent implements OnInit {
  @Input() public notice: Notice;

  constructor() { }

  ngOnInit() {
  }

}
