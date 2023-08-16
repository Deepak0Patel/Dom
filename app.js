// const listItem = document.getElementsByClassName("listitem");
// console.log(listItem);

// for (i = 0; i < listItem.length; i++) {
//   listItem[i].style.color = "green";
// }

// const head = document.getElementById("head");

// function changeColor() {
//   head.style.color = "purple";
//   head.innerText = "i am changed now";
// }
// head.addEventListener("mouseover", changeColor);
/// show and hide function

const revel_btn = document.getElementsByClassName("btn");
const content = document.getElementsByClassName("content")[0];

function showElements() {
  if (content.classList.contains("master_btn")) {
    content.classList.remove("master_btn");
  } else {
    content.classList.add("master_btn");
  }
}
revel_btn[0].addEventListener("click", showElements);
