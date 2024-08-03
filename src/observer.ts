// Observer Pattern

// Subject interface
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Observer interface
interface Observer {
    update(product: string): void;
}

// Concrete implementation of Subject: Store
class Store implements Subject {
    private observers: Observer[] = [];
    private newProduct: string = '';

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.newProduct);
        }
    }

    public setNewProduct(product: string): void {
        this.newProduct = product;
        this.notifyObservers();
    }
}

// Concrete implementation of Observer: Customer
class Customer implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public update(product: string): void {
        console.log(`${this.name} received notification: New product available: ${product}`);
    }
}

// Using the Observer pattern
const store = new Store();

const customer1 = new Customer('Alice');
const customer2 = new Customer('Bob');

store.addObserver(customer1);
store.addObserver(customer2);


store.setNewProduct('New Smartphone');
// Alice received notification: New product available: New Smartphone
// Bob received notification: New product available: New Smartphone
store.removeObserver(customer1);


store.setNewProduct('New Laptop');
// Bob received notification: New product available: New Laptop