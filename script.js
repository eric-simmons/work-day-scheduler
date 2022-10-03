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
console.log(date)

const displayDate = $('<div>')
displayDate.text(date)
$("#currentDay").append(displayDate)


//create row div
const timeBlockParent = $('<div>')
timeBlockParent.attr('class', 'row')
timeBlockParent.attr('id', 'parent')
$(".container").append(timeBlockParent)

//create hour div
const hour = $('<div>')
hour.text('appendenge')
hour.attr('class', 'col-2 hour')
$("#parent").append(hour)

//create input text div
const textArea = $('<textarea>')
textArea.attr('class', 'col-8')
textArea.attr('placeholder', "task")
$("#parent").append(textArea)

//create save button
const btn = $('<button>')
btn.text('save')
btn.attr('class', 'col-2 saveBtn')
$("#parent").append(btn)



// {/* <div class="row">
// <div class="col-2 hour">8:00 AM</div>
// <textarea id="8" class="col-8" placeholder="Task"></textarea>
// <button class="col-2 saveBtn" onclick="saveText(8)">Save</button>
// </div>   */}


// function createTimeRow(){
//     const timeBlock =
// }











