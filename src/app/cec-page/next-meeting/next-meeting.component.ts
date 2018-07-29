import { Component, OnInit } from '@angular/core';

const MEETING_START_TIME = 18; // 24 hour time
const MONTH_NAMES: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

@Component({
  selector: 'bc-next-meeting',
  templateUrl: './next-meeting.component.html',
  styleUrls: ['./next-meeting.component.less']
})
export class NextMeetingComponent implements OnInit {
  private readonly default: string = 'the third Wednesday of the month';
  public nextMeeting: string = this.default;


  private getThirdWednesdayOfMonth(date): number {
    const firstDayOfMonth = new Date(date.getTime());
    firstDayOfMonth.setDate(1);

    const firstDayOfWeek = firstDayOfMonth.getDay();
    // The days are 0 based, so we start by adding one to ensure that there are no 0th day of the week.
    // The days of the week start on Sunday, so Wednesday is the day at index 3, though it is the 4th day.
    // We add the seven to ensure that there are no negative numbers... the modulo 7 gets rid of it.
    const firstWednesday = 1 + (3 - firstDayOfWeek + 7) % 7;
    return firstWednesday + 14;
  }

  public ngOnInit(): void {
    const today = new Date();
    let month,
        year = today.getFullYear(),
        day = this.getThirdWednesdayOfMonth(today);

    if (today.getDate() < day || (today.getDate() === day && today.getHours() < MEETING_START_TIME)) {
      month = MONTH_NAMES[today.getMonth()];
    } else {
      let nextMonth = today.getMonth() + 1;
      if (nextMonth < 11) {
        month = MONTH_NAMES[nextMonth];
        today.setMonth(nextMonth);
        day = this.getThirdWednesdayOfMonth(today);
      } else {
        // In case we are after the last meeting in December
        nextMonth = 0;
        month = MONTH_NAMES[nextMonth];
        year = year + 1;
        today.setFullYear(year);
        today.setMonth(nextMonth);
        day = this.getThirdWednesdayOfMonth(today);
      }
    }

    this.nextMeeting = `${month} ${day}, ${year}`;
  }
}
