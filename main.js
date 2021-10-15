const arenas = document.querySelector(".arenas");
const fightBtn = document.querySelector(".fightBtn");
const NewGameBtn = document.querySelector(".newGameBtn");

let isGameOver = false;

const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Kunai", "Axe"],
  attack,
};
player1.attack();

const player2 = {
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Steel Fans", "Flying Blade"],
  attack,
};
player2.attack();

function attack() {
  console.log(this.name + " " + "Fight...");
}

function createElement(el, className) {
  const tag = document.createElement(el);
  if (className) {
    tag.classList.add(className);
  }
  return tag;
}

function createPlayer(newPlayer) {
  const player = createElement("div", "player" + newPlayer.player);
  const progressbar = createElement("div", "progressbar");
  const character = createElement("div", "character");
  const life = createElement("div", "life");
  const name = createElement("div", "name");

  const img = createElement("img");

  player.appendChild(progressbar);
  player.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);

  life.style.width = newPlayer.hp + "%";

  name.innerHTML = newPlayer.name;
  img.src = newPlayer.img;

  return player;
}

function randomDamage(max, min) {
  const damage = Math.floor(Math.random() * (max - min));
  return damage;
}

function changeHP(player) {
  const MAX_DAMAGE = 20;
  const MIN_DAMAGE = 1;

  if (player.hp === 0) {
    return;
  }

  const damage = randomDamage(MAX_DAMAGE, MIN_DAMAGE);
  if (player.hp > damage) {
    player.hp -= damage;
  } else player.hp = 0;

  changeDisplayHp(player);

  if (player.hp === 0) {
    gameOver(player.player);
    fightBtn.disabled = true;
  }
}

function gameOver(numberLosePlayer) {
  const winName = numberLosePlayer === 1 ? player2.name : player1.name;

  const label = createElement("div", "gameOverTitle");
  label.innerHTML = winName + " win";
  arenas.appendChild(label);
  isGameOver = true;
}

fightBtn.addEventListener("click", () => {
    if (player1.hp === 0 || player2.hp === 0) {
    return;
    }
  changeHP(player1);
  if(player1.hp!==0)
    changeHP(player2);
});


arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

function changeDisplayHp(player){
    document.querySelector(".player" + player.player + " .life").style.width = player.hp + "%";
}

function newGame(){
    if(isGameOver){
        player1.hp = 100;
    changeDisplayHp(player1);

    player2.hp = 100;
    changeDisplayHp(player2);

    fightBtn.disabled = false;
    document.querySelector('.gameOverTitle').remove();
    isGameOver = false;
    }
}

NewGameBtn.addEventListener('click', newGame)