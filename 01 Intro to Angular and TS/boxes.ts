class Box<T> {
    private items: T[] = [];

    add(element: T): void {
        this.items.push(element);
    }

    remove(): void {
        this.items.pop();
    }

    get count(): number {
        return this.items.length;
    }
}

// Example usage:
// let box = new Box<number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count); // 3
// box.remove();
// console.log(box.count); // 2

// let box = new Box<String>();
// box.add("Pesho");
// box.add("Gosho");
// console.log(box.count);
// box.remove();
// console.log(box.count);
