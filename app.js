let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let copy = document.querySelector(".copy");
let cut = document.querySelector(".cut");

bold.addEventListener("click", () => {
  document.execCommand("bold", false, null);
});

italic.addEventListener("click", () => {
  document.execCommand("italic", false, null);
});

underline.addEventListener("click", () => {
  document.execCommand("underline", false, null);
});

copy.addEventListener("click", () => {
    document.execCommand("copy", false, null)
})

cut.addEventListener("click", () => {
    document.execCommand("cut", false, null)
})
