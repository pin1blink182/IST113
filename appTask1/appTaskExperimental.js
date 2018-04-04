var rIndex;
var table = document.getElementById("table");
// check the empty input
function checkEmptyInput(){
     var isEmpty = false,
     fname = document.getElementById("fname").value,
<<<<<<< HEAD:appTask1/appTaskJS.js
     lname = document.getElementById("lname").value,
=======
     lname = document.getElementById("lname").value;
>>>>>>> e23a69c1d4b6a4a4d57481b883f97b2ccc270240:appTask1/appTask1.js

     if(fname === ""){
          alert("First Name Connot Be Empty");
          isEmpty = true;
     }
     else if(lname === ""){
          alert("Last Name Connot Be Empty");
          isEmpty = true;
     }
<<<<<<< HEAD:appTask1/appTaskJS.js
     return isEmpty;
=======
      return isEmpty;
>>>>>>> e23a69c1d4b6a4a4d57481b883f97b2ccc270240:appTask1/appTask1.js
 }

function addHtmlTableRow() {
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
     if(!checkEmptyInput()){
          var newRow = table.insertRow(table.length),
          cell1 = newRow.insertCell(0),
          cell2 = newRow.insertCell(1),
          fname = document.getElementById("fname").value,
<<<<<<< HEAD:appTask1/appTaskJS.js
          lname = document.getElementById("lname").value,
=======
          lname = document.getElementById("lname").value;
>>>>>>> e23a69c1d4b6a4a4d57481b883f97b2ccc270240:appTask1/appTask1.js

           cell1.innerHTML = fname;
           cell2.innerHTML = lname;
           // call the function to set the event to the new row
           selectedRowToInput();
     }
}

// display selected row data into input text
function selectedRowToInput() {
     for(var i = 1; i < table.rows.length; i++) {
          table.rows[i].onclick = function() {
               // get the seected row index
               rIndex = this.rowIndex;
               document.getElementById("fname").value = this.cells[0].innerHTML;
               document.getElementById("lname").value = this.cells[1].innerHTML;
               };
          }
}

//runs the function
selectedRowToInput();

function editHtmlTbleSelectedRow() {
     var fname = document.getElementById("fname").value,
<<<<<<< HEAD:appTask1/appTaskJS.js
     lname = document.getElementById("lname").value,
          if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = fname;
                table.rows[rIndex].cells[1].innerHTML = lname;
=======
     lname = document.getElementById("lname").value;
          if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = fname;
                table.rows[rIndex].cells[1].innerHTML = lname;

>>>>>>> e23a69c1d4b6a4a4d57481b883f97b2ccc270240:appTask1/appTask1.js
              }
}

function removeSelectedRow() {
     table.deleteRow(rIndex);
     // clear input text
     document.getElementById("fname").value = "";
     document.getElementById("lname").value = "";
}
