window.addEventListener("scroll", () => {
  const target = document.querySelectorAll(".scroll");
  $("#SFCont").removeClass("slide-in-left");
  validateSF();

  for (index = 0; index < target.length; index++) {
    let pos = window.pageYOffset * target[index].dataset.sratey;

    if (target[index].dataset.dir === "ver") {
      target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
    } else {
      let posX = window.pageYOffset * target[index].dataset.sratex;
      let posY = window.pageYOffset * target[index].dataset.sratey;
      target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
    }
  }
});

validateSF = () => {
  let x = window.pageYOffset;
  if (x > 700) {
    $("#SFCont").addClass("off");
    $("#SFCont").removeClass("slide-in-left");
  } else if (x === 0 && $("#SFCont").hasClass("off")) {
    $("#SFCont").removeClass("off");
    $("#SFCont").addClass("slide-in-left");
  }
};

// Btn ToTop
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Fin Btn ToTop
