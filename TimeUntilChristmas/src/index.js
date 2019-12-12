import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-25:00:00:00");
  const now = new Date();
  const date = xmasDay.getTime() - now.getTime();

  const s = Math.floor(date / 1000) % 60;
  const m = Math.floor(date / 60000) % 60;
  const h = Math.floor(date / 3600000) % 24;
  const d = Math.floor(date / 86400000);

  clockTitle.innerText = `${d > 9 ? d : `0${d}`}d ${h > 9 ? h : `0${h}`}h ${
    m > 9 ? m : `0${m}`
  }m ${s > 9 ? s : `0${s}`}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
