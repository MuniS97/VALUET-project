export function eyeFunction() {
  let x = document.querySelector("#inp");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export function headerCreate() {
  let header = document.createElement("header");
  let headerContent = document.createElement("div");
  let headerLeft = document.createElement("div");
  let headerLeftInp = document.createElement("input");
  let headerLeftImg = document.createElement("img");
  let headerRight = document.createElement("div");
  let headerRightImg1 = document.createElement("img");
  let headerRightImg2 = document.createElement("img");

  headerContent.classList.add("content");
  headerContent.classList.add("headerContent");
  headerLeft.classList.add("headerLeft");
  headerRight.classList.add("headerRight");
  headerRightImg2.classList.add("img2");
  headerRightImg1.classList.add("img1");

  headerLeftImg.src = "../../public/img/header_search.svg";
  headerRightImg1.src = "../../public/img/header_email.svg";
  headerRightImg2.src = "../../public/img/header_notification.svg";

  document.body.prepend(header);
  header.append(headerContent);
  headerContent.append(headerLeft, headerRight);
  headerLeft.append(headerLeftInp, headerLeftImg);
  headerRight.append(headerRightImg1, headerRightImg2);
}
