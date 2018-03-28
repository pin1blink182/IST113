function testDom(){

  let listOne = document.getElementById("listOne");
  let inputField = document.getElementById("inputField");

  $("buttonCreate").on("click", function(){
    let newElem = document.createElement("list")
    let newContent = document.createTextNode(inputField.value);
  })

  $("buttonDelete").on("click", function(){
    listOne.removeChild(newElem);
  })
}
