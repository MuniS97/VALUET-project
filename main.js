import { headerCreate, dashboard_create } from "./modules/ui";
import { user } from "./modules/user";

headerCreate();
dashboard_create(user);

let currentDateText = document.querySelector(".topLeft p");
currentDateText.innerHTML =
  new Date().getDate() +
  " . " +
  new Date().getMonth() +
  " . " +
  new Date().getFullYear();
