function testDom() {

  let listOne = document.getElementById("listOne");
  let inputField = document.getElementById("inputField");

  //Event Listener
  buttonElement.addEventListener("click", function() {

    //Populate
    let newElem = document.createElement("LI");
    let newButton = document.createElement("button");
    let buttonContent = document.createTextNode("DELETE");
    let newContent = document.createTextNode(inputField.value);

    // we'll add the text node and button as children to our new element
    newElem.appendChild(newContent);
    newElem.appendChild(newButton);

    //  we'll add text to the button
    newButton.appendChild(buttonContent);

    //  have newButton remove the li
    newButton.addEventListener("click", function() {
      listOne.removeChild(newElem);
    });

    listOne.appendChild(newElem);
  });

}

testDom();