import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'bc-minutes-year-selector',
  templateUrl: './minutes-year-selector.component.html',
  styleUrls: ['./minutes-year-selector.component.less']
})
export class MinutesYearSelectorComponent implements OnChanges {
  @Output() public yearChanged: EventEmitter<string> = new EventEmitter();
  @Input() public years: string[];

  public selectedYear: string;

  public onYearChange(year: string): void {
    this.selectedYear = year;
    this.yearChanged.emit(this.selectedYear);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.months) {
      this.selectedYear = this.years[0];
    }
  }
}
