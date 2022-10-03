// IVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
const DateTime = luxon.DateTime;
const now = DateTime.now();
const date = now.toLocaleString(DateTime.DATETIME_MED)
workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(date)
console.log(now.hour)

const displayDate = $('<div>')
displayDate.text(date)
$("#currentDay").append(displayDate)




//create row div
function createTimeBlock() {
    const timeBlock = $('<div>')
    timeBlock.attr('class', 'row')
    timeBlock.attr('id', 'parent')
    $(".container").append(timeBlock)
}


//create hour div
function createHour(i) {
    const hour = $('<div>')
    hour.text(i + "00 hours")
    hour.attr('class', 'col-2 hour')
    $("#parent").append(hour)
}

//create input text div
function createTextArea() {
    const textArea = $('<textarea>')
    textArea.attr('class', 'col-8')
    textArea.attr('placeholder', "task")
    $("#parent").append(textArea)
}

//create save button
function createSaveBtn() {
    const saveBtn = $('<button>')
    saveBtn.text('save')
    saveBtn.attr('class', 'col-2 saveBtn')
    $("#parent").append(saveBtn)
}


function displayTimeBlocks() {

    for (let i = 9; i <= 17; i++) {
        createTimeBlock();
        createHour(i);
        createTextArea();
        createSaveBtn();

}}

displayTimeBlocks()









