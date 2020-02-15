import * as gear from './gear'

export const Belts = [
    gear.NoneItem,
    new gear.Item("Giantstalker's Belt",
        new gear.BaseStats(0, 18, 9, 16, 4),
        new gear.AttackStats(0, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(7, 0, 0, 0, 0),
        new gear.DefenseStats(237, 0, 0, 0, 0),
        gear.WeaponZero),
    new gear.Item("Dragonstalker's Belt",
        new gear.BaseStats(0, 23, 13, 15, 11),
        new gear.AttackStats(0, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(0, 0, 0, 0, 10),
        new gear.DefenseStats(271, 0, 0, 0, 0),
        gear.WeaponZero),
];
