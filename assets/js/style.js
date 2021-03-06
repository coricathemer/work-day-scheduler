// display current date at top of scheduler
// this is working
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('MM-DD-YYYY');
console.log(NowMoment);

// color code timeblocks for past, present, and future
// this is working
const rows = document.getElementsByClassName("col-md-10 description");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
 
// get item from local storage 



// onclick, my event is saved in local storage
$(".saveBtn").on("click", function() {
  var input = $(this)
  .siblings(".description")
  .val();
  var time = $(this)
  .siblings(".description")
  .attr("id");

  localStorage.setItem(time, input);
});

$("9textarea").val(localStorage.getItem("9textarea"));
$("10textarea").val(localStorage.getItem("10textarea"));
$("11textarea").val(localStorage.getItem("11textarea"));
$("12textarea").val(localStorage.getItem("12textarea"));
$("13textarea").val(localStorage.getItem("13textarea"));
$("14textarea").val(localStorage.getItem("14textarea"));
$("15textarea").val(localStorage.getItem("15textarea"));
$("16textarea").val(localStorage.getItem("16textarea"));
$("17textarea").val(localStorage.getItem("17textarea"));
