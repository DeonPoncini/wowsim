import * as gear from './gear'

export const Trinkets = [
    gear.NoneItem,
    new gear.Item("Royal Seal of Eldre'Thalas",
        gear.BaseZero,
        new gear.AttackStats(0, 0, 0, 48),
        gear.CasterZero,
        new gear.Resistances(10, 0, 0, 0, 0),
        gear.DefenseZero,
        gear.WeaponZero),
    new gear.Item("Blackhand's Breadth",
        gear.BaseZero,
        new gear.AttackStats(0, 20, 0, 0),
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        gear.WeaponZero),
];
