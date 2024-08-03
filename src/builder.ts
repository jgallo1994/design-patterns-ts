// Builder Pattern

interface Car {
    setEngine(engine: string): void;
    setWheels(wheels: number): void;
    setSeats(seats: number): void;
    getCar(): string;
}

class CarBuilder implements Car {
    private engine: string;
    private wheels: number;
    private seats: number;

    public setEngine(engine: string): void {
        this.engine = engine;
    }

    public setWheels(wheels: number): void {
        this.wheels = wheels;
    }

    public setSeats(seats: number): void {
        this.seats = seats;
    }

    public getCar(): string {
        return `Car with ${this.engine} engine, ${this.wheels} wheels, and ${this.seats} seats.`;
    }
}

class Director {
    private builder: Car;

    constructor(builder: Car) {
        this.builder = builder;
    }

    public buildSportCar(): void {
        this.builder.setEngine('Sport engine');
        this.builder.setWheels(4);
        this.builder.setSeats(2);
    }

    public buildFamilyCar(): void {
        this.builder.setEngine('Family engine');
        this.builder.setWheels(4);
        this.builder.setSeats(5);
    }
}

// Usage
const builder = new CarBuilder();
const director = new Director(builder);

director.buildSportCar();
console.log(builder.getCar());

director.buildFamilyCar();
console.log(builder.getCar());
