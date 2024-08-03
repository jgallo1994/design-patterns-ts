// Prototype Pattern

interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    private data: string;

    constructor(data: string) {
        this.data = data;
    }

    public clone(): Prototype {
        return new ConcretePrototype(this.data);
    }

    public getData(): string {
        return this.data;
    }
}

// Uso del patrón Prototype
const prototype1 = new ConcretePrototype('Original Data');
const prototype2 = prototype1.clone();

console.log(prototype1.getData()); // Original Data
console.log(prototype2.getData()); // Original Data
