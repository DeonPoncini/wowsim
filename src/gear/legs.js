import * as gear from './gear'

export const Legs = [
    gear.NoneItem,
    new gear.Item("Giantstalker's Leggings",
        new gear.BaseStats(0, 32, 6, 15, 8),
        new gear.AttackStats(0, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(0, 0, 0, 0, 10),
        new gear.DefenseStats(369, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const LegEnchants = [
    gear.NoneItem,
    new gear.Item("Lesser Arcanum of Voracity",
        new gear.BaseStats(0, 8, 0, 0, 0),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
