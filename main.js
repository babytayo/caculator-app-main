{
  const Switch = document.querySelector(".switch");
  Switch.addEventListener("click", () => {
    const move = document.querySelector(".toggle");
    if (move.style.left === "0%") {
      move.style.left = "40%";
      move.style.background = "#c85401";
      document.body.style.background = "#e6e6e6";
      document.querySelector(".output_area").style.background = "#eeeeee";
      document.querySelector(".output_area").style.color = "#35352b";

      document.querySelector(".btn_box").style.background = "#d3cdcd";
      document.querySelector(".head_section").style.color = "#35352b";
      document
        .querySelectorAll(".btn")
        .forEach((e) => (e.style.color = "#35352b"));
      document
        .querySelectorAll(".btn")
        .forEach((e) => (e.style.background = "#e5e4e0"));
      document.querySelector(".special_btn1").style.background = "#c85401";
      document
        .querySelectorAll(".special_btn2")
        .forEach((e) => (e.style.background = "#388187"));
      document.querySelector(".special_btn1").style.color = "#eae3db";

      !important;
    } else if (move.style.left === "40%") {
      move.style.left = "80%";
      move.style.background = "#00decf";
      document.body.style.background = "#17062a";
      document.querySelector(".output_area").style.background = "#1e0836";
      document.querySelector(".output_area").style.color = "#d8c254";

      document.querySelector(".btn_box").style.background = "#1e0836";
      document.querySelector(".head_section").style.color = "#d8c254";
      document
        .querySelectorAll(".btn")
        .forEach((e) => (e.style.color = "#d8c254"));
      document
        .querySelectorAll(".btn")
        .forEach((e) => (e.style.background = "#331b4d"));
      document.querySelector(".special_btn1").style.background = "#00decf";
      document.querySelector(".special_btn1").style.color = "#000000";
      document
        .querySelectorAll(".special_btn2")
        .forEach((e) => (e.style.background = "#56077c"));
      !important;
    } else {
      move.style.left = "0%";
      move.style.background = "#d03e31";
      document.querySelector(".special_btn1").style.background = "#d03e31";
      document.body.style.background = "#3b4664";
      document.querySelector(".output_area").style.background = "#181f32";
      document.querySelector(".output_area").style.color = "#fbfbfb";

      document.querySelector(".btn_box").style.background = "#181f32";
      document.querySelector(".head_section").style.color = "#e1e4e9";
      document
        .querySelectorAll(".btn")
        .forEach((e) => (e.style.color = "#3b4664"));
    }
    document
      .querySelectorAll(".btn")
      .forEach((e) => (e.style.background = "#eae3db"));
    document
      .querySelectorAll(".special_btn2")
      .forEach((e) => (e.style.background = "#647299"));
    document.querySelector(".special_btn1").style.color = "#eae3db";
    !important;
  });
}
