
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
    
    console.log(i)
    console.log(currentHour)
    const textArea = $('<textarea>')
    textArea.attr('class', 'col-8 textArea')
    textArea.attr('placeholder', "task")
    $("#parent").append(textArea)

    if( i < currentHour){
        textArea.attr('class', 'col-8 textArea past')
    }
    else if (i = currentHour){
        textArea.attr('class', 'col-8 textArea present')
    }
    else if (i > currentHour){
        textArea.attr('class', 'col-8 textArea future')
    }
  
}
//create save button
function createSaveBtn() {
    const saveBtn = $('<button>')
    saveBtn.text('save')
    saveBtn.attr('class', 'col-2 saveBtn')
    $("#parent").append(saveBtn)
}
//i = start of day 
function displayTimeBlocks(i) {


    for (let i = 0; i <= 24; i++) {
        createTimeBlock(i);
        createHour(i);
        createTextArea(i);
        createSaveBtn(i);

    }
}
displayTimeBlocks()



console.log(currentHour)



function submitTask(event){
event.preventDefault()
var task = input.value
}

// $('.saveBtn').click(
//     function save(textArea) {
//         localStorage.setItem('textArea', JSON.stringify())
//     })




