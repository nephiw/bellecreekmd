import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CECMinute {
  filename: string;
  date: Date;
}

const minutes = [
  { date: '2015-01-21', filename: '2015-01-21' },
  { date: '2015-02-18', filename: '2015-02-18' },
  { date: '2015-03-18', filename: '2015-03-18' },
  { date: '2015-04-15', filename: '2015-04-15' },
  { date: '2015-06-24', filename: '2015-06-24' },
  { date: '2015-07-15', filename: '2015-07-15' },
  { date: '2015-08-19', filename: '2015-08-19' },
  { date: '2015-09-16', filename: '2015-09-16' },
  { date: '2015-10-21', filename: '2015-10-21' },
  { date: '2015-11-18', filename: '2015-11-18' },
  { date: '2015-12-16', filename: '2015-12-16' },
  { date: '2016-01-20', filename: '2016-01-20' },
  { date: '2016-02-17', filename: '2016-02-17' },
  { date: '2016-03-16', filename: '2016-03-16' },
  { date: '2016-04-20', filename: '2016-04-20' },
  { date: '2016-05-18', filename: '2016-05-18' },
  { date: '2016-06-15', filename: '2016-06-15' },
  { date: '2016-07-20', filename: '2016-07-20' },
  { date: '2016-08-17', filename: '2016-08-17' },
  { date: '2016-09-27', filename: '2016-09-27' },
  { date: '2016-10-19', filename: '2016-10-19' },
  { date: '2016-11-16', filename: '2016-11-16' },
  { date: '2016-12-21', filename: '2016-12-21' },
  { date: '2017-01-18', filename: '2017-01-18' },
  { date: '2017-02-15', filename: '2017-02-15' },
  { date: '2017-03-15', filename: '2017-03-15' },
  { date: '2017-04-19', filename: '2017-04-19' },
  { date: '2017-05-17', filename: '2017-05-17' },
  { date: '2017-06-14', filename: '2017-06-14' },
  { date: '2017-07-19', filename: '2017-07-19' },
  { date: '2017-08-16', filename: '2017-08-16' },
  { date: '2017-09-20', filename: '2017-09-20' },
  { date: '2017-10-18', filename: '2017-10-18' },
  { date: '2017-11-15', filename: '2017-11-15' },
  { date: '2017-12-21', filename: '2017-12-21' }
];

@Injectable()
export class MinutesService {
  // TODO: Sort values that are returned by date
  // TODO: Group by year.
  // constructor(private afs: AngularFirestore) {}

  // public getMinutesByYear(year: string): Observable<CECMinute[]> {
  //   const minuteCollection = this.afs.collection<CECMinute>('cec-minutes', ref => {
  //     return ref.orderBy('date');
  //   });

  //   return minuteCollection.valueChanges().map(minutes => {
  //     return minutes.map((minute) => Object.assign({ met: true }, minute));
  //   });
  // }

  // TODO: stop lazy loading each time - once the minutes are fetched, we should just work on the information recieved.
  public getMinutesByYear(year: string): CECMinute[] {
    const minutesInYear: CECMinute[] = minutes.filter((meetingMinute) => {
      return meetingMinute.date.includes(year);
    }).map((meetingMinute) => {
      return {
        met: true,
        filename: meetingMinute.filename,
        date: new Date(meetingMinute.date)
      };
    });

    return minutesInYear;
  }

  public getYears(): string[] {
    const yearSet = {};
    minutes.forEach((minute) => {
      const year = minute.filename.slice(0, 4);
      yearSet[year] = true;
    });

    return Object.keys(yearSet);
  }
}
