// on click, it should set devoured to true and not show it in the list
$(".devour-the-burger").on("click", function(event) {
     let id = $(this).data("burgerid");
     console.log(id);
     alert("clicked");

     // var devouredState = {
     //      devoured: true
     // };
     // // Send the PUT request.

     // $.ajax("/api/burgers/" + id, {
     //      type: "PUT",
     //      data: devouredState
     // }).then(function() {
     //      console.log("changed sleep to", devouredState);
     //      // Reload the page to get the updated list
     //      location.reload();
     // });
});

// on click, it should add a burger to the list to devour.
$("#submit").on("click", function(event) {
     event.preventDefault();
     console.log("lol, wow");
     alert("hello");
});
