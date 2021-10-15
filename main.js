const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai', 'Axe'],
    attack
}
player1.attack();

const player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel Fans', 'Flying Blade'],
    attack
}


player2.attack();

function attack(){
    console.log(this.name +' ' + 'Fight...');
}

function createPlayer(classPlayer, newPlayer) {
    const player = document.createElement('div');
    player.classList.add(classPlayer);
    
    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');


    player.appendChild(progressbar);
    player.appendChild(character);

    const life = document.createElement('div');
    life.classList.add('life');

    life.style.width = newPlayer.hp + "%";

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = newPlayer.name;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    const img = document.createElement('img');
    img.src = newPlayer.img;

    character.appendChild(img);

    document.querySelector('.arenas').appendChild(player)
}

createPlayer('player1', player1);
createPlayer('player2', player2);
