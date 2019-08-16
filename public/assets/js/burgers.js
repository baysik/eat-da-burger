// on click, it should set devoured to true and not show it in the list
$(".devour").on("click", function(event) {
     var id = $(this).data("burgerid");
     event.preventDefault();
     console.log(id);
     alert("clicked");
});

// on click, it should add a burger to the list to devour.
$("#submit").on("click", function(event) {
     event.preventDefault();
     console.log("lol");
     alert("hello");
});
