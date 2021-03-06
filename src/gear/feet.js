import * as gear from './gear.js'

export const Feet = [
    gear.NoneItem,
    new gear.Item("Giantstalker's Boots",
        new gear.BaseStats(0, 28, 0, 14, 6),
        gear.AttackZero,
        gear.CasterZero,
        new gear.Resistances(0, 0, 0, 0, 7),
        new gear.DefenseStats(290, 0, 0, 0, 0),
        gear.WeaponZero),
    new gear.Item("Dragonstalker's Greaves",
        new gear.BaseStats(0, 30, 6, 15, 6),
        gear.AttackZero,
        gear.CasterZero,
        new gear.Resistances(10, 0, 0, 0, 0),
        new gear.DefenseStats(332, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const FeetEnchants = [
    gear.NoneItem,
    new gear.Item("Enchant Boots - Greater Agility",
        new gear.BaseStats(0, 7, 0, 0, 0),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
