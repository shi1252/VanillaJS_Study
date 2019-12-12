// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");

const COUNTRY_LS = "country";

function load() {
  const country = localStorage.getItem(COUNTRY_LS);
  if (country != null) {
    select.value = country;
  }
}

function handleChange(event) {
  localStorage.setItem(COUNTRY_LS, event.target.value);
}

select.addEventListener("change", handleChange);

load();
