// Strategy Pattern

interface Strategy {
    execute(a: number, b: number): number;
}

class AdditionStrategy implements Strategy {
    public execute(a: number, b: number): number {
        return a + b;
    }
}

class SubtractionStrategy implements Strategy {
    public execute(a: number, b: number): number {
        return a - b;
    }
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

// Usage
const context = new Context(new AdditionStrategy());
console.log(context.executeStrategy(5, 3)); // 8

context.setStrategy(new SubtractionStrategy());
console.log(context.executeStrategy(5, 3)); // 2
