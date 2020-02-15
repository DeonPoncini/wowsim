import * as gear from './gear.js'

export const Chest = [
    gear.NoneItem,
    new gear.Item("Gianstalker's Breastplate",
        new gear.BaseStats(0, 26, 11, 23, 0),
        new gear.AttackStats(0, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(10, 0, 0, 0, 0),
        new gear.DefenseStats(422, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const ChestEnchants = [
    gear.NoneItem,
    new gear.Item("Enchant Chest - Greater Stats",
        new gear.BaseStats(4, 4, 4, 4, 4),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
