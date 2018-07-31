import { Component } from '@angular/core';
import { MinutesService } from './minutes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-cec-page',
  templateUrl: './cec-page.component.html',
  styleUrls: ['./cec-page.component.less']
})
export class CecPageComponent {

  public months: any[];
  public years: string[];
  public year: string;

  // TODO: Move AngularFire logic to a service
  // TODO: Sort values that are returned by date
  // TODO: Group by year.
  constructor(
    private minutesService: MinutesService,
    private router: Router
  ) {
    const getYearsSubscription = this.minutesService.getYears().subscribe((years) => {
      this.years = years;

      if (getYearsSubscription) {
        getYearsSubscription.unsubscribe();
      }
      const getMinutesSubscription = this.minutesService.getMinutesByYear(this.years[this.years.length - 1]).subscribe((months: any[]) => {
        this.months = months;

        if (getMinutesSubscription) {
          getMinutesSubscription.unsubscribe();
        }
      });
    });
  }

  public onYearChange(year: string): void {
    if (this.year !== year) {
      this.year = year;
      const getMinutesSubscription = this.minutesService.getMinutesByYear(year).subscribe((months: any[]) => {
        this.months = months;
        if (months[0]) {
          this.router.navigate(['cec', 'minutes', this.months[0].filename]);
        }

        if (getMinutesSubscription) {
          getMinutesSubscription.unsubscribe();
        }
      });
    }
  }

  public onMonthChanged(date: string): void {
    this.router.navigate(['cec', 'minutes', date]);
  }

}
