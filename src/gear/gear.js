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

export const WeaponType = {
    NONE: 'None',
    BOW: 'Bow',
    CROSSBOW: 'Crossbow',
    DAGGER: 'Dagger',
    FIST: 'Fist',
    GUN: 'Gun',
    H1AXE: 'One-Handed Axe',
    H1MACE: 'One-Handed Mace',
    H1SWORD: 'One-Handed Sword',
    POLEARM: 'Polearm',
    STAVE: 'Stave',
    THROWN: 'Thrown',
    H2AXE: 'Two-Handed Axe',
    H2MACE: 'Two-Handed Mace',
    H2SWORD: 'Two-Handed Sword',
    WAND: 'Wand',
};

export const BaseStats = makeStruct("strength agility intellect stamina spirit");
export const AttackStats = makeStruct("hit crit map rap");
export const CasterStats = makeStruct("spellpower healing spellcrit mp5 spellpen");
export const Resistances = makeStruct("fire frost arcane nature shadow");
export const DefenseStats = makeStruct("armor defense block dodge parry");
export const WeaponStats = makeStruct("type dmgmin dmgmax speed twoh");
export const WeaponSkill = makeStruct("bow crossbow dagger fist gun h1axe h1mace h1sword polearm stave thrown h2axe h2mace h2sword wand");

// defaults
export const BaseZero = new BaseStats(0, 0, 0, 0, 0);
export const AttackZero  = new AttackStats(0, 0, 0, 0);
export const CasterZero  = new CasterStats(0, 0, 0, 0, 0);
export const ResistanceZero  = new Resistances(0, 0, 0, 0, 0);
export const DefenseZero  = new DefenseStats(0, 0, 0, 0, 0);
export const WeaponZero  = new WeaponStats(WeaponType.NONE, 0, 0, 0, false);
export const WeaponSkillZero = new WeaponSkill(300, 300, 300, 300, 300, 300, 300,
    300, 300, 300, 300, 300, 300, 300, 300);

export const Item = makeStruct("name base attack caster resistance defense weapon");
export const NoneItem = new Item("None", BaseZero, AttackZero, CasterZero,
    ResistanceZero, DefenseZero, WeaponZero);
