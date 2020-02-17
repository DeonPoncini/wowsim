import * as gear from './gear'

export const Ammo = [
    gear.NoneItem,
    new gear.Item("Thorium Headed Arrow",
        gear.BaseZero,
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        new gear.WeaponStats(gear.WeaponType.AMMO, 17.5, 17.5, 0, false)),
];

export const Pouch = [
    gear.NoneItem,
    new gear.Item("Ancient Sinew Wrapped Lamina",
        gear.BaseZero,
        gear.AttackZero,
        gear.CasterZero,
        gear.ResistanceZero,
        gear.DefenseZero,
        new gear.WeaponStats(gear.WeaponType.AMMO, 0, 0, 0.15, false)),
];
