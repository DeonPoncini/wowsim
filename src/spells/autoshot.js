import Spell from './spell';

class Autoshot extends Spell {

    constructor(ranged) {
        let cooldown = ranged.weapon.speed;
        console.log(cooldown);
        super(0, cooldown);
    }

    apply_effect(character, mods) {
        // calculate the autoshot damage
        let dmgmin = character.weapons.ranged.weapon.dmgmin;
        let dmgmax = character.weapons.ranged.weapon.dmgmax;
        let speed = character.weapons.ranged.weapon.speed;
        let rap = character.stats.attack.rap;

        // rap altering
        let mark_mod = (100 + mods.mark)/100;
        let hunters_mark = 110*mark_mod;
        let tsa_mod = 100*mods.tsa;

        // damage altering
        let slaying_mod = (100 + mods.slaying)/100;
        let rws_mod = (100 + mods.rws)/100;

        let total_rap = rap + hunters_mark + tsa_mod;
        let average_dmg = (dmgmin + dmgmax)/2;

        return slaying_mod*rws_mod*(total_rap/14*speed + average_dmg);
    }

}

export default Autoshot;
