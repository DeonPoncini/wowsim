import * as gear from './gear'

export const Wrists = [
    gear.NoneItem,
    new gear.Item("Giantstalker's Bracers",
        new gear.BaseStats(0, 20, 6, 11, 5),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        new gear.DefenseStats(185, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const WristEnchants = [
    gear.NoneItem,
    new gear.Item("Enchant Bracer - Minor Agility",
        new gear.BaseStats(0, 1, 0, 0, 0),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
