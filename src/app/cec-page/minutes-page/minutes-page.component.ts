import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bc-minutes-page',
  templateUrl: './minutes-page.component.html',
  styleUrls: ['./minutes-page.component.less']
})
export class MinutesPageComponent {
  public date: string;
  public path: string;

  constructor(
    private route: ActivatedRoute,
    @Inject('moment') private moment: any
  ) {
    route.paramMap.subscribe((param: any) => {
      const dateString = param.get('date');
      this.date = this.moment(dateString, 'YYYY-MM-DD').format('ddd, MMM D YYYY');
      this.path = `assets/minutes/${ dateString }.md`;
    });
  }

  public onError(err: any): void {
    console.log(err);
  }
}
