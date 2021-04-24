
//set time and date in header
$("#currentDay").append(moment().format("LLLL"))

let currentTime = moment().hour(); 


var saveEntry = "";

$(".time-block").each(function() {
    let timeEntry = $(this).find(".hour").attr("id");
    let timeDesc = localStorage.getItem(timeEntry);
    $(this).find(".description").val(timeDesc);

    var refTime = $(this).find(".description").attr("data-hour");

    if (refTime > currentTime) {
        $(this).find(".description").addClass("future");
    } else if (refTime == currentTime) {
        $(this).find(".description").addClass("present")
    } else if (refTime < currentTime) {
        $(this).find(".description").addClass("past");
    };
});

//save ebtry to local storage
$(".saveBtn").on("click", function() {

    saveEntry = $(this)
        .siblings(".description")
        .val();

    var timeEntry = $(this)
        .siblings(".hour")
        .attr("id")

    localStorage.setItem(timeEntry, saveEntry)
})