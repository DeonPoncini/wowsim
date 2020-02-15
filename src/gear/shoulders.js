import * as gear from './gear'

export const Shoulders = [
    gear.NoneItem,
    new gear.Item("Gianstalker's Epaulets",
        new gear.BaseStats(0, 24, 5, 14, 9),
        new gear.AttackStats(1, 0, 0, 0),
        gear.CasterZero,
        new gear.Resistances(0, 0, 0, 0, 7),
        new gear.DefenseStats(317, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const ShoulderEnchants = [
    gear.NoneItem,
    new gear.Item("Chromatic Mantle of the Dawn",
        gear.BaseZero,
        gear.AttackZero,
        gear.CasterZero,
        new gear.Resistances(5, 5, 5, 5, 5),
        gear.DefenseZero,
        gear.WeaponZero),
];
