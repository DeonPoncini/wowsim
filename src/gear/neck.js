import * as gear from './gear'

export const Neck = [
    gear.NoneItem,
    new gear.Item("Onyxia Tooth Pendant",
        new gear.BaseStats(0, 12, 0, 9, 0),
        new gear.AttackStats(1, 1, 0, 0),
        gear.CasterZero,
        new gear.Resistances(10, 0, 0, 0, 0),
        gear.DefenseZero,
        gear.WeaponZero),
];
