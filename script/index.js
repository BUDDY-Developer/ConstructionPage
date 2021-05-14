$(document).ready(function () {
  $("#github").on("click", () => {
    let url = "https://github.com/BUDDY-Developer";
    window.open(url, "_blank");
  });
  $("#linkedin").on("click", () => {
    let url = "https://www.linkedin.com/in/abhijith-udayakumar-6372b91a3";
    window.open(url, "_blank");
  });
  $("#insta").on("click", () => {
    let url = "https://www.instagram.com/buddydeveloper/";
    window.open(url, "_blank");
  });
  $("#").on("click", () => {
    $("#notifyMe").fadeOut(300, () => {
      $(".txtOuter").fadeIn(300);
    });
  });
 
  // $("#notifyMe").on("mouseover", () => {
  //   $("#btn_shadow").removeAttr("hidden");
  // });
  // $("#notifyMe").on("mouseleave", () => {
  //   $("#btn_shadow").attr("hidden", true);
  // });
});
