import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bc-minutes-calendar',
  templateUrl: './minutes-calendar.component.html',
  styleUrls: ['./minutes-calendar.component.less']
})
export class MinutesCalendarComponent implements OnChanges {
  @Input() public months: any[];
  @Output() public monthChanged: EventEmitter<string> = new EventEmitter();

  public selectedMonth: any;

  public onMonthSelected(month) {
    this.selectedMonth = month;
    this.monthChanged.emit(month.filename);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.months) {
      this.selectedMonth = changes.months[0];
    }
  }
}
