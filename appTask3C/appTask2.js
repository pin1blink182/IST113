var myKey = "listValues"
var myItems = [];

//Local storage
function setupLocal() {

  //check to see if an item has already been created with same id
  if(localStorage.getItem(myKey) !== null) {

    //take a string value
    let myItemsString = localStorage.getItem(myKey);

    //Convert string to array
    myItems - JSON.parse(myItemsString);

    $(myItems).each(function(){
      createItem(this);
    });
  }
  else {
    createItem("List One Item");
  }

  //listener
  $("#buttonAdd").on("click", function(){
    //pull values
    let curVal = $("#inputContent").val();

    createItem(curVal);
    myItems.push(curVal);
    saveItems();
  });

  function createItem(itemValue) {
    $newElem = $("<li></li>").text(itemValue);

    $newElem.on("click", function() {
      removeItem(this);
    });

    $("#listOne").append($newElem);
  }

  function removeItem(item) {
    let itemText = $(item).text();
    let index = myItems.indexOf(itemText);

    if(index != -1){
      myItems.splice(index, 1);
      saveItems();
    }
    $(item).remove();
  }

  function saveItems() {
    let myItemsString = JSON.stringify(myItems);
    localStorage.setItem(myKey, myItemsString)
  }

  $(function() {
    setupLocal();
  });
}
