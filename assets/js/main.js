$(document).ready(function () {
  function showTime() {
    // current Date/time
    let date = new Date();

    // variables Date
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // PM or AM
    let session = "AM";

    //   condition for time behavior
    if (hours == 0) {
      hours = 12;
    }
    if (hours >= 12) {
      session = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    //   set the variables
    $("#hours").text(hours);
    $("#min").text(min);
    $("#sec").text(sec);
    $("#period").text(session);

    setTimeout(showTime, 1000);
  }
  showTime();
});
