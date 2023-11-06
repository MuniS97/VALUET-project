let eye = document.querySelector("#img2");
eye.onclick = () => {
  myFunction();
};
function myFunction() {
  let x = document.querySelector("#inp");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
