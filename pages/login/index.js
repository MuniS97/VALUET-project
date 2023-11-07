import { getData } from "../../modules/helpers";
import { eyeFunction } from "../../modules/ui";

let form = document.forms.login;

form.onsubmit = (e) => {
  e.preventDefault();

  let user = {};

  let fm = new FormData(form);
  fm.forEach((value, key) => {
    user[key] = value;
  });

  getData("/users?email=" + user.email).then((res) => {
    if (!res) return;
    if (res.status !== 200 && res.status !== 201) return;
    if (res.data.length === 0) {
      setTimeout(() => {
        alert("not found");
      }, 500);
      return;
    }

    let [res_user] = res.data;

    if (+res_user.password === +user.password) {
      delete res_user.password;
      localStorage.setItem("user", JSON.stringify(res_user));
      location.assign("/");
    } else {
      setTimeout(() => {
        alert("wrong password");
      }, 500);
    }
  });
};

let eye = document.querySelector("#img2");
eye.onclick = () => {
  eyeFunction();
};
