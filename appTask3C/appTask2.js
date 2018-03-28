/*
 Let's update our functions to use jQuery to manipulate DOM nodes
*/
function testDom() {

  // We'll add a listener to our create element button
  $("#buttonAdd").on("click", function() {

    // pulling elements from our array
    let classValue = $("#inputClass").val();
    let contentValue = $("#inputContent").val();

    // jQuery element creation uses HTML tags
    // We'll set the text value when we create the object
    $newElem = $("<li></li>").text(contentValue);

    // we can add click listeners as well
    // in this case, we're going to make each new item removable
    $newElem.on("click", function() {

	  $(this).remove();

    });

    // then we can add a class
    // $newElem.addClass(classValue);

    // we have an element, but it isn't part of the DOM yet.
    // For now, we'll append it to the end of our page div
    $("#listOne").append($newElem);
  });

  // We'll add a listener to our swap button
  $("#deletebutton").on("click", function() {

    let $lastItem = $("#listOne li:last").remove();

  });
}

testDom();
