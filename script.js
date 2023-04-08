$(window)
  .scroll(function () {
    var $window = $(window),
      $body = $("body"),
      $panel = $(".panel");

    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function () {
      var $this = $(this);

      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();

function revealProcess() {
  var x = document.getElementById("process");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

