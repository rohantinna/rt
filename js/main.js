$(document).ready(function() {
  // $("#right-click").hide();
  $(document).bind("contextmenu", function(e) {
    $("#right-click")
      .fadeIn(500)
      .css({
        display: "grid"
      })
      .delay(5000)
      .fadeOut(500);

    return false;
  });
});
