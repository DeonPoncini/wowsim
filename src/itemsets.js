import {Head} from './gear/head.js';
//import {Neck} from './gear/neck.js';
import {Shoulders} from './gear/shoulders.js';
//import {Back} from './gear/back.js';
import {Chest} from './gear/chest.js';
import {Wrists} from './gear/wrists.js';
//import {Weapons} from './gear/weapons.js';
import {Hands} from './gear/hands.js';
import {Waist} from './gear/waist.js';
import {Legs} from './gear/legs.js';
import {Feet} from './gear/feet.js';
//import {Fingers} from './gear/finger.js';
//import {Trinkets} from './gear/trinkets.js';

function giantstalker(selected) {
    let ret = [];
    let count = 0;
    if (Waist[selected.waist].name === "Giantstalker's Belt") { count++; }
    if (Feet[selected.feet].name === "Giantstalker's Boots") { count++; }
    if (Wrists[selected.wrists].name === "Giantstalker's Bracers") { count++; }
    if (Chest[selected.chest].name === "Giantstalker's Breastplate") { count++; }
    if (Shoulders[selected.shoulders].name ===
        "Giantstalker's Epaulets") { count++; }
    if (Hands[selected.hands].name === "Giantstalker's Gloves") { count++; }
    if (Head[selected.head].name === "Giantstalker's Helmet") { count++; }
    if (Legs[selected.legs].name === "Giantstalker's Leggings") { count++; }
    ret.push("Giantstalker Armor");
    if (count === 8) {
        ret.push(8);
        return ret;
    }
    if (count >= 5) {
        ret.push(5);
        return ret;
    }
    if (count >= 3) {
        ret.push(3);
        return ret;
    }
    return ret;
}

function dragonstalker(selected) {
    let ret = [];
    let count = 0;
    if (Waist[selected.waist].name === "Dragonstalker's Belt") { count++; }
    if (Feet[selected.feet].name === "Dragonstalker's Greaves") { count++; }
    if (Wrists[selected.wrists].name === "Dragonstalker's Bracers") { count++; }
    if (Chest[selected.chest].name === "Dragonstalker's Breastplate") { count++; }
    if (Shoulders[selected.shoulders].name ===
        "Dragonstalker's Spaulders") { count++; }
    if (Hands[selected.hands].name === "Dragonstalker's Gauntlets") { count++; }
    if (Head[selected.head].name === "Dragonstalker's Helm") { count++; }
    if (Legs[selected.legs].name === "Dragonstalker's Legguards") { count++; }
    ret.push("Dragonstalker Armor");
    if (count === 8) {
        ret.push(8);
        return ret;
    }
    if (count >= 5) {
        ret.push(5);
        return ret;
    }
    if (count >= 3) {
        ret.push(3);
        return ret;
    }
    return ret;
}

export function checkSets(selected) {
    let sets = new Map();
    let gs = giantstalker(selected);
    if (gs.length === 2) {
        sets.set(gs[0], gs[1]);
    }
    let ds = dragonstalker(selected);
    if (ds.length === 2) {
        sets.set(ds[0], ds[1]);
    }

    return sets;
}
