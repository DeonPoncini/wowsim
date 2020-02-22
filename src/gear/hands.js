import * as gear from './gear'

export const Hands = [
    gear.NoneItem,
    new gear.Item("Giantstalker's Gloves",
        new gear.BaseStats(0, 18, 0, 12, 0),
        new gear.AttackStats(2, 0, 0, 0),
        gear.CasterZero,
        new gear.Resistances(7, 0, 0, 0, 0),
        new gear.DefenseStats(264, 0, 0, 0, 0),
        gear.WeaponZero),
    new gear.Item("Dragonstalker's Gauntlets",
        new gear.BaseStats(0, 20, 13, 17, 6),
        new gear.AttackStats(0, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(0, 0, 0, 0, 10),
        new gear.DefenseStats(301, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const HandEnchants = [
    gear.NoneItem,
    new gear.Item("Enchant Gloves - Greater Agility",
        new gear.BaseStats(0, 7, 0, 0, 0),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
