
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
const DateTime = luxon.DateTime;
const now = DateTime.now();
const date = now.toLocaleString(DateTime.DATETIME_MED)
const currentHour = now.hour
const displayDate = $('<div>')


displayDate.text(date)
$("#currentDay").append(displayDate)




//create row div
function createTimeBlock(i) {
    // console.log('row timeBlock' + i)
    const timeBlock = $('<div>')
    timeBlock.attr('class', 'row timeBlock' + i)
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
function createTextArea(i) {
    const textArea = $('<textarea>')
    textArea.attr('class', 'col-8 textArea')
    textArea.attr('id', 'task' + i)
    textArea.attr('placeholder', "task")
    $("#parent").append(textArea)
    if (i < currentHour) {
        textArea.attr('class', 'col-8 textArea past')
    }
    else if (i === currentHour) {
        textArea.attr('class', 'col-8 textArea present')
    }
    else if (i > currentHour) {
        textArea.attr('class', 'col-8 textArea future')
    }

}
//create save button
function createSaveBtn(i) {
    const saveBtn = $('<button>')
    saveBtn.text('save')
    saveBtn.attr('class', 'col-2 saveBtn')
    saveBtn.attr('id', 'save' + i)
    $("#parent").append(saveBtn)
}
//i = start of day 
function displayTimeBlocks(i) {


    for (let i = 9; i <= 17; i++) {
        createTimeBlock(i);
        createHour(i);
        createTextArea(i);
        createSaveBtn(i);

    }
}
displayTimeBlocks()

// localStorage.clear()

console.log(currentHour)



// local storage
for (let i = 9; i <= 17; i++) {
   
    $('#save'+ i).click(function () {
    
        var task = document.getElementById('task' + i)
    
        console.log('clicked')
        localStorage.setItem('textArea'+ i, task.value)
    })}


var savedTask = localStorage.getItem('textArea' + i)
task9.textContent = savedTask



