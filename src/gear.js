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

var BaseStats = makeStruct("strength agility intellect stamina spirit");
var AttackStats = makeStruct("hit crit map rap");
var CasterStats = makeStruct("spellpower healing spellcrit mp5 spellpen");
var Resistances = makeStruct("fire frost arcane nature shadow");
var DefenseStats = makeStruct("armor defense block dodge parry");
var WeaponStats = makeStruct("dmgmin dmgmax speed");

// defaults
var BaseZero = new BaseStats(0, 0, 0, 0, 0);
var AttackZero  = new AttackStats(0, 0, 0, 0);
var CasterZero  = new CasterStats(0, 0, 0, 0, 0);
var ResistanceZero  = new Resistances(0, 0, 0, 0, 0);
var DefenseZero  = new DefenseStats(0, 0, 0, 0, 0);
var WeaponZero  = new WeaponStats(0, 0, 0);

var Item = makeStruct("name base attack caster resistance defense weapon");
var NoneItem = new Item("None", BaseZero, AttackZero, CasterZero,
    ResistanceZero, DefenseZero, WeaponZero);

export var Belts = [
    NoneItem,
    new Item("Giantstalker's Belt",
        new BaseStats(0, 18, 9, 16, 4),
        new AttackStats(0, 1, 0, 0),
        CasterZero,
        new Resistances(7, 0, 0, 0, 0),
        new DefenseStats(237, 0, 0, 0, 0),
        WeaponZero),
    new Item("Dragonstalker's Belt",
        new BaseStats(0, 23, 13, 15, 11),
        new AttackStats(0, 1, 0, 0),
        CasterZero,
        new Resistances(0, 0, 0, 0, 10),
        new DefenseStats(271, 0, 0, 0, 0),
        WeaponZero),
];

export var Boots = [
    NoneItem,
    new Item("Giantstalker's Boots",
        new BaseStats(0, 28, 0, 14, 6),
        AttackZero,
        CasterZero,
        new Resistances(0, 0, 0, 0, 7),
        new DefenseStats(290, 0, 0, 0, 0),
        WeaponZero),
    new Item("Dragonstalker's Greaves",
        new BaseStats(0, 30, 6, 15, 6),
        AttackZero,
        CasterZero,
        new Resistances(10, 0, 0, 0, 0),
        new DefenseStats(332, 0, 0, 0, 0),
        WeaponZero),
];
