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

  headerContent.classList.add("content_header");
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
export function dashboard_create(user) {
  let dashBoard = document.createElement("div");
  let dashTop = document.createElement("div");
  let topName = document.createElement("h1");
  let topBlock1 = document.createElement("div");
  let block1Img = document.createElement("img");
  let block1text = document.createElement("a");
  let topBlock2 = document.createElement("div");
  let block2Img = document.createElement("img");
  let block2text = document.createElement("a");
  let topBlock3 = document.createElement("div");
  let block3Img = document.createElement("img");
  let block3text = document.createElement("a");
  let topBlock4 = document.createElement("div");
  let block4Img = document.createElement("img");
  let block4text = document.createElement("a");
  let topBlock5 = document.createElement("div");
  let block5Img = document.createElement("img");
  let block5text = document.createElement("a");
  let dashBottom = document.createElement("div");
  let bottomBlock1 = document.createElement("div");
  let bBlock1Img = document.createElement("img");
  let bBlock1Text = document.createElement("p");
  let bottomBlock2 = document.createElement("div");
  let bBlock2Img = document.createElement("img");
  let bBlock2Text = document.createElement("p");

  dashBoard.classList.add("dashBoard");
  dashTop.classList.add("dashTop");
  topBlock1.classList.add("box");
  topBlock2.classList.add("box");
  topBlock3.classList.add("box");
  topBlock4.classList.add("box");
  topBlock5.classList.add("box");
  dashBottom.classList.add("dashBottom");
  bottomBlock1.classList.add("box");
  bottomBlock2.classList.add("box2");
  bottomBlock2.classList.add("box");

  topName.innerHTML = "valuet";
  block1text.innerHTML = "Overview";
  block2text.innerHTML = "Wallets";
  block3text.innerHTML = "Transactions";
  block4text.innerHTML = "Market";
  block5text.innerHTML = "Exchange";
  bBlock1Text.innerHTML = user.name + " " + user.surname;
  bBlock2Text.innerHTML = "Log out";

  block1text.href = "/";
  block2text.href = "/pages/wallets/";
  block3text.href = "/pages/transactions/";
  block4text.href = "/pages/market/";
  block5text.href = "/pages/exChange/";
  block1Img.src = "../../public/img/dash_overviews.svg";
  block2Img.src = "../../public/img/dash_wallets.svg";
  block3Img.src = "../../public/img/dash_transactions.svg";
  block4Img.src = "../../public/img/dash_market.svg";
  block5Img.src = "../../public/img/dash_exchange.svg";
  bBlock1Img.src = "../../public/img/dash_accaunt.svg";
  bBlock2Img.src = "../../public/img/dash_log_out.svg";

  document.body.prepend(dashBoard);
  dashBoard.append(dashTop, dashBottom);
  dashTop.append(
    topName,
    topBlock1,
    topBlock2,
    topBlock3,
    topBlock5,
    topBlock4
  );
  dashBottom.append(bottomBlock1, bottomBlock2);
  topBlock1.append(block1Img, block1text);
  topBlock2.append(block2Img, block2text);
  topBlock3.append(block3Img, block3text);
  topBlock4.append(block4Img, block4text);
  topBlock5.append(block5Img, block5text);
  bottomBlock1.append(bBlock1Img, bBlock1Text);
  bottomBlock2.append(bBlock2Img, bBlock2Text);

  bBlock2Text.onclick = () => {
    let conf = confirm("Are you sure that you want log out?");
    if (conf) {
      let conf2 = confirm("Are you really really sure? Maybe you want stay?");
      if (conf2) {
        localStorage.clear();
        setTimeout(() => {
          location.assign("/pages/login/");
        }, 500);
      }
    }
  };
}
