import * as gear from './gear'

export const Shoulders = [
    gear.NoneItem,
    new gear.Item("Giantstalker's Epaulets",
        new gear.BaseStats(0, 24, 5, 14, 9),
        new gear.AttackStats(1, 0, 0, 0),
        gear.CasterZero,
        new gear.Resistances(0, 0, 0, 0, 7),
        new gear.DefenseStats(317, 0, 0, 0, 0),
        gear.WeaponZero),
    new gear.Item("Dragonstalker's Spaulders",
        new gear.BaseStats(0, 23, 13, 15, 6),
        new gear.AttackStats(1, 0, 0, 0),
        gear.CasterZero,
        new gear.Resistances(10, 0, 0, 0, 0),
        new gear.DefenseStats(362, 0, 0, 0, 0),
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
