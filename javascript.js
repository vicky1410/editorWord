let content = document.getElementById("editor");

let displays = document.getElementById("container-edit");

let bold = document.getElementById("bold");
let italic = document.getElementById("italic");

// to print text

content.addEventListener("input", function () {
  displays.innerHTML = content.value;
});

//bold

bold.addEventListener("click", function () {
  if (bold.className == "hide") {
    bold.className = "show";
    displays.style.fontWeight = "bold";
  } else {
    bold.className = "hide";

    displays.style.fontWeight = "normal";
  }
});

//italic
italic.addEventListener("click", function () {
  if (italic.className == "hide") {
    italic.className = "show";
    displays.style.fontStyle = "italic";
  } else {
    italic.className = "hide";
    displays.style.fontStyle = "normal";
  }
});
