import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';



// console.log(achievement);
const figure1 = [0, 0, 1]
const figure2 = [0, 1, 0]
const figure3 = [1, 0, 0]

const fire1 = {
  name: 'Goblin Beerserker',
  cost: 1,
  mana: 'fire',
  attack: 4,
  life: 16,
  ability: 'At the beginning of its owners turn, Goblin Berserker deals 2 damage to its neighboring creatures.'
}

const fire2 = {
  name: 'Wall of Fire',
  cost: 2,
  mana: 'fire',
  attack: 0,
  life: 5,
  ability: 'When Wall of Fire is summoned it deals 5 damage to each of the opponents creatures.'
}


ReactDOM.render(<Counter />, document.getElementById('root'));
