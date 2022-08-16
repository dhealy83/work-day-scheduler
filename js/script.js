$(document).ready(function () {
  //Moment.js code for current date and time
  let dateFormat = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = dateFormat;
  let currentHourContainer = moment().format("HH");


 
  $(".timeDiv").each(function () {
    var timeDiv = $(this).attr("id").split("r")[1];
    
    
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
    var time = $(this).parent().attr("id").split("r")[1];
    localStorage.setItem(time, value);
    
  });
  
  
});

$("#hour9 .timeBlocks").val(window.localStorage.getItem("9"));
$("#hour10 .timeBlocks").val(window.localStorage.getItem("10"));
$("#hour11 .timeBlocks").val(window.localStorage.getItem("11"));
$("#hour12 .timeBlocks").val(window.localStorage.getItem("12"));
$("#hour13 .timeBlocks").val(window.localStorage.getItem("13"));
$("#hour14 .timeBlocks").val(window.localStorage.getItem("14"));
$("#hour15 .timeBlocks").val(window.localStorage.getItem("15"));
$("#hour16 .timeBlocks").val(window.localStorage.getItem("16"));
$("#hour17 .timeBlocks").val(window.localStorage.getItem("17"));
$("#hour18 .timeBlocks").val(window.localStorage.getItem("18"));
