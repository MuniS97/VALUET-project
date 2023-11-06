export function eyeFunction() {
  let x = document.querySelector("#inp");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
