{
  const Switch = document.querySelector(".switch");
  Switch.addEventListener("click", () => {
    // Toggle variable
    const move = document.querySelector(".toggle");

    // Object Data store
    const changeColor = {
      outputArea: document.querySelector(".output_area"),
      btnBox: document.querySelector(".btn_box"),
      headSection: document.querySelector(".head_section"),
      allBtn: document.querySelectorAll(".btn"),
      specialBtn1: document.querySelector(".special_btn1"),
      specialBtn2: document.querySelectorAll(".special_btn2"),
    };
    // Object Data store

    if (move.style.left === "0%") {
      // Toggle btn movement
      move.style.left = "40%";

      // Change cutom CSS Colours
      move.style.background = "#c85401";
      document.body.style.background = "#e6e6e6";
      changeColor.outputArea.style.background = "#eeeeee";
      changeColor.outputArea.style.color = "#35352b";
      changeColor.btnBox.style.background = "#d3cdcd";
      changeColor.headSection.style.color = "#35352b";
      changeColor.allBtn.forEach((e) => (e.style.color = "#35352b"));
      changeColor.allBtn.forEach((e) => (e.style.background = "#e5e4e0"));
      changeColor.specialBtn1.style.background = "#c85401";
      changeColor.specialBtn1.style.color = "#eae3db";
      changeColor.specialBtn2.forEach((e) => (e.style.background = "#388187"));
      !important;
    } else if (move.style.left === "40%") {
      // Toggle btn movement
      move.style.left = "80%";

      // Change cutom CSS Colours
      move.style.background = "#00decf";
      document.body.style.background = "#17062a";
      changeColor.outputArea.style.background = "#1e0836";
      changeColor.outputArea.style.color = "#d8c254";
      changeColor.btnBox.style.background = "#1e0836";
      changeColor.headSection.style.color = "#d8c254";
      changeColor.allBtn.forEach((e) => (e.style.color = "#d8c254"));
      changeColor.allBtn.forEach((e) => (e.style.background = "#331b4d"));
      changeColor.specialBtn1.style.background = "#00decf";
      changeColor.specialBtn1.style.color = "#000000";
      changeColor.specialBtn2.forEach((e) => (e.style.background = "#56077c"));
      !important;
    } else {
      // Toggle btn movement
      move.style.left = "0%";

      // Change cutom CSS Colours
      move.style.background = "#d03e31";
      document.querySelector(".special_btn1").style.background = "#d03e31";
      document.body.style.background = "#3b4664";
      changeColor.outputArea.style.background = "#181f32";
      changeColor.outputArea.style.color = "#fbfbfb";
      changeColor.btnBox.style.background = "#181f32";
      changeColor.headSection.style.color = "#e1e4e9";
      changeColor.allBtn.forEach((e) => (e.style.color = "#3b4664"));
      changeColor.allBtn.forEach((e) => (e.style.background = "#eae3db"));
      changeColor.specialBtn1.style.background = "d03e31";
      changeColor.specialBtn1.style.color = "#eae3db";
      changeColor.specialBtn2.forEach((e) => (e.style.background = "#647299"));
      !important;
    }
  });
}
