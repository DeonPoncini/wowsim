import * as gear from './gear.js'

export const Fingers = [
    gear.NoneItem,
    new gear.Item("Band of Accuria",
        new gear.BaseStats(0, 16, 0, 10, 0),
        new gear.AttackStats(2, 0, 0, 0),
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
    new gear.Item("Don Julio's Band",
        new gear.BaseStats(0, 0, 0, 11, 0),
        new gear.AttackStats(1, 1, 16, 16),
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
