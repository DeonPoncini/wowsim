
class Spell {

    constructor(cast_time, cooldown) {
        this.timer = 0;
        this.tps = 10;
        this.gcd = 0;
        this.cast_time = cast_time*this.tps;
        this.cooldown = this.cast_time + cooldown*this.tps;
        this.casting = false;
    }

    activate_gcd() {
        if (!this.casting) {
            this.gcd = 1.5*this.tps;
        }
    }

    tick(character) {
        if (this.casting) {
            if (this.timer === this.cast_time) {
                // we can activate the spell
                this.apply_effect(character);
            }
            if (this.timer === this.cooldown) {
                // spell is over we are done casting
                this.casting = false;
                this.timer = 0;
            }
            this.timer += 1;
        }
        if (this.gcd !== 0) {
            if (this.timer === this.gcd) {
                // gcd expired
                this.gcd = 0;
                this.timer = 0;
            } else {
                this.timer += 1;
            }
        }
    }

    cast() {
        // can we cast?
        if (this.casting) {
            return false; // already being cast/cooldown
        }
        if (this.gcd !== 0) {
            return false; // we are in global cooldown
        }
        // we can cast the spell
        this.casting = true;
        this.timer = 0;
        return true;
    }

    apply_effect(character) {
        console.log("This should be overriden");
    }

}

export default Spell;