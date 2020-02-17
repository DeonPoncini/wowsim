import Spell from './spell';

class Autoshot extends Spell {

    constructor(ranged) {
        let cooldown = ranged.weapon.speed;
        console.log(cooldown);
        super(0, cooldown);
    }

    apply_effect(character) {
        console.log("Autoshot away!");
    }

}

export default Autoshot;
