import { Component, OnInit } from '@angular/core';
import { MinutesService } from './minutes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-cec-page',
  templateUrl: './cec-page.component.html',
  styleUrls: ['./cec-page.component.less']
})
export class CecPageComponent implements OnInit {
  public months: any[];
  public years: string[];
  public year: string;

  // TODO: Move AngularFire logic to a service
  // TODO: Sort values that are returned by date
  // TODO: Group by year.
  constructor(
    private minutesService: MinutesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.years = this.minutesService.getYears();
    this.months = this.minutesService.getMinutesByYear(this.years[this.years.length - 1]);
  }

  public onYearChanged(year: string): void {
    if (this.year !== year) {
      this.year = year;
      this.months = this.minutesService.getMinutesByYear(year);
      if (this.months[0]) {
        this.onMonthChanged(this.months[0].filename);
      }
    }
  }

  public onMonthChanged(date: string): void {
    this.router.navigate(['cec', 'minutes', date]);
  }

}
