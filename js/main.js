// grab the container for the time to be plugged into
const timeContainer = document.getElementById("time");
// grab the container for the day & time
const dayContainer = document.getElementById("day");
const fullDateContainer = document.getElementById("date");
// get time & date and display them in the top bar of the ePod
function updateTime() {
  // declare variables for am/pm & the symbols that go with them
  var timeIndicator, timeIndicatorSymbol;
  // declare date & the time/date methods to go along with them
  var today = new Date();
  var todayDayName = today.getDay();
  var todayMonth = today.getMonth();
  var todayDay = today.getDate();
  var todayYear = today.getFullYear();
  var todayHour = today.getHours();
  var todayMins = today.getMinutes();
  // switch days from 0 index to traditonal monday-sunday format
  switch (todayDayName) {
    case 0:
      todayDayName = "Sunday";
      break;
    case 1:
      todayDayName = "Monday";
      break;
    case 2:
      todayDayName = "Tuesday";
      break;
    case 3:
      todayDayName = "Wednesday";
      break;
    case 4:
      todayDayName = "Thursday";
      break;
    case 5:
      todayDayName = "Friday";
      break;
    case 6:
      todayDayName = "Saturday";
      break;
    default:
      todayDayName = "Error";
  }
  // switch months from 0 index to traditional 1-12 month format
  switch (todayMonth) {
    case 0:
      todayMonth = "January";
      break;
    case 1:
      todayMonth = "February";
      break;
    case 2:
      todayMonth = "March";
      break;
    case 3:
      todayMonth = "April";
      break;
    case 4:
      todayMonth = "May";
      break;
    case 5:
      todayMonth = "June";
      break;
    case 6:
      todayMonth = "July";
      break;
    case 7:
      todayMonth = "August";
      break;
    case 8:
      todayMonth = "September";
      break;
    case 9:
      todayMonth = "October";
      break;
    case 10:
      todayMonth = "November";
      break;
    case 11:
      todayMonth = "December";
      break;
    default:
      todayMonth = "Error";
  }
  // am/pm  indicator
  if (todayHour <= 10) {
    timeIndicator = "AM";
  } else {
    timeIndicator = "PM";
  }
  // day or night time indicator symbol
  if (todayHour >= 18) {
    timeIndicatorSymbol = "&#9789;";
  } else {
    timeIndicatorSymbol = "&#9728;";
  }
  // convert hours from military time into US standard time
  switch (todayHour) {
    case 0:
      todayHour = "12";
      break;
    case 1:
      todayHour = "01";
      break;
    case 2:
      todayHour = "02";
      break;
    case 3:
      todayHour = "03";
      break;
    case 4:
      todayHour = "04";
      break;
    case 5:
      todayHour = "05";
      break;
    case 6:
      todayHour = "06";
      break;
    case 7:
      todayHour = "07";
      break;
    case 8:
      todayHour = "08";
      break;
    case 9:
      todayHour = "09";
      break;
    case 10:
      todayHour = "10";
      break;
    case 11:
      todayHour = "11";
      break;
    case 12:
      todayHour = "12";
      break;
    case 13:
      todayHour = "01";
      break;
    case 14:
      todayHour = "02";
      break;
    case 15:
      todayHour = "03";
      break;
    case 16:
      todayHour = "04";
      break;
    case 17:
      todayHour = "05";
      break;
    case 18:
      todayHour = "06";
      break;
    case 19:
      todayHour = "07";
      break;
    case 20:
      todayHour = "08";
      break;
    case 21:
      todayHour = "09";
      break;
    case 22:
      todayHour = "10";
      break;
    case 23:
      todayHour = "11";
      break;
    default:
      todayHour = "404";
  }
  // force minutes to always display as double
  if (todayMins < 10) {
    todayMins = "0" + todayMins;
  } else {
    todayMins = todayMins;
  }
  // plug the time into the inner HTML of the container
  timeContainer.innerHTML =
    todayHour + ":" + todayMins + timeIndicator + " " + timeIndicatorSymbol;
  // plug the date into the inner HTML of the container
  dayContainer.innerHTML = todayDayName;
  fullDateContainer.innerHTML = todayMonth + " " + todayDay + ", " + todayYear;
}
// update time continuously
setInterval(updateTime);
