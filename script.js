$("h1").hide().fadeIn(2000);

$("button").click(() => {
  $("h1").text("Hello, World!");
});

$("#p0").hover(() => {
  $("#p0").css("color", "crimson");
  $("#p0").css("cursor", "pointer");
}, () => {
  $("#p0").css("color", "black");
});

$("#p0").click(() => {
  $("#p0").fadeOut(1000);
});

$("button").on({
  mouseenter: () => {
    $("button").css("transform", "translateX(5px)");
  },
  mouseleave: () => {
    $("button").css("transform", "translateX(0px)");
  }
})

$("#p1").click(() => {
  $("#p2").hide(2000, () => {
    $("#p3").hide(2000, () => {
      $("#p4").hide(2000).fadeOut(2000);
    });
  })
});

$("button").click(() => {
  $("#p1").fadeToggle(1000);
});