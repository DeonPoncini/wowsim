import {BaseStats} from './gear/gear.js'

export const clazz = {
    DRUID: 'Druid',
    HUNTER: 'Hunter',
    MAGE: 'Mage',
    PALADIN: 'Paladin',
    PRIEST: 'Priest',
    ROGUE: 'Rogue',
    SHAMAN: 'Shaman',
    WARLOCK: 'Warlock',
    WARRIOR: 'Warrior',
}

export const race = {
    DWARF: 'Dwarf',
    GNOME: 'Gnome',
    HUMAN: 'Human',
    NIGHTELF: 'Night Elf',
    ORC: 'Orc',
    TAUREN: 'Tauren',
    TROLL: 'Troll',
    UNDEAD: 'Undead',
}

export const class_to_race = new Map([
    [clazz.DRUID, [race.NIGHTELF, race.TAUREN]],
    [clazz.HUNTER, [race.DWARF, race.NIGHTELF, race.ORC,
        race.TAUREN, race.TROLL]],
    [clazz.MAGE, [race.GNOME, race.HUMAN, race.TROLL, race.UNDEAD]],
    [clazz.PALADIN, [race.DWARF, race.HUMAN]],
    [clazz.PRIEST, [race.DWARF, race.HUMAN, race.NIGHTELF,
        race.TROLL, race.UNDEAD]],
    [clazz.ROGUE, [race.DWARF, race.GNOME, race.HUMAN, race.NIGHTELF,
        race.ORC, race.TROLL, race.UNDEAD]],
    [clazz.SHAMAN, [race.ORC, race.TAUREN, race.TROLL]],
    [clazz.WARLOCK, [race.GNOME, race.HUMAN, race.ORC, race.UNDEAD]],
    [clazz.WARRIOR, [race.DWARF, race.GNOME, race.HUMAN, race.NIGHTELF,
        race.ORC, race.TAUREN, race.TROLL, race.UNDEAD]],
]);

export const base_health = new Map([
    [clazz.DRUID, 1483],
    [clazz.HUNTER, 1467],
    [clazz.MAGE, 1360],
    [clazz.PALADIN, 1381],
    [clazz.PRIEST, 1387],
    [clazz.ROGUE, 1523],
    [clazz.SHAMAN, 1280],
    [clazz.WARLOCK, 1414],
    [clazz.WARRIOR, 1689],
]);

export const base_mana = new Map([
    [clazz.DRUID, 1244],
    [clazz.HUNTER, 1720],
    [clazz.MAGE, 1273],
    [clazz.PALADIN, 1512],
    [clazz.PRIEST, 1436],
    [clazz.SHAMAN, 1520],
    [clazz.WARLOCK, 1373],
]);

export const base_stats = new Map([
    [clazz.DRUID, new Map([
        [race.NIGHTELF, new BaseStats(62,65,100,69,110)],
        [race.TAUREN, new BaseStats(70,55,95,72,112)],
    ])],
    [clazz.HUNTER, new Map([
        [race.DWARF, new BaseStats(57,121,64,93,69)],
        [race.NIGHTELF, new BaseStats(52,130,65,89,70)],
        [race.ORC, new BaseStats(58,122,62,92,73)],
        [race.TAUREN, new BaseStats(60,120,60,92,72)],
        [race.TROLL, new BaseStats(56,127,61,91,71)],
    ])],
    [clazz.MAGE, new Map([
        [race.GNOME, new BaseStats(25,38,133,44,120)],
        [race.HUMAN, new BaseStats(30,35,125,45,126)],
        [race.TROLL, new BaseStats(31,37,121,26,121)],
        [race.UNDEAD, new BaseStats(29,33,123,46,125)],
    ])],
    [clazz.PALADIN, new Map([
        [race.DWARF, new BaseStats(107,61,69,103,74)],
        [race.HUMAN, new BaseStats(105,65,70,100,78)],
    ])],
    [clazz.PRIEST, new Map([
        [race.DWARF, new BaseStats(37,36,119,53,124)],
        [race.HUMAN, new BaseStats(35,40,120,50,131)],
        [race.NIGHTELF, new BaseStats(32,45,120,49,125)],
        [race.TROLL, new BaseStats(36,42,116,51,126)],
        [race.UNDEAD, new BaseStats(34,38,118,51,130)],
    ])],
    [clazz.ROGUE, new Map([
        [race.DWARF, new BaseStats(82,126,34,78,49)],
        [race.GNOME, new BaseStats(75,133,40,74,50)],
        [race.HUMAN, new BaseStats(80,130,35,75,52)],
        [race.NIGHTELF, new BaseStats(77,135,35,74,50)],
        [race.ORC, new BaseStats(83,127,32,77,53)],
        [race.TROLL, new BaseStats(81,132,31,76,51)],
        [race.UNDEAD, new BaseStats(79,128,33,76,55)],
    ])],
    [clazz.SHAMAN, new Map([
        [race.ORC, new BaseStats(88,52,87,97,103)],
        [race.TAUREN, new BaseStats(90,50,85,97,102)],
        [race.TROLL, new BaseStats(86,57,86,96,101)],
    ])],
    [clazz.WARLOCK, new Map([
        [race.GNOME, new BaseStats(40,53,119,64,115)],
        [race.HUMAN, new BaseStats(45,50,110,65,120)],
        [race.ORC, new BaseStats(48,47,107,66,118)],
        [race.UNDEAD, new BaseStats(44,48,108,66,120)],
    ])],
    [clazz.WARRIOR, new Map([
        [race.DWARF, new BaseStats(122,76,29,113,44)],
        [race.GNOME, new BaseStats(115,83,35,109,45)],
        [race.HUMAN, new BaseStats(120,80,30,110,47)],
        [race.NIGHTELF, new BaseStats(117,85,30,109,45)],
        [race.ORC, new BaseStats(123,77,27,112,48)],
        [race.TAUREN, new BaseStats(125,75,25,112,47)],
        [race.TROLL, new BaseStats(121,82,26,111,46)],
        [race.UNDEAD, new BaseStats(119,78,28,111,50)],
    ])],
]);
