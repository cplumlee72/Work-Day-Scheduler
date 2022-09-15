function timeHandler() {
  setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, HH:mm:ss a"));
  }, 1000);
}


timeHandler();

var currentHour = moment().format("HH");
console.log(currentHour);

var timeTag = $(".hour");

$.each(timeTag, function () {
  var hourId = $(this).attr("id");
  if (hourId === currentHour) {
    $(this).next().addClass("present");
  } else if (hourId < currentHour) {
    $(this).next().addClass("past");
  } else if (hourId > currentHour) {
    $(this).next().addClass("future");
  }
});

function saveEvent(event) {
    var scheduleItem = event.target.parentElement.previousElementSibling.children[0].value
    var idName = event.target.attributes.id.value
    console.log(event.target.attributes.id.value)
    localStorage.setItem(idName, scheduleItem)
}

$(document).ready(function () {
  if (localStorage["9btn"] !== null && localStorage["9btn"] !== undefined) {
    $("#9am-text").val(localStorage["9btn"])    
  }
  if (localStorage["10btn"] !== null && localStorage["10btn"] !== undefined) {
    $("#10am-text").val(localStorage["10btn"])    
  }
  if (localStorage["11btn"] !== null && localStorage["11btn"] !== undefined) {
    $("#11am-text").val(localStorage["11btn"])    
  }
  if (localStorage["12btn"] !== null && localStorage["12btn"] !== undefined) {
    $("#12am-text").val(localStorage["12btn"])    
  }
  if (localStorage["1btn"] !== null && localStorage["1btn"] !== undefined) {
    $("#1pm-text").val(localStorage["1btn"])    
  }
  if (localStorage["2btn"] !== null && localStorage["2btn"] !== undefined) {
    $("#2pm-text").val(localStorage["2btn"])    
  }
  if (localStorage["3btn"] !== null && localStorage["3btn"] !== undefined) {
    $("#3pm-text").val(localStorage["3btn"])    
  }
  if (localStorage["4btn"] !== null && localStorage["4btn"] !== undefined) {
    $("#4pm-text").val(localStorage["4btn"])    
  }
  if (localStorage["5btn"] !== null && localStorage["5btn"] !== undefined) {
    $("#5pm-text").val(localStorage["5btn"])    
  }

})

$(".saveBtn").on("click", saveEvent)
