// Decorator.ts

interface Coffee {
    cost(): number;
}

class SimpleCoffee implements Coffee {
    public cost(): number {
        return 5;
    }
}

class MilkDecorator implements Coffee {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    public cost(): number {
        return this.coffee.cost() + 2;
    }
}

// Uso del patrón Decorator
const coffee = new SimpleCoffee();
const milkCoffee = new MilkDecorator(coffee);

console.log(coffee.cost()); // 5
console.log(milkCoffee.cost()); // 7
