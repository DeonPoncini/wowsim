import * as gear from './gear'

export const Back = [
    gear.NoneItem,
    new gear.Item("Cape of the Black Baron",
        new gear.BaseStats(0, 15, 0, 0, 0),
        new gear.AttackStats(0, 0, 20, 20),
        gear.CasterZero,
        gear.ResistanceZero,
        new gear.DefenseStats(45, 0, 0, 0, 0),
        gear.WeaponZero),
];

export const BackEnchants = [
    gear.NoneItem,
    new gear.Item("Enchant Cloak - Lesser Agility",
        new gear.BaseStats(0, 3, 0, 0, 0),
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
