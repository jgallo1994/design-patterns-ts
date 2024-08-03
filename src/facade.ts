// Facade Pattern

class Subsystem1 {
    public operation1(): void {
        console.log('Subsystem1: operation1');
    }
}

class Subsystem2 {
    public operation2(): void {
        console.log('Subsystem2: operation2');
    }
}

class Facade {
    private subsystem1: Subsystem1;
    private subsystem2: Subsystem2;

    constructor() {
        this.subsystem1 = new Subsystem1();
        this.subsystem2 = new Subsystem2();
    }

    public operation(): void {
        console.log('Facade: operation');
        this.subsystem1.operation1();
        this.subsystem2.operation2();
    }
}

// Usage
const facade = new Facade();
facade.operation();
