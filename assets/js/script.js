// DOM variables

var hoursOfDay = $(".container");

// use moment to display current day and time on header
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
// Find the current hour in 24h format in order to compare for color coding planner
var currentHour = moment().format("H");
console.log(currentHour);

// Run through and check to see if current hour is in the past, present, or future for each timeblock
function checkHour() {
  if (currentHour > 9) {
    console.log("past");
    $("#9am").addClass("past");
  } else if (currentHour >= 9 && currentHour < 10) {
    console.log("still");
    $("#9am").addClass("present");
  } else if (currentHour < 9) {
    console.log("future");
    $("#9am").addClass("future");
  }
  if (currentHour > 10) {
    console.log("past");
    $("#10am").addClass("past");
  } else if (currentHour >= 10 && currentHour < 11) {
    console.log("still");
    $("#10am").addClass("present");
  } else if (currentHour < 10) {
    console.log("future");
    $("#10am").addClass("future");
  }
  if (currentHour > 11) {
    console.log("past");
    $("#11am").addClass("past");
  } else if (currentHour >= 11 && currentHour < 12) {
    console.log("still");
    $("#11am").addClass("present");
  } else if (currentHour < 11) {
    console.log("future");
    $("#11am").addClass("future");
  }
  if (currentHour > 12) {
    console.log("past");
    $("#12pm").addClass("past");
  } else if (currentHour >= 12 && currentHour < 13) {
    console.log("still");
    $("#12pm").addClass("present");
  } else if (currentHour < 12) {
    console.log("future");
    $("#12pm").addClass("future");
  }
  if (currentHour > 13) {
    console.log("past");
    $("#1pm").addClass("past");
  } else if (currentHour >= 13 && currentHour < 14) {
    console.log("still");
    $("#1pm").addClass("present");
  } else if (currentHour < 13) {
    console.log("future");
    $("#1pm").addClass("future");
  }
  if (currentHour > 14) {
    console.log("past");
    $("#2pm").addClass("past");
  } else if (currentHour >= 14 && currentHour < 15) {
    console.log("still");
    $("#2pm").addClass("present");
  } else if (currentHour < 14) {
    console.log("future");
    $("#2pm").addClass("future");
  }
  if (currentHour > 15) {
    console.log("past");
    $("#3pm").addClass("past");
  } else if (currentHour >= 15 && currentHour < 16) {
    console.log("still");
    $("#3pm").addClass("present");
  } else if (currentHour < 15) {
    console.log("future");
    $("#3pm").addClass("future");
  }
  if (currentHour > 16) {
    console.log("past");
    $("#4pm").addClass("past");
  } else if (currentHour >= 16 && currentHour < 17) {
    console.log("still");
    $("#4pm").addClass("present");
  } else if (currentHour < 16) {
    console.log("future");
    $("#4pm").addClass("future");
  }
  if (currentHour > 17) {
    console.log("past");
    $("#5pm").addClass("past");
  } else if (currentHour >= 17 && currentHour < 18) {
    console.log("still");
    $("#5pm").addClass("present");
  } else if (currentHour < 17) {
    console.log("future");
    $("#5pm").addClass("future");
  }
}

checkHour();
