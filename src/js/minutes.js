(function() {
  'use strict';

  function getThirdWednesdayOfMonth(date) {
    let firstDayOfMonth = new Date(date.getTime());
    firstDayOfMonth.setDate(1);

    const firstDayOfWeek = firstDayOfMonth.getDay(),
          firstWednesday = 1 + (3 - firstDayOfWeek + 7) % 7;
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

    if (today.getMonth() === 8 && today.getFullYear() === 2016) {
      month = MONTH_NAMES[today.getMonth()];
      day = 27;
    } else {
      if (today.getDate() < day || (today.getDate() === day && today.getHours() < MEETING_START_TIME)) {
        month = MONTH_NAMES[today.getMonth()];
      } else {
        month = MONTH_NAMES[today.getMonth() + 1];
        today.setMonth(today.getMonth() + 1);
        day = getThirdWednesdayOfMonth(today);
      }
    }

    $('.next-meeting').text(`${month} ${day}, ${year}`);
  });
}());
