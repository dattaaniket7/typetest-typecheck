interface NPC {
  health: number;
}

interface Enemy extends NPC {
  power: number;
}

type Stranger = Enemy | NPC;

function makeEnemy(stranger: Stranger) {
  //   if (stranger instanceof Ememy) {
  if ("power" in stranger) {
    return { health: stranger.health, power: stranger.power };
  }
}

// const test = makeEnemy({ health: 5, power: 2 });
// console.log(test);
