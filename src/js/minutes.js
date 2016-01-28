(function() {
  'use strict';

  function getThirdWednesdayOfMonth(date) {
    var firstDayOfMonth = new Date(date.getTime());
    firstDayOfMonth.setDate(1);

    var firstDayOfWeek = firstDayOfMonth.getDay();
    var firstWednesday = 1 + (3 - firstDayOfWeek + 7) % 7;
    return firstWednesday + 14;
  }

  $(() => {
    const monthNames = [
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
    var dateOfNextMeeting,
        thirdWednesday,
        month,
        today = new Date(),
        year = today.getFullYear(),
        day = getThirdWednesdayOfMonth(today);

    if (today.getDate() < day) {
      month = monthNames[today.getMonth()]
    } else {
      month = monthNames[today.getMonth() + 1]
      today.setMonth(today.getMonth() + 1);
      day = getThirdWednesdayOfMonth(today);
    }

    $('.next-meeting').text(`${month} ${day}, ${year}`);
  })
}());
