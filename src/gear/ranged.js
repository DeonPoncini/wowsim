import * as gear from './gear'

export const Ranged = [
    gear.NoneItem,
    new gear.Item("Rhok'delar, Longbow of the Ancient Keepers",
        gear.BaseZero,
        new gear.AttackStats(0, 1, 0, 17),
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        new gear.WeaponStats(gear.WeaponType.BOW,
            89, 166, 2.9, false)),
];

export const RangedEnchants = [
    gear.NoneItem,
    new gear.Item("Sniper Scope",
        gear.BaseZero,
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        new gear.WeaponStats(gear.WeaponType.NONE, 7, 7, 0, false)),
];
