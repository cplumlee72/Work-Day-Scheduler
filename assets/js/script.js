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
    console.log(event.target.attributes)
    // localStorage.setItem("scheduleItem", scheduleItem)
}



$(".saveBtn").on("click", saveEvent)
