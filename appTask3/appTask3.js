//  Create global scope variables for local storage use
let tKey = 'taskValues';
let tItems = [];

//  Create the "main" function
function pageLoad() {

     //  Check the storage array for any stored data
     if(localStorage.getItem(tKey) !== null) {

          //  Load in the string using the key
          let tString = localStorage.getItem(tKey);

          //  Parses string items into an array
          tItems = JSON.parse(tString);

          // Adds the array to the DOM storage array
          $(tItems).each(function() {
               addToDOM(this);
          });
     }// end if statement

     //  Create action listener for delete button
     $('#buttonDeleteAll').on('click', function() {
          //  Call the deleteAllTasks function
          deleteAllTasks();
     });// end buttonDeleteAll

     //  Create a click listener to add the task to the DOM and local storage
     $('#buttonAddTask').on('click', function()  {
          //  Assign task descriptions to a variable
          let taskDescription = $('#taskDescription').val();

          //  Call the function to add the item to the DOM
          addToDOM(taskDescription);

          //  Add the task to the array
          tItems.push(taskDescription);

          //  Call the savetasks fucntion to save the array to local storage
          saveTasks();
     });// end buttonAddTask
}// end pageLoad

//  Create a function to add a task to the DOM
function addToDOM(value) {
     //  Create an li for taskDescription
     $newTask = $('<li></li>').text(value);

     //  Create and append a delete button to the li
     $deleteTaskButton = $('<button></button').text('DELETE');
     $newTask.append($deleteTaskButton);

     //  Create a listner to delete the task from the DOM and the array
     $deleteTaskButton.on('click', function() {
          removeTask($(this).closest('li'));
     });

     //  Append the task to the DOM
     $('#taskList').append($newTask);
}//  end addToDOM

//  Create a function to remove a task from the local storage and the DOM
function removeTask(task) {
     //  Create variables to find the current item in the storage array
     let taskText = $(task).text();
     //  slice functions removes selected values
     let taskTextFiltered = taskText.slice(0, -9);
     // index is created at the point of the task item selected
     let index = tItems.indexOf(taskTextFiltered);

     //  Remove task from array at point INDEX so long as it is actually there
     if(index != -1) {
          tItems.splice(index, 1);

          //  Save the "new" array
          saveTasks();
     }// end if statement

     //  Remove the task from the addItemToDOM
     $(task).remove();
}//  end function removeTask

//  Create the deleteAllTasks function
function deleteAllTasks() {
     //  Empty the DOM of taks
     $('#taskList').empty();

     //  Clear the storage array of tasks
     tItems = [];

     //  Save the empty storage array
     saveTasks();
}//  End function deleteAllTasks

//  Create a function to store the task array to local storage
function saveTasks() {
     //  Create a variable to store the array of taskItems
     let taskString = JSON.stringify(tItems);

     //  Add the item to the storage array
     localStorage.setItem(tKey, taskString);
}//  End function saveTasks

//  Call the pageLoad function once the page is loaded
$(function() {
     pageLoad();
});
