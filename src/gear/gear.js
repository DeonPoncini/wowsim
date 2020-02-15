function makeStruct(n) {
    var names = n.split(' ');
    var count = names.length;
    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}

export const BaseStats = makeStruct("strength agility intellect stamina spirit");
export const AttackStats = makeStruct("hit crit map rap");
export const CasterStats = makeStruct("spellpower healing spellcrit mp5 spellpen");
export const Resistances = makeStruct("fire frost arcane nature shadow");
export const DefenseStats = makeStruct("armor defense block dodge parry");
export const WeaponStats = makeStruct("dmgmin dmgmax speed twoh");

// defaults
export const BaseZero = new BaseStats(0, 0, 0, 0, 0);
export const AttackZero  = new AttackStats(0, 0, 0, 0);
export const CasterZero  = new CasterStats(0, 0, 0, 0, 0);
export const ResistanceZero  = new Resistances(0, 0, 0, 0, 0);
export const DefenseZero  = new DefenseStats(0, 0, 0, 0, 0);
export const WeaponZero  = new WeaponStats(0, 0, 0, false);

export const Item = makeStruct("name base attack caster resistance defense weapon");
export const NoneItem = new Item("None", BaseZero, AttackZero, CasterZero,
    ResistanceZero, DefenseZero, WeaponZero);
