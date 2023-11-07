import { headerCreate, dashboard_create } from "./modules/ui";
import { user } from "./modules/user";
import Chart from "chart.js/auto";

headerCreate();
dashboard_create(user);

let currentDateText = document.querySelector(".topLeft p");
currentDateText.innerHTML =
  new Date().getDate() +
  " . " +
  new Date().getMonth() +
  " . " +
  new Date().getFullYear();

let balanceBlock = document.querySelector("#balance1");

const data = {
  datasets: [
    {
      label: "My crypt",
      data: [38, 15, 74],
      backgroundColor: ["orange", "whitesmoke", "#1288e8"],
      hoverOffset: 4,
    },
  ],
};

let balance = new Chart(balanceBlock, {
  type: "doughnut",
  data: data,
});

let spendingBlock = document.querySelector("#spending2");

const data2 = {
  labels: [2, 4, 6, 8, 10, 12, 14, 16],
  datasets: [
    {
      label: "Spending Activity",
      data: [60, 50, 45, 75, 80, 90, 100],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
let spending = new Chart(spendingBlock, {
  type: "line",
  data: data2,
});
