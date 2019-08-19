$(function() {
     $(".devour-the-burger").on("click", function(event) {
          let id = $(this).data("burgerid");
          let id2 = $(this).data("burgerstate");
          console.log(id, id2);

          var devouredState = {
               devoured: 1
          };
          // Send the PUT request.

          $.ajax("/api/burgers/" + id, {
               type: "PUT",
               data: devouredState
          }).then(function() {
               console.log("changed sleep to", devouredState);
               // Reload the page to get the updated list
               location.reload();
          });
     });

     // on click, it should add a burger to the list to devour.
     $(".add-burger").on("click", function(event) {
          event.preventDefault();
          console.log($("[name=burger-name]").val());

          var newBurger = {
               burger_name: $("#burger-to-order").val(),
               devoured: 0
          };
          // Send the PUT request.
          console.log(newBurger);

          $.ajax("/api/burgers", {
               type: "POST",
               data: newBurger
          }).then(function() {
               console.log("created new burger");
               // Reload the page to get the updated list
               location.reload();
          });
     });
});
