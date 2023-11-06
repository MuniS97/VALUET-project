import { headerCreate } from "./modules/ui";
import { user } from "./modules/user";
headerCreate();

function dashboard_create(user) {
  let dashBoard = document.createElement("div");
  let dashTop = document.createElement("div");
  let topName = document.createElement("h2");
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
  block1Img.src = "./public/img/dash_overviews.svg";
  block2Img.src = "./public/img/dash_wallets.svg";
  block3Img.src = "./public/img/dash_transactions.svg";
  block4Img.src = "./public/img/dash_market.svg";
  block5Img.src = "./public/img/dash_exchange.svg";
  bBlock1Img.src = "./public/img/dash_accaunt.svg";
  bBlock2Img.src = "./public/img/dash_log_out.svg";

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
}

dashboard_create(user);
