(function() {
  'use strict';

  function getThirdWednesdayOfMonth(date) {
    let firstDayOfMonth = new Date(date.getTime());
    firstDayOfMonth.setDate(1);

    const firstDayOfWeek = firstDayOfMonth.getDay();
    // The days are 0 based, so we start by adding one to ensure that there are no 0th day of the week.
    // The days of the week start on Sunday, so Wednesday is the day at index 3, though it is the 4th day.
    // We add the seven to ensure that there are no negative numbers... the modulo 7 gets rid of it.
    const firstWednesday = 1 + (3 - firstDayOfWeek + 7) % 7;
    return firstWednesday + 14;
  }

  $(() => {
    const MEETING_START_TIME = 18, // 24 hour time
          MONTH_NAMES = [
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

    let month,
        today = new Date(),
        year = today.getFullYear(),
        day = getThirdWednesdayOfMonth(today);

    if (today.getDate() < day || (today.getDate() === day && today.getHours() < MEETING_START_TIME)) {
      month = MONTH_NAMES[today.getMonth()];
    } else {
      let nextMonth = today.getMonth() + 1;
      if (nextMonth < 11) {
        month = MONTH_NAMES[nextMonth];
        today.setMonth(nextMonth);
        day = getThirdWednesdayOfMonth(today);
      } else {
        // In case we are after the last meeting in December
        nextMonth = 0;
        month = MONTH_NAMES[nextMonth];
        year = year + 1;
        today.setFullYear(year);
        today.setMonth(nextMonth);
        day = getThirdWednesdayOfMonth(today);
      }
    }

    if (month === 'June' && year === 2017) {
      // date changed due to summer vacations
      day = 14;
    }
    $('.next-meeting').text(`${month} ${day}, ${year}`);
  });
}());
