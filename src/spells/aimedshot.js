import Spell from './spell';
import * as hunter from './hunter.js';

class AimedShot extends Spell {

    constructor() {
        super(3, 6);
    }

    apply_effect(character, mods) {
        let speed = 2.8;
        let ammo_dps = character.weapons.ammo.weapon.dmgmax;
        let rap = character.stats.attack.rap;

        let rap_mod = hunter.rap_modifier(mods);
        let dmg_mod = hunter.ranged_damage_modifier(mods);

        let total_rap = rap + rap_mod;
        let dmg = hunter.random_weapon_damage(character);

        return dmg_mod*(ammo_dps*speed + total_rap/14*speed + dmg + 600);
    }

}

export default AimedShot;
