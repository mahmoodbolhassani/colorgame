const colors = [
  "#9b5de5",
  "#f15bb5",
  "#00bbf9",
  "#fb5607",
  "#ff006e",
  "#8338ec",
  "#3a86ff",
];
let row = 3;
let col = 3;
let range;
let score;
let items = document.querySelectorAll(".item");
let modalcont = document.querySelector(".modal-container");
let btn = document.querySelector(".btn");
let mscore = document.querySelector(".modal-container>div>h2");
let scoregame = document.querySelector(".scoregame");
btn.addEventListener("click", function () {
  modalcont.style.height = "0px";
  initgame();
});
initgame();
function initgame() {
  score = 0;
  range = 50;
  scoregame.innerHTML = "امتیاز شما:" + score;
  coloritems();
}
function coloritems() {
  let mcolor = colors[parseInt(Math.random() * colors.length)];
  items.forEach((item) => (item.style.backgroundColor = mcolor));
  let target = parseInt(Math.random() * (row * col));
  items[target].style.backgroundColor = light(mcolor, range);
  items.forEach((item, num) => {
    if (target == num) {
      item.removeEventListener("click", lose);
      item.addEventListener("click", next);
    } else {
      item.removeEventListener("click", next);
      item.addEventListener("click", lose);
    }
  });
}
function light(color, amount) {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}
function next() {
  score++;
  range -= 1;
  //   console.log(range)
  if (range == 5) {
    range += 1;
  }
  console.log(range);
  scoregame.innerHTML = "امتیاز:" + score;
  coloritems();
  // alert('eyval')
}
function lose() {
  mscore.innerHTML = "امتیاز شما:" + score;
  modalcont.style.height = "500px";
  // alert('bakhidi')
}
