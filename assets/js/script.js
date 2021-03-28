// DOM variables using jQuery
var saveBtn = $("button");
var hoursOfDay = $(".container");
var contentText1 = $("#9am");
var contentText2 = $("#10am");
var contentText3 = $("#11am");
var contentText4 = $("#12pm");
var contentText5 = $("#1pm");
var contentText6 = $("#2pm");
var contentText7 = $("#3pm");
var contentText8 = $("#4pm");
var contentText9 = $("#5pm");

// use moment to display current day and time on header
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
// Find the current hour in 24h format in order to compare for color coding planner
var currentHour = moment().format("H");


// Check local storage for saved content
var content1 = localStorage.getItem("content1");
contentText1.text(content1);
var content2 = localStorage.getItem("content2");
contentText2.text(content2);
var content3 = localStorage.getItem("content3");
contentText3.text(content3);
var content4 = localStorage.getItem("content4");
contentText4.text(content4);
var content5 = localStorage.getItem("content5");
contentText5.text(content5);
var content6 = localStorage.getItem("content6");
contentText6.text(content6);
var content7 = localStorage.getItem("content7");
contentText7.text(content7);
var content8 = localStorage.getItem("content8");
contentText8.text(content8);
var content9 = localStorage.getItem("content9");
contentText9.text(content9);

// Run through and check to see if current hour is in the past, present, or future for each timeblock
function checkHour() {
  if (currentHour > 9) {
    $("#9am").addClass("past");
  } else if (currentHour >= 9 && currentHour < 10) {
    $("#9am").addClass("present");
  } else if (currentHour < 9) {
    $("#9am").addClass("future");
  }
  if (currentHour > 10) {
    $("#10am").addClass("past");
  } else if (currentHour >= 10 && currentHour < 11) {
    $("#10am").addClass("present");
  } else if (currentHour < 10) {
    $("#10am").addClass("future");
  }
  if (currentHour > 11) {
    $("#11am").addClass("past");
  } else if (currentHour >= 11 && currentHour < 12) {
    $("#11am").addClass("present");
  } else if (currentHour < 11) {
    $("#11am").addClass("future");
  }
  if (currentHour > 12) {
    $("#12pm").addClass("past");
  } else if (currentHour >= 12 && currentHour < 13) {
    $("#12pm").addClass("present");
  } else if (currentHour < 12) {
    $("#12pm").addClass("future");
  }
  if (currentHour > 13) {
    $("#1pm").addClass("past");
  } else if (currentHour >= 13 && currentHour < 14) {
    $("#1pm").addClass("present");
  } else if (currentHour < 13) {
    $("#1pm").addClass("future");
  }
  if (currentHour > 14) {
    $("#2pm").addClass("past");
  } else if (currentHour >= 14 && currentHour < 15) {
    $("#2pm").addClass("present");
  } else if (currentHour < 14) {
    $("#2pm").addClass("future");
  }
  if (currentHour > 15) {
    $("#3pm").addClass("past");
  } else if (currentHour >= 15 && currentHour < 16) {
    $("#3pm").addClass("present");
  } else if (currentHour < 15) {
    $("#3pm").addClass("future");
  }
  if (currentHour > 16) {
    $("#4pm").addClass("past");
  } else if (currentHour >= 16 && currentHour < 17) {
    $("#4pm").addClass("present");
  } else if (currentHour < 16) {
    $("#4pm").addClass("future");
  }
  if (currentHour > 17) {
    $("#5pm").addClass("past");
  } else if (currentHour >= 17 && currentHour < 18) {
    $("#5pm").addClass("present");
  } else if (currentHour < 17) {
    $("#5pm").addClass("future");
  }
}

// Created a function for each hour to store saved content
function nineAm() {
  saveBtn.on("click", function () {
    localStorage.setItem("content1", contentText1.val().trim());
  });
}

function tenAm() {
    saveBtn.on("click", function () {
      localStorage.setItem("content2", contentText2.val().trim());
    });
}

function elevenAm() {
  saveBtn.on("click", function () {
    localStorage.setItem("content3", contentText3.val().trim());
  });
}
function noon() {
    saveBtn.on("click", function () {
      localStorage.setItem("content4", contentText4.val().trim());
    });
}
function onePm() {
  saveBtn.on("click", function () {
    localStorage.setItem("content5", contentText5.val().trim());
  });
} 
function twoPm() {
    saveBtn.on("click", function () {
      localStorage.setItem("content6", contentText6.val().trim());
    });
}
function threePm() {
    saveBtn.on("click", function () {
      localStorage.setItem("content7", contentText7.val().trim());
    });
}
function fourPm() {
    saveBtn.on("click", function () {
      localStorage.setItem("content8", contentText8.val().trim());
    });
}
function fivePm() {
    saveBtn.on("click", function () {
      localStorage.setItem("content9", contentText9.val().trim());
    });
} 

// On loading of the page run all the functions 
window.onload = function(){
checkHour();
nineAm();
tenAm();
elevenAm();
noon();
onePm();
twoPm();
threePm();
fourPm();
fivePm();
}
