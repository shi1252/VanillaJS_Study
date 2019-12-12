// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function handleResize(event)
{
  if (window.innerWidth > 600)
    document.body.style.background = 'red';
  else if (window.innerWidth > 400)
    document.body.style.background = 'green';
  else
    document.body.style.background = 'blue';
}

window.addEventListener("resize", handleResize);