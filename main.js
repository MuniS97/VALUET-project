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
      data: [60, 50, 45, 80, 60, 70, 75, 100],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
    },
  ],
};
let spending = new Chart(spendingBlock, {
  type: "line",
  data: data2,
});

let marketBlock = document.querySelector("#marketChart");
const data3 = {
  labels: [
    "MDV 15",
    "MDV 17",
    "MDV 19",
    "MDV 21",
    "MDV 23",
    "MDV 25",
    "MDV 27",
    "MDV 29",
    "MDV 31",
    "MDV 33",
  ],
  datasets: [
    {
      label: "Spending Activity",
      data: [24000, 20000, 26000, 24000, 28000, 26000, 34000, 30000, 36000],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
    },
  ],
};
let market = new Chart(marketBlock, {
  type: "line",
  data: data3,
});
