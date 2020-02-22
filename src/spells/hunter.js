import * as data from '../data.js';

export function average_weapon_damage(character) {
    let dmgmin = character.weapons.ranged.weapon.dmgmin;
    let dmgmax = character.weapons.ranged.weapon.dmgmax;
    let average_dmg = (dmgmin + dmgmax)/2;
    return average_dmg;
}

export function random_weapon_damage(character) {
    let dmgmin = character.weapons.ranged.weapon.dmgmin;
    let dmgmax = character.weapons.ranged.weapon.dmgmax;
    let diff = dmgmax - dmgmin;
    let dmg = Math.random() * diff + dmgmin;
    return dmg;
}

export function rap_modifier(agility, mods) {
    let lightning_mod = 1 + mods.lightning/100;
    let agi = agility*lightning_mod;

    let agi_rap = data.rap_per_agi.get(data.clazz.HUNTER)*agi;

    let ds = 1;
    if (mods.dragonstalker >= 3) {
        ds = 1.2;
    }
    let hawk_mod = 120*ds*mods.hawk;

    // improved hunters mark increases hunter's mark bonus by x%
    let mark_mod = 1 + mods.mark/100;
    let hunters_mark = 110*mark_mod;

    // true shot aura gives 100 melee and ranged AP
    let tsa_mod = 100*mods.tsa;

    // return rap modifiers
    return hunters_mark + tsa_mod + agi_rap + hawk_mod;
}

export function ranged_damage_modifier(mods) {

    // monster and human slaying increases damage by up to 3%
    let slaying_mod = 1 + mods.slaying/100;

    // range weapon specialization increase damage up to 5%
    let rws_mod = 1 + mods.rws/100;

    return slaying_mod*rws_mod;
}
