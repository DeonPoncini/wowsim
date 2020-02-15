import * as gear from './gear'

export const Head = [
    gear.NoneItem,
    new gear.Item("Giantstalker's Helmet",
        new gear.BaseStats(0, 23, 15, 23, 8),
        new gear.AttackStats(0, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(10, 0, 0, 0, 0),
        new gear.DefenseStats(343, 0, 0, 0, 0),
        gear.WeaponZero),
    new gear.Item("Dragonstalker's Helm",
        new gear.BaseStats(0, 27, 16, 26, 8),
        new gear.AttackStats(0, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(0, 10, 0, 0, 10),
        new gear.DefenseStats(392, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const HeadEnchants = [
    gear.NoneItem,
    new gear.Item("Lesser Arcanum of Voracity",
        new gear.BaseStats(0, 8, 0, 0, 0),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
