import { getData, postData } from "../../modules/helpers";
import { eyeFunction } from "../../modules/ui";

let form = document.forms.singUp;

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
    if (res.data.length > 0) {
      alert("accaunt already taken!");
      return;
    }

    postData("/users", user).then((res) => {
      if (res.status === 200 || res.status === 201) {
        alert("success");
        setTimeout(() => {
          location.assign("/pages/login/");
        }, 1000);
      } else {
        alert("smth got wrong. Please try again!");
      }
    });
  });
};

let eye = document.querySelector("#img2");
eye.onclick = () => {
  eyeFunction();
};
