let content = document.getElementsByClassName("content")[0];
let menu = document.querySelectorAll(".menu");
// document.getElementById("j").style.textDecoration;

//bold

function bold() {
  if (!menu[0].classList.contains("click")) {
    menu[0].classList.add("click");
    content.style.fontWeight = "bold";
  } else {
    menu[0].classList.remove("click");
    content.style.fontWeight = "normal";
  }
}

//italic

function italic() {
  if (!menu[1].classList.contains("click")) {
    menu[1].classList.add("click");
    content.style.fontStyle = "italic";
  } else {
    menu[1].classList.remove("click");
    content.style.fontStyle = "normal";
  }
}

function underLines() {
  if (!menu[2].classList.contains("click")) {
    menu[2].classList.add("click");
    content.style.textDecoration = "underline";
  } else {
    menu[2].classList.remove("click");
    content.style.textDecoration = "none";
  }
}
function changeFont(font) {
  content.style.fontFamily = font.value;
}

function background_Color(col) {
  content.style.backgroundColor = col.value;
}

function font_color(fontColor) {
  content.style.color = fontColor.value;
}
// document.getElementById("dwd").style.fontSize
function font_size(fontin) {
  content.style.fontSize = fontin.value + "px";
}

function screenshot() {
  html2canvas(content).then((canvas) => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL();
    console.log(canvas.toDataURL());
    a.download = "screenshot.jpg";
    a.click();
  });
}
