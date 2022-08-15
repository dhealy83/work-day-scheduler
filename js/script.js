$(document).ready(function () {
  //Moment.js code for current date and time
  let dateFormat = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = dateFormat;
  let currentHourContainer = moment().format("HH");


 
  $(".timeDiv").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHourContainer === timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHourContainer < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHourContainer > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });


  $(".saveButton").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".timeBlocks").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    
  });
  
  
});

$("#hour9 .timeBlocks").val(window.localStorage.getItem("9"));
$("#hour10 .timeBlocks").val(window.localStorage.getItem("10"));
