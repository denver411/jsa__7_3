import Bowman from './js/Character/instances/Bowman';

const bowman = new Bowman('1');
const bowman1 = new Bowman('2');
const bowman2 = new Bowman('3');

// bowman.health = 5;
bowman1.powerMode = 1;
bowman1.attackEvent();
bowman1.attackEvent();
bowman1.attackEvent();
bowman1.powerMode = 1;

bowman2.levelUp();
bowman2.attackEvent();
bowman2.powerMode = 1;

console.log(bowman, bowman.attack);
console.log(bowman1, bowman1.attack);
console.log(bowman2, bowman2.attack);
