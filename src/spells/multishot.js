import Spell from './spell';
import * as hunter from './hunter.js';

class Multishot extends Spell {

    constructor() {
        super(0, 10);
    }

    apply_effect(character, mods) {
        let speed = 2.8;
        let ammo_dps = character.weapons.ammo.weapon.dmgmax;
        let rap = character.stats.attack.rap;

        let rap_mod = hunter.rap_modifier(mods);
        let dmg_mod = hunter.ranged_damage_modifier(mods);

        // multishot damage modifiers
        let barrage = 1 + mods.barrage/100;
        let gs = 1;
        if (mods.giantalkster === 8) {
            gs = 1.15;
        }
        dmg_mod = barrage*gs*dmg_mod;

        let total_rap = rap + rap_mod;
        let dmg = hunter.random_weapon_damage(character);

        return dmg_mod*(ammo_dps*speed + total_rap/14*speed + dmg + 150);
    }

}

export default Multishot;
