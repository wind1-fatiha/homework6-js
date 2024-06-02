const $start = document.getElementById("start"); 
const $game = document.getElementById("game"); 
const $time = document.getElementById("time"); 
const $timeHeader = document.getElementById("time-header"); 
const $result = document.getElementById("result"); 
const $resultHeader = document.getElementById("result-header"); 
const $gameTime = document.getElementById("game-time"); 
 
 
 
let score = 0; 
 
$start.addEventListener("click", startGame); 
$game.addEventListener("click", handleBox); 
$gameTime.addEventListener("input", setGameTime); 
 
function startGame() { 
  $start.classList.toggle("hide"); 
  $gameTime.setAttribute("disabled", true); 
  $game.style.background = "red"; 
  setGameTime(); 
  score = 0; 
 
  let timeGame = +$time.innerText; 
 
  let interval = setInterval(function () { 
 
    if (timeGame <= 0) { 
      clearInterval(interval); 
      endGame(); 
    } else { 
      timeGame = (timeGame - 0.1).toFixed(1); 
      $time.innerText = timeGame; 
    } 
  }, 100); 
  renderBox(); 
} 
 
function endGame() { 
  $start.classList.toggle("hide"); 
  $game.style.background = "#ccc"; 
  $gameTime.removeAttribute("disabled"); 
  $timeHeader.classList.toggle("hide"); 
  $game.innerHTML = ""; 
 
  setScore(); 
} 
function renderBox() { 
  $game.innerHTML = ""; 
 
  let box = document.createElement("div"); 
  let boxSize = getRandom(30, 150); 
  let gameZone = $game.getBoundingClientRect(); 
  let maxLeft = gameZone.width - boxSize; 
  let maxTop = gameZone.height - boxSize; 
  box.style.width = box.style.height = boxSize + "px"; 
 
  box.style.background = `white`; 
  box.style.cursor = "pointer"; 
  box.setAttribute("id", "check"); 
  box.style.position = "absolute"; 
  box.style.left = getRandom(0, maxLeft) + "px"; 
  box.style.top = getRandom(0, maxTop) + "px"; 
 
  $game.appendChild(box); 
} 
 
function handleBox(event) { 
  if (event.target.id === "check") { 
    score += 1; 
    renderBox(); 
    console.log("clicked"); 
  } 
} 
 
function getRandom(min, max) { 
 
 
  return Math.floor(Math.random() * (max - min) + min); 
 
} 
 
function setScore() { 
  $result.innerText = score; 
  $resultHeader.classList.toggle("hide"); 
} 
 
function setGameTime() { 
 
  if ($timeHeader.classList.contains("hide")) { 
    $resultHeader.classList.toggle("hide"); 
    $timeHeader.classList.toggle("hide") 
  } 
 
  let gameTime = +$gameTime.value 
  $time.innerText = gameTime.toFixed(1); 
}
