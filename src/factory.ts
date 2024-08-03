// Factory Method Pattern

interface Product {
    use(): void;
}

class ConcreteProductA implements Product {
    public use(): void {
        console.log('Using Product A');
    }
}

class ConcreteProductB implements Product {
    public use(): void {
        console.log('Using Product B');
    }
}

abstract class Creator {
    public abstract factoryMethod(): Product;

    public operate(): void {
        const product = this.factoryMethod();
        product.use();
    }
}

class ConcreteCreatorA extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

// Usage
const creatorA = new ConcreteCreatorA();
creatorA.operate();

const creatorB = new ConcreteCreatorB();
creatorB.operate();
