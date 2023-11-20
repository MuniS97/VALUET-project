import {
  dashboard_create,
  headerCreate,
  reload_wallets,
} from "../../modules/ui";
import { user } from "../../modules/user";
import { getData } from "../../modules/helpers";

headerCreate();
dashboard_create(user);

let wallets = document.querySelector(".wallets");
let btn_add_wallet = document.querySelector("#btn");

getData("/wallets?user_id=" + user.id).then((res) => {
  if (res.status !== 200 && res.status !== 201) return;
  reload_wallets(res.data, wallets);
});

btn_add_wallet.onclick = () => {
  location.assign("/pages/add_wallet/");
};
