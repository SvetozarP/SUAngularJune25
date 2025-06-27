abstract class Melon {
    constructor(public weight: number, public melonSort: string) {}
    abstract get element(): string;
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
    toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {
    get element() {
        return 'Water';
    }
}
class Firemelon extends Melon {
    get element() {
        return 'Fire';
    }
}
class Earthmelon extends Melon {
    get element() {
        return 'Earth';
    }
}
class Airmelon extends Melon {
    get element() {
        return 'Air';
    }
}

class Melolemonmelon extends Watermelon {
    private elements = ['Fire', 'Earth', 'Air', 'Water'];
    private current = 0;
    private _element = 'Water';
    get element() {
        return this._element;
    }
    morph() {
        this._element = this.elements[this.current];
        this.current = (this.current + 1) % this.elements.length;
    }
}

// Example usage:
// let watermelon = new Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());
// let melo = new Melolemonmelon(10, "Super");
// console.log(melo.toString());
// melo.morph();
// console.log(melo.toString());